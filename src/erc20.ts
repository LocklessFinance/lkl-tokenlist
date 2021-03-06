import { ERC20 } from "../typechain/ERC20";
import { retryAsync } from "src/util/retry";

export async function getTokenDecimalsMulti(
  tokens: ERC20[]
): Promise<number[]> {
  const tokenNames = await Promise.all(
    tokens.map((token) => retryAsync(token.decimals))
  );
  return tokenNames;
}
export async function getTokenSymbolMulti(tokens: ERC20[]): Promise<string[]> {
  const tokenSymbols = await Promise.all(
    tokens.map((token) => retryAsync(token.symbol))
  );
  return tokenSymbols;
}
export async function getTokenNameMulti(tokens: ERC20[]): Promise<string[]> {
  const tokenNames = await Promise.all(
    tokens.map((token) => retryAsync(token.name))
  );
  return tokenNames;
}
