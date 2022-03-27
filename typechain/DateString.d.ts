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
  CallOverrides,
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface DateStringInterface extends ethers.utils.Interface {
  functions: {
    "OFFSET19700101()": FunctionFragment;
    "SECONDS_PER_DAY()": FunctionFragment;
    "SECONDS_PER_HOUR()": FunctionFragment;
    "SECONDS_PER_MINUTE()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "OFFSET19700101",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDS_PER_DAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDS_PER_HOUR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDS_PER_MINUTE",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "OFFSET19700101",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_PER_DAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_PER_HOUR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_PER_MINUTE",
    data: BytesLike
  ): Result;

  events: {};
}

export class DateString extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DateStringInterface;

  functions: {
    OFFSET19700101(overrides?: CallOverrides): Promise<[BigNumber]>;

    "OFFSET19700101()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SECONDS_PER_DAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SECONDS_PER_DAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SECONDS_PER_HOUR(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SECONDS_PER_HOUR()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SECONDS_PER_MINUTE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SECONDS_PER_MINUTE()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  OFFSET19700101(overrides?: CallOverrides): Promise<BigNumber>;

  "OFFSET19700101()"(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

  "SECONDS_PER_DAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDS_PER_HOUR(overrides?: CallOverrides): Promise<BigNumber>;

  "SECONDS_PER_HOUR()"(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDS_PER_MINUTE(overrides?: CallOverrides): Promise<BigNumber>;

  "SECONDS_PER_MINUTE()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    OFFSET19700101(overrides?: CallOverrides): Promise<BigNumber>;

    "OFFSET19700101()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_DAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_HOUR(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_HOUR()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_MINUTE(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_MINUTE()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    OFFSET19700101(overrides?: CallOverrides): Promise<BigNumber>;

    "OFFSET19700101()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_DAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_HOUR(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_HOUR()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_MINUTE(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_MINUTE()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OFFSET19700101(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "OFFSET19700101()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SECONDS_PER_DAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SECONDS_PER_DAY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SECONDS_PER_HOUR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SECONDS_PER_HOUR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SECONDS_PER_MINUTE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "SECONDS_PER_MINUTE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
