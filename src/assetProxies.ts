import hre from "hardhat";
import uniq from "lodash.uniq";
import zip from "lodash.zip";

import { AaveAssetProxy__factory } from "../typechain/factories/AaveAssetProxy__factory";

import { Tranche__factory } from "../typechain/factories/Tranche__factory";;
import { ERC20 } from "../typechain/ERC20";
import { AssetProxyTokenInfo, PrincipalTokenInfo } from "./types";
import {
  getTokenNameMulti,
  getTokenSymbolMulti,
  getTokenDecimalsMulti,
} from "./erc20";
import { TokenTag } from "src/tags";
import { retryAsync } from "src/util/retry";

export const provider = hre.ethers.provider;

const MUMBAI_CHAIN_ID = 80001;
const GOERLI_CHAIN_ID = 5;
const MAINNET_CHAIN_ID = 1;

export async function getAssetProxyTokenInfos(
  chainId: number,
  principalTokenInfos: PrincipalTokenInfo[]
): Promise<AssetProxyTokenInfo[]> {
  const tranches = principalTokenInfos.map(({ address }) =>
    Tranche__factory.connect(address, provider)
  );

  const allPositions = await Promise.all(
    tranches.map((tranche) => retryAsync(tranche.position))
  );
  // uniq b/c different tranches can have the same positionj
  const uniqPositionAddresses = uniq(allPositions);
  const positions = uniqPositionAddresses.map((address) =>
    AaveAssetProxy__factory.connect(address, provider)
  );

  const vaults = await Promise.all(
    positions.map((position) => retryAsync(position.pool))
  );

  // We need to shim the names since some have mistakes deployed
  const names = await getTokenNameMulti(positions as unknown as ERC20[]);
  // const assetProxyNames = shimAssetProxyNames(
  //   chainId,
  //   uniqPositionAddresses,
  //   names
  // );

  // We need to shim the symbols since some have mistakes deployed
  const symbols = await getTokenSymbolMulti(positions as unknown as ERC20[]);
  // const assetProxySymbols = shimAssetProxySymbols(
  //   chainId,
  //   uniqPositionAddresses,
  //   symbols
  // );

  const decimals = await getTokenDecimalsMulti(positions as unknown as ERC20[]);

  const assetProxyTokensList = zip(
    uniqPositionAddresses,
    symbols,  //assetProxySymbols,
    names,  //assetProxyNames,
    decimals,
    vaults
  ).map(([address, symbol, name, decimal, vault]): AssetProxyTokenInfo => {
    return {
      chainId,
      address: address as string,
      symbol: symbol as string,
      decimals: decimal as number,
      name: name as string,
      tags: [TokenTag.ASSET_PROXY],
      extensions: { vault: vault as string },
      // TODO: What logo do we want to show for base assets?
      // logoURI: ""
    };
  });

  return assetProxyTokensList;
}

function shimAssetProxyNames(
  chainId: number,
  assetProxyAddresses: string[],
  assetProxyNames: string[]
) {
  // const overrides = nameOverrides[chainId] || {};
  const names = zip(assetProxyAddresses, assetProxyNames).map((zipped) => {
    const [vaultAddress, name] = zipped as [string, string];
    // if (overrides[vaultAddress]) {
    //   return overrides[vaultAddress];
    // }
    return name;
  });
  return names;
}

function shimAssetProxySymbols(
  chainId: number,
  assetProxyAddresses: string[],
  assetProxySymbols: string[]
) {
  // const overrides = symbolOverrides[chainId] || {};
  const symbols = zip(assetProxyAddresses, assetProxySymbols).map((zipped) => {
    const [vaultAddress, vaultSymbol] = zipped as [string, string];
    // if (overrides[vaultAddress]) {
    //   return overrides[vaultAddress];
    // }
    return vaultSymbol;
  });
  return symbols;
}
