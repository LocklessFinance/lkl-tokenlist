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

interface ITemporarilyPausableInterface extends ethers.utils.Interface {
  functions: {
    "getPausedState()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPausedState",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getPausedState",
    data: BytesLike
  ): Result;

  events: {
    "PausedStateChanged(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PausedStateChanged"): EventFragment;
}

export class ITemporarilyPausable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITemporarilyPausableInterface;

  functions: {
    getPausedState(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    "getPausedState()"(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;
  };

  getPausedState(
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      paused: boolean;
      pauseWindowEndTime: BigNumber;
      bufferPeriodEndTime: BigNumber;
    }
  >;

  "getPausedState()"(
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      paused: boolean;
      pauseWindowEndTime: BigNumber;
      bufferPeriodEndTime: BigNumber;
    }
  >;

  callStatic: {
    getPausedState(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    "getPausedState()"(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;
  };

  filters: {
    PausedStateChanged(paused: null): EventFilter;
  };

  estimateGas: {
    getPausedState(overrides?: CallOverrides): Promise<BigNumber>;

    "getPausedState()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getPausedState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPausedState()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}