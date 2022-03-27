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
  CallOverrides,
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface ProtocolFeesCollectorInterface extends ethers.utils.Interface {
  functions: {
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getCollectedFeeAmounts(address[])": FunctionFragment;
    "getFlashLoanFeePercentage()": FunctionFragment;
    "getSwapFeePercentage()": FunctionFragment;
    "setFlashLoanFeePercentage(uint256)": FunctionFragment;
    "setSwapFeePercentage(uint256)": FunctionFragment;
    "vault()": FunctionFragment;
    "withdrawCollectedFees(address[],uint256[],address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getActionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollectedFeeAmounts",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlashLoanFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFlashLoanFeePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapFeePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawCollectedFees",
    values: [string[], BigNumberish[], string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollectedFeeAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFlashLoanFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFlashLoanFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawCollectedFees",
    data: BytesLike
  ): Result;

  events: {
    "FlashLoanFeePercentageChanged(uint256)": EventFragment;
    "SwapFeePercentageChanged(uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "FlashLoanFeePercentageChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapFeePercentageChanged"): EventFragment;
}

export class ProtocolFeesCollector extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProtocolFeesCollectorInterface;

  functions: {
    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getActionId(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<[string]>;

    getCollectedFeeAmounts(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & {feeAmounts: BigNumber[]}>;

    "getCollectedFeeAmounts(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & {feeAmounts: BigNumber[]}>;

    getFlashLoanFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getFlashLoanFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFlashLoanFeePercentage(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFlashLoanFeePercentage(uint256)"(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSwapFeePercentage(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSwapFeePercentage(uint256)"(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawCollectedFees(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawCollectedFees(address[],uint256[],address)"(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getActionId(selector: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getActionId(bytes4)"(
    selector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getAuthorizer(overrides?: CallOverrides): Promise<string>;

  "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

  getCollectedFeeAmounts(
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getCollectedFeeAmounts(address[])"(
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFlashLoanFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  "getFlashLoanFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

  getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

  setFlashLoanFeePercentage(
    newFlashLoanFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFlashLoanFeePercentage(uint256)"(
    newFlashLoanFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSwapFeePercentage(
    newSwapFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSwapFeePercentage(uint256)"(
    newSwapFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  withdrawCollectedFees(
    tokens: string[],
    amounts: BigNumberish[],
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawCollectedFees(address[],uint256[],address)"(
    tokens: string[],
    amounts: BigNumberish[],
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getActionId(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAuthorizer(overrides?: CallOverrides): Promise<string>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

    getCollectedFeeAmounts(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getCollectedFeeAmounts(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFlashLoanFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getFlashLoanFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFlashLoanFeePercentage(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFlashLoanFeePercentage(uint256)"(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapFeePercentage(
      newSwapFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSwapFeePercentage(uint256)"(
      newSwapFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    withdrawCollectedFees(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawCollectedFees(address[],uint256[],address)"(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FlashLoanFeePercentageChanged(newFlashLoanFeePercentage: null): EventFilter;

    SwapFeePercentageChanged(newSwapFeePercentage: null): EventFilter;
  };

  estimateGas: {
    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getActionId(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizer(overrides?: CallOverrides): Promise<BigNumber>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCollectedFeeAmounts(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollectedFeeAmounts(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFlashLoanFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getFlashLoanFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFlashLoanFeePercentage(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFlashLoanFeePercentage(uint256)"(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSwapFeePercentage(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSwapFeePercentage(uint256)"(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawCollectedFees(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawCollectedFees(address[],uint256[],address)"(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getActionId(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCollectedFeeAmounts(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollectedFeeAmounts(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlashLoanFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFlashLoanFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSwapFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFlashLoanFeePercentage(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFlashLoanFeePercentage(uint256)"(
      newFlashLoanFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSwapFeePercentage(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSwapFeePercentage(uint256)"(
      newSwapFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawCollectedFees(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawCollectedFees(address[],uint256[],address)"(
      tokens: string[],
      amounts: BigNumberish[],
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
