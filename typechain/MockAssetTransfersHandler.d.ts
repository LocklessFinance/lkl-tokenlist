/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface MockAssetTransfersHandlerInterface extends ethers.utils.Interface {
  functions: {
    "depositToInternalBalance(address,address,uint256)": FunctionFragment;
    "getInternalBalance(address,address)": FunctionFragment;
    "receiveAsset(address,uint256,address,bool)": FunctionFragment;
    "sendAsset(address,uint256,address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositToInternalBalance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInternalBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveAsset",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sendAsset",
    values: [string, BigNumberish, string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositToInternalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInternalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendAsset", data: BytesLike): Result;

  events: {};
}

export class MockAssetTransfersHandler extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockAssetTransfersHandlerInterface;

  functions: {
    depositToInternalBalance(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositToInternalBalance(address,address,uint256)"(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getInternalBalance(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getInternalBalance(address,address)"(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    receiveAsset(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "receiveAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    sendAsset(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  depositToInternalBalance(
    account: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositToInternalBalance(address,address,uint256)"(
    account: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getInternalBalance(
    account: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInternalBalance(address,address)"(
    account: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiveAsset(
    asset: string,
    amount: BigNumberish,
    sender: string,
    fromInternalBalance: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "receiveAsset(address,uint256,address,bool)"(
    asset: string,
    amount: BigNumberish,
    sender: string,
    fromInternalBalance: boolean,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  sendAsset(
    asset: string,
    amount: BigNumberish,
    recipient: string,
    toInternalBalance: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendAsset(address,uint256,address,bool)"(
    asset: string,
    amount: BigNumberish,
    recipient: string,
    toInternalBalance: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    depositToInternalBalance(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositToInternalBalance(address,address,uint256)"(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getInternalBalance(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInternalBalance(address,address)"(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveAsset(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sendAsset(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositToInternalBalance(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositToInternalBalance(address,address,uint256)"(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getInternalBalance(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInternalBalance(address,address)"(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveAsset(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "receiveAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    sendAsset(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToInternalBalance(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositToInternalBalance(address,address,uint256)"(
      account: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getInternalBalance(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInternalBalance(address,address)"(
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveAsset(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "receiveAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      sender: string,
      fromInternalBalance: boolean,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    sendAsset(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendAsset(address,uint256,address,bool)"(
      asset: string,
      amount: BigNumberish,
      recipient: string,
      toInternalBalance: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
