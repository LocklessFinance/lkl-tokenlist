export interface AddressesJsonFile {
  chainId: number;
  addresses: {
    balancerVaultAddress: string;
    trancheFactoryAddress: string;
    wbtcAddress: string;
    convergentPoolFactoryAddress: string;
    userProxyContractAddress: string;
    wethAddress: string;
    daiAddress: string;
    usdcAddress: string;
  };
  safelist: string[];
}
