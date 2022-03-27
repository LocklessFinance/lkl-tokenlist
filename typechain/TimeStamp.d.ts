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

interface TimeStampInterface extends ethers.utils.Interface {
  functions: {
    "blockTimeStamp()": FunctionFragment;
    "getTime()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "blockTimeStamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTime", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "blockTimeStamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTime", data: BytesLike): Result;

  events: {};
}

export class TimeStamp extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TimeStampInterface;

  functions: {
    blockTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "blockTimeStamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTime(overrides?: Overrides): Promise<ContractTransaction>;

    "getTime()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  blockTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

  "blockTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTime(overrides?: Overrides): Promise<ContractTransaction>;

  "getTime()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    blockTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    "blockTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTime(overrides?: CallOverrides): Promise<void>;

    "getTime()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    blockTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    "blockTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTime(overrides?: Overrides): Promise<BigNumber>;

    "getTime()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blockTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockTimeStamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTime(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getTime()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}