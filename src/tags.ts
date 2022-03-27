export const TokenTag = {
  VAULT: "vault" as "vault",
  ASSET_PROXY: "assetproxy" as "assetproxy",
  CCPOOL: "ccpool" as "ccpool",
  PRINCIPAL: "eP" as "eP",
  UNDERLYING: "underlying" as "underlying",
  WPOOL: "wpool" as "wpool",
  VAULT_TOKEN:  "vaultToken" as "vaultToken"
};
export type TokenTag = typeof TokenTag[keyof typeof TokenTag];
