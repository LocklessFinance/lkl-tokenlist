/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer} from "ethers";
import {Provider} from "@ethersproject/providers";

import type {AssetTransfersHandler} from "../AssetTransfersHandler";

export class AssetTransfersHandler__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetTransfersHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetTransfersHandler;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "receive",
  },
];
