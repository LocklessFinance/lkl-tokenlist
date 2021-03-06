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

interface MockFlashLoanRecipientInterface extends ethers.utils.Interface {
  functions: {
    "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
    "reenter()": FunctionFragment;
    "repayInExcess()": FunctionFragment;
    "repayLoan()": FunctionFragment;
    "setReenter(bool)": FunctionFragment;
    "setRepayInExcess(bool)": FunctionFragment;
    "setRepayLoan(bool)": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "receiveFlashLoan",
    values: [string[], BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "reenter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "repayInExcess",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "repayLoan", values?: undefined): string;
  encodeFunctionData(functionFragment: "setReenter", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setRepayInExcess",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setRepayLoan",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "receiveFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reenter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayInExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setReenter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRepayInExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRepayLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {};
}

export class MockFlashLoanRecipient extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockFlashLoanRecipientInterface;

  functions: {
    receiveFlashLoan(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receiveFlashLoan(address[],uint256[],uint256[],bytes)"(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reenter(overrides?: CallOverrides): Promise<[boolean]>;

    "reenter()"(overrides?: CallOverrides): Promise<[boolean]>;

    repayInExcess(overrides?: CallOverrides): Promise<[boolean]>;

    "repayInExcess()"(overrides?: CallOverrides): Promise<[boolean]>;

    repayLoan(overrides?: CallOverrides): Promise<[boolean]>;

    "repayLoan()"(overrides?: CallOverrides): Promise<[boolean]>;

    setReenter(
      _reenter: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setReenter(bool)"(
      _reenter: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRepayInExcess(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRepayInExcess(bool)"(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRepayLoan(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRepayLoan(bool)"(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;
  };

  receiveFlashLoan(
    tokens: string[],
    amounts: BigNumberish[],
    feeAmounts: BigNumberish[],
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receiveFlashLoan(address[],uint256[],uint256[],bytes)"(
    tokens: string[],
    amounts: BigNumberish[],
    feeAmounts: BigNumberish[],
    userData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reenter(overrides?: CallOverrides): Promise<boolean>;

  "reenter()"(overrides?: CallOverrides): Promise<boolean>;

  repayInExcess(overrides?: CallOverrides): Promise<boolean>;

  "repayInExcess()"(overrides?: CallOverrides): Promise<boolean>;

  repayLoan(overrides?: CallOverrides): Promise<boolean>;

  "repayLoan()"(overrides?: CallOverrides): Promise<boolean>;

  setReenter(
    _reenter: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setReenter(bool)"(
    _reenter: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRepayInExcess(
    _repayInExcess: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRepayInExcess(bool)"(
    _repayInExcess: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRepayLoan(
    _repayLoan: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRepayLoan(bool)"(
    _repayLoan: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    receiveFlashLoan(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveFlashLoan(address[],uint256[],uint256[],bytes)"(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    reenter(overrides?: CallOverrides): Promise<boolean>;

    "reenter()"(overrides?: CallOverrides): Promise<boolean>;

    repayInExcess(overrides?: CallOverrides): Promise<boolean>;

    "repayInExcess()"(overrides?: CallOverrides): Promise<boolean>;

    repayLoan(overrides?: CallOverrides): Promise<boolean>;

    "repayLoan()"(overrides?: CallOverrides): Promise<boolean>;

    setReenter(_reenter: boolean, overrides?: CallOverrides): Promise<void>;

    "setReenter(bool)"(
      _reenter: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRepayInExcess(
      _repayInExcess: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRepayInExcess(bool)"(
      _repayInExcess: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRepayLoan(_repayLoan: boolean, overrides?: CallOverrides): Promise<void>;

    "setRepayLoan(bool)"(
      _repayLoan: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    receiveFlashLoan(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receiveFlashLoan(address[],uint256[],uint256[],bytes)"(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reenter(overrides?: CallOverrides): Promise<BigNumber>;

    "reenter()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayInExcess(overrides?: CallOverrides): Promise<BigNumber>;

    "repayInExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayLoan(overrides?: CallOverrides): Promise<BigNumber>;

    "repayLoan()"(overrides?: CallOverrides): Promise<BigNumber>;

    setReenter(_reenter: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setReenter(bool)"(
      _reenter: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRepayInExcess(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRepayInExcess(bool)"(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRepayLoan(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRepayLoan(bool)"(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    receiveFlashLoan(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receiveFlashLoan(address[],uint256[],uint256[],bytes)"(
      tokens: string[],
      amounts: BigNumberish[],
      feeAmounts: BigNumberish[],
      userData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reenter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "reenter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayInExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "repayInExcess()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayLoan(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "repayLoan()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setReenter(
      _reenter: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setReenter(bool)"(
      _reenter: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRepayInExcess(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRepayInExcess(bool)"(
      _repayInExcess: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRepayLoan(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRepayLoan(bool)"(
      _repayLoan: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
