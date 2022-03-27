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

interface InterestTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployInterestToken(address,string,uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployInterestToken",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployInterestToken",
    data: BytesLike
  ): Result;

  events: {
    "InterestTokenCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InterestTokenCreated"): EventFragment;
}

export class InterestTokenFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InterestTokenFactoryInterface;

  functions: {
    deployInterestToken(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deployInterestToken(address,string,uint256,uint8)"(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deployInterestToken(
    _tranche: string,
    _strategySymbol: string,
    _expiration: BigNumberish,
    _underlyingDecimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deployInterestToken(address,string,uint256,uint8)"(
    _tranche: string,
    _strategySymbol: string,
    _expiration: BigNumberish,
    _underlyingDecimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deployInterestToken(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployInterestToken(address,string,uint256,uint8)"(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    InterestTokenCreated(
      token: string | null,
      tranche: string | null
    ): EventFilter;
  };

  estimateGas: {
    deployInterestToken(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deployInterestToken(address,string,uint256,uint8)"(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployInterestToken(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deployInterestToken(address,string,uint256,uint8)"(
      _tranche: string,
      _strategySymbol: string,
      _expiration: BigNumberish,
      _underlyingDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
