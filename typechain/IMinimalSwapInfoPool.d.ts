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

interface IMinimalSwapInfoPoolInterface extends ethers.utils.Interface {
  functions: {
    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onSwap(tuple,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onExitPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onJoinPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap",
    values: [
      {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "onExitPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onJoinPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onSwap", data: BytesLike): Result;

  events: {};
}

export class IMinimalSwapInfoPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMinimalSwapInfoPoolInterface;

  functions: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onSwap(tuple,uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onExitPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onJoinPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onSwap(
    swapRequest: {
      kind: BigNumberish;
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      poolId: BytesLike;
      lastChangeBlock: BigNumberish;
      from: string;
      to: string;
      userData: BytesLike;
    },
    currentBalanceTokenIn: BigNumberish,
    currentBalanceTokenOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onSwap(tuple,uint256,uint256)"(
    swapRequest: {
      kind: BigNumberish;
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      poolId: BytesLike;
      lastChangeBlock: BigNumberish;
      from: string;
      to: string;
      userData: BytesLike;
    },
    currentBalanceTokenIn: BigNumberish,
    currentBalanceTokenOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onSwap(tuple,uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onSwap(tuple,uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onSwap(tuple,uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}