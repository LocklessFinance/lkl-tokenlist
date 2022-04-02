export interface TagInfo {
  name: string;
  description: string;
}

export enum TokenTag {
  VAULT = "vault",
  ASSET_PROXY = "assetproxy",
  CCPOOL = "ccpool",
  PRINCIPAL = "eP",
  UNDERLYING = "underlying",
  WPOOL = "wpool",
  VAULT_TOKEN =  "vaultToken"
};

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
