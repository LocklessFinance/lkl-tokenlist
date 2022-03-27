import { TokenInfo } from "@uniswap/token-lists";
import { AaveAssetProxy__factory, ERC20__factory, ERC20 } from "../typechain";
import hre from "hardhat";
import zip from "lodash.zip";

import { AssetProxyTokenInfo, VaultTokenInfo } from "src/types";

import { TokenTag } from "src/tags";
import { retryAsync } from "src/util/retry";

import {
  getTokenDecimalsMulti,
  getTokenNameMulti,
  getTokenSymbolMulti,
} from "./erc20";

export const provider = hre.ethers.provider;

export async function getVaultTokenInfos(
  chainId: number,
  assetProxyTokenInfos: AssetProxyTokenInfo[]
): Promise<VaultTokenInfo[]> {
  const assetProxys = assetProxyTokenInfos.map(
    ({ address }) => AaveAssetProxy__factory.connect(address, provider)
  );

  console.log("get atokens")
  const vaultTokenAddresses = await Promise.all(
    assetProxys.map((assetProxy) => retryAsync(assetProxy.aToken))
  );
  const vaultTokens = vaultTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const vaultNames = await getTokenNameMulti(vaultTokens as unknown as ERC20[]);
  console.log("aToken names: ", vaultNames)
  const vaultSymbols = await getTokenSymbolMulti(vaultTokens as unknown as ERC20[]);
  console.log("token symbol: ",vaultSymbols)

  const decimals = await getTokenDecimalsMulti(vaultTokens as unknown as ERC20[]);

  const vaultTokensList: TokenInfo[] = zip(
    vaultTokenAddresses,
    vaultSymbols,
    vaultNames,
    decimals
  ).map(([address, symbol, name, decimal]): VaultTokenInfo => {
    return {
      chainId,
      address: address as string,
      symbol: symbol as string,
      decimals: decimal as number,
      name: name as string,
      tags: [TokenTag.VAULT],
      // TODO: What logo do we want to show for base assets?
      // logoURI: ""
    };
  });

  return vaultTokensList;
}

function getVaultSymbolMulti(
  chainId: number,
  vaultAddresses: string[],
  vaultSymbols: string[]
) {
  // const symbolOverrides = VaultSymbolOverrides[chainId] || {};
  const symbols = zip(vaultAddresses, vaultSymbols).map((zipped) => {
    const [vaultAddress, vaultSymbol] = zipped as [string, string];
    // if (symbolOverrides[vaultAddress]) {
    //   return symbolOverrides[vaultAddress];
    // }
    return vaultSymbol;
  });
  return symbols;
}
