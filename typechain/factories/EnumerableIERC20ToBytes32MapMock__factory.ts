/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {EnumerableIERC20ToBytes32MapMock} from "../EnumerableIERC20ToBytes32MapMock";

export class EnumerableIERC20ToBytes32MapMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EnumerableIERC20ToBytes32MapMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<EnumerableIERC20ToBytes32MapMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableIERC20ToBytes32MapMock {
    return super.attach(address) as EnumerableIERC20ToBytes32MapMock;
  }
  connect(signer: Signer): EnumerableIERC20ToBytes32MapMock__factory {
    return super.connect(signer) as EnumerableIERC20ToBytes32MapMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableIERC20ToBytes32MapMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnumerableIERC20ToBytes32MapMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OperationResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
    ],
    name: "contains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "errorCode",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "length",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "unchecked_at",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "key",
        type: "address",
      },
    ],
    name: "unchecked_indexOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "unchecked_setAt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "unchecked_valueAt",
    outputs: [
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061078f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80635dbe47e811610076578063b464631b1161005b578063b464631b14610205578063c65d26831461023e578063e0886f901461028b576100be565b80635dbe47e8146101a1578063adcd29d9146101e8576100be565b806329092d0e116100a757806329092d0e146101105780633e7b8e711461014557806354996d5d1461017e576100be565b80630127190b146100c35780631f7b6d3214610108575b600080fd5b6100f6600480360360208110156100d957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102a8565b60408051918252519081900360200190f35b6100f66102ba565b6101436004803603602081101561012657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102cb565b005b6101436004803603604081101561015b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610314565b6101436004803603604081101561019457600080fd5b508035906020013561035f565b6101d4600480360360208110156101b757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661036f565b604080519115158252519081900360200190f35b6100f6600480360360208110156101fe57600080fd5b503561037b565b6100f66004803603604081101561021b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610387565b61025b6004803603602081101561025457600080fd5b503561039b565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091528051918290030190f35b61025b600480360360208110156102a157600080fd5b50356103b1565b60006102b481836103be565b92915050565b60006102c660006103ea565b905090565b60006102d781836103ee565b60408051821515815290519192507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33919081900360200190a15050565b60006103218184846104ea565b60408051821515815290519192507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33919081900360200190a1505050565b61036b600083836105e9565b5050565b60006102b48183610601565b60006102b4818361062f565b6000610394818484610645565b9392505050565b6000806103a8818461068f565b91509150915091565b6000806103a881846106c0565b73ffffffffffffffffffffffffffffffffffffffff166000908152600291909101602052604090205490565b5490565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260028301602052604081205480156104e05783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810160008181526001878101602090815260408084209587018452808420865481547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff92831617835588860180549387019390935588548216875260028d018086528488209a909a5588541690975584905593895593871682529390925281205590506102b4565b60009150506102b4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600284016020526040812054806105a9575050825460408051808201825273ffffffffffffffffffffffffffffffffffffffff858116808352602080840187815260008781526001808c018452878220965187547fffffffffffffffffffffffff00000000000000000000000000000000000000001696169590951786559051948401949094559482018089559083526002880190945291902091909155610394565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160009081526001808601602052604082200183905590509392505050565b60009182526001928301602052604090912090910155565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002919091016020526040902054151590565b6000908152600191820160205260409020015490565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600284016020526040812054610679811515846106e9565b610686856001830361062f565b95945050505050565b6000908152600191820160205260409020805491015473ffffffffffffffffffffffffffffffffffffffff90911691565b6000806106d48385600001541160646106e9565b6106de848461068f565b915091509250929050565b8161036b577f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b92909201016642414c230000300160c81b60445261036b91606490fdfea26469706673582212206da6fff352c876818905197b5a13e56c20dff3a59c11cc9f47914d77520198f064736f6c63430007010033";
