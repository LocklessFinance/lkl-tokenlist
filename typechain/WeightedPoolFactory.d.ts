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

interface WeightedPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "create(string,string,address[],uint256[],uint256,address)": FunctionFragment;
    "getPauseConfiguration()": FunctionFragment;
    "getVault()": FunctionFragment;
    "isPoolFromFactory(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create",
    values: [string, string, string[], BigNumberish[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPauseConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPauseConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory",
    data: BytesLike
  ): Result;

  events: {
    "PoolCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export class WeightedPoolFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WeightedPoolFactoryInterface;

  functions: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create(string,string,address[],uint256[],uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  create(
    name: string,
    symbol: string,
    tokens: string[],
    weights: BigNumberish[],
    swapFeePercentage: BigNumberish,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create(string,string,address[],uint256[],uint256,address)"(
    name: string,
    symbol: string,
    tokens: string[],
    weights: BigNumberish[],
    swapFeePercentage: BigNumberish,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPauseConfiguration(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  "getPauseConfiguration()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  isPoolFromFactory(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "isPoolFromFactory(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(string,string,address[],uint256[],uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    PoolCreated(pool: string | null): EventFilter;
  };

  estimateGas: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create(string,string,address[],uint256[],uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPauseConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    "getPauseConfiguration()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create(string,string,address[],uint256[],uint256,address)"(
      name: string,
      symbol: string,
      tokens: string[],
      weights: BigNumberish[],
      swapFeePercentage: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPoolFromFactory(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
