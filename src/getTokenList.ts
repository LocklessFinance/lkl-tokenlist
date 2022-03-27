import { TokenList } from "@uniswap/token-lists";
import fs from "fs";
import hre from "hardhat";

import { TrancheFactory__factory } from "../typechain/factories/TrancheFactory__factory";

import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";

import { getPrincipalTokenInfos } from "./principalTokens";
import {
  ConvergentPoolFactory__factory,
} from "../typechain";
import { getAssetProxyTokenInfos } from "src/assetProxies";
import { getPrincipalPoolTokenInfos } from "src/ccpools";
import { getUnderlyingTokenInfos } from "src/underlying";
import { getVaultTokenInfos } from "src/vaults";
import { TokenTag } from "src/tags";
import { TagInfo } from "src/types";
import { Lockless_LOGO_URI } from "src/logo";

const provider = hre.ethers.provider;

export const locklessTags: Record<TokenTag, TagInfo> = {
  [TokenTag.UNDERLYING]: {
    name: "Underlying asset",
    description: "The base asset of a principal or yield token",
  },
  [TokenTag.PRINCIPAL]: {
    name: "Principal token",
    description:
      "Token that represents a deposit of principal into a yield position",
  },
  [TokenTag.CCPOOL]: {
    name: "ConvergentCurve pool",
    description: "Token that represents the balancer pool for Principal tokens",
  },
  [TokenTag.WPOOL]: {
    name: "Weighted pool",
    description: "Token that represents the balancer pool for Yield tokens",
  },
  [TokenTag.ASSET_PROXY]: {
    name: "Vault asset proxy",
    description:
      "Token that wraps a yield position, ie: Yearn vault asset proxy",
  },
  [TokenTag.VAULT]: {
    name: "Vault",
    description: "The yield vault, ie: Aave lending pool",
  },
  [TokenTag.VAULT_TOKEN]: {
    name: "Vault token",
    description: "The yield position, ie: Aave aDAI",
  },
};

export async function getTokenList(
  addressesJson: AddressesJsonFile,
  name: string,
  outputPath: string
) {
  const {
    chainId,
    addresses: {
      balancerVaultAddress,
      trancheFactoryAddress,
      wethAddress,
      wbtcAddress,
      usdcAddress,
      daiAddress,
      convergentPoolFactoryAddress,
    },
    safelist,
  } = addressesJson;

  const underlyingAddresses = [
    wethAddress,
    wbtcAddress,
    usdcAddress,
    daiAddress,
  ];
  console.log("underlyingAddresses", underlyingAddresses);
  if (underlyingAddresses.find((a) => a === undefined)) {
    console.warn(
      "Found at least one undefined underlying token address",
      underlyingAddresses
    );
  }

  const trancheFactory = TrancheFactory__factory.connect(
    trancheFactoryAddress,
    provider
  );

  const convergentPoolFactory = ConvergentPoolFactory__factory.connect(
    convergentPoolFactoryAddress,
    provider
  );

  const underlyingTokenAddresses = underlyingAddresses
    // Addresses that aren't available on the given chain (ie: we dont have
    // mainnet weth terms!) should be filled in w/ the zero address to be
    // compliant with the addresses.schema.json
    .filter(
      (address) => address !== "0x0000000000000000000000000000000000000000"
    )
    // if an address is actually missing, (shouldn't happen, there's a json schema that should prevent this!)
    .filter((address) => {
      if (!address) {
        return false;
      }
      return true;
    });

  console.log("underlyingTokenInfos");
  const underlyingTokenInfos = await getUnderlyingTokenInfos(
    chainId,
    underlyingTokenAddresses
  );
  console.log(underlyingTokenInfos)

  console.log("principalTokenInfos");
  const principalTokenInfos = await getPrincipalTokenInfos(
    chainId,
    trancheFactory,
    safelist
  );
  console.log(principalTokenInfos)

  console.log("assetProxyTokenInfos");
  const assetProxyTokenInfos = await getAssetProxyTokenInfos(
    chainId,
    principalTokenInfos
  );
  console.log(assetProxyTokenInfos)

  console.log("vaultTokenInfos");
  const vaultTokenInfos = await getVaultTokenInfos(
    chainId,
    assetProxyTokenInfos
  );
  console.log(vaultTokenInfos)

  console.log("principalPoolTokenInfos");
  const principalPoolTokenInfos = await getPrincipalPoolTokenInfos(
    chainId,
    convergentPoolFactory,
    safelist
  );
  console.log(principalPoolTokenInfos)


  const tokenList: TokenList = {
    name,
    logoURI: Lockless_LOGO_URI,
    tags: locklessTags,
    timestamp: new Date().toISOString(),
    version: {
      // TODO: implement this
      major: 0,
      minor: 0,
      patch: 0,
    },
    tokens: [
      ...underlyingTokenInfos,
      ...assetProxyTokenInfos,
      ...vaultTokenInfos,
      ...principalTokenInfos,
      ...principalPoolTokenInfos,
    ],
  };

  const tokenListString = JSON.stringify(tokenList, null, 2);
  console.log(tokenListString);

  // TODO: We have to validate this json schema ourselves before it can be
  // published to the uniswap directory.  For now, just look at this file in
  // vscode and make sure there are no squiggles.
  fs.writeFileSync(outputPath, tokenListString);
}
