/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type {EthForceSender} from "../EthForceSender";

export class EthForceSender__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    recipient: string,
    overrides?: PayableOverrides
  ): Promise<EthForceSender> {
    return super.deploy(recipient, overrides || {}) as Promise<EthForceSender>;
  }
  getDeployTransaction(
    recipient: string,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(recipient, overrides || {});
  }
  attach(address: string): EthForceSender {
    return super.attach(address) as EthForceSender;
  }
  connect(signer: Signer): EthForceSender__factory {
    return super.connect(signer) as EthForceSender__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthForceSender {
    return new Contract(address, _abi, signerOrProvider) as EthForceSender;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040526040516032380380603283398181016040526020811015602357600080fd5b50516001600160a01b038116fffe";