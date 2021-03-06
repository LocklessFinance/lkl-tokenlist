/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer} from "ethers";
import {Provider} from "@ethersproject/providers";

import type {ITrancheFactory} from "../ITrancheFactory";

export class ITrancheFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITrancheFactory {
    return new Contract(address, _abi, signerOrProvider) as ITrancheFactory;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "contract InterestToken",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
