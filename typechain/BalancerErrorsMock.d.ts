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

interface BalancerErrorsMockInterface extends ethers.utils.Interface {
  functions: {
    "fail(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fail", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "fail", data: BytesLike): Result;

  events: {};
}

export class BalancerErrorsMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BalancerErrorsMockInterface;

  functions: {
    fail(code: BigNumberish, overrides?: CallOverrides): Promise<[void]>;

    "fail(uint256)"(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  fail(code: BigNumberish, overrides?: CallOverrides): Promise<void>;

  "fail(uint256)"(code: BigNumberish, overrides?: CallOverrides): Promise<void>;

  callStatic: {
    fail(code: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "fail(uint256)"(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fail(code: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "fail(uint256)"(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fail(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fail(uint256)"(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
