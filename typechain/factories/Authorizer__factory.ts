/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {Authorizer} from "../Authorizer";

export class Authorizer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(admin: string, overrides?: Overrides): Promise<Authorizer> {
    return super.deploy(admin, overrides || {}) as Promise<Authorizer>;
  }
  getDeployTransaction(
    admin: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  attach(address: string): Authorizer {
    return super.attach(address) as Authorizer;
  }
  connect(signer: Signer): Authorizer__factory {
    return super.connect(signer) as Authorizer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorizer {
    return new Contract(address, _abi, signerOrProvider) as Authorizer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "actionId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canPerform",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "grantRolesToMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "revokeRolesFromMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610e1d380380610e1d8339818101604052602081101561003357600080fd5b5051610040600082610046565b5061013d565b6100508282610054565b5050565b6000828152602081815260409091206100769183906108946100b7821b17901c565b156100505760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006100c3838361011c565b61011257508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155610116565b5060005b92915050565b6001600160a01b031660009081526001919091016020526040902054151590565b610cd18061014c6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063988360a31161008c578063a73cb2ab11610066578063a73cb2ab1461044b578063ca15c87314610572578063d547741f1461058f578063fcd7627e146105c8576100df565b8063988360a3146103475780639be2a88414610402578063a217fddf14610443576100df565b806336568abe116100bd57806336568abe146102755780639010d07c146102ae57806391d14854146102fa576100df565b806318b2cde9146100e4578063248a9ca31461020d5780632f2ff15d1461023c575b600080fd5b61020b600480360360408110156100fa57600080fd5b81019060208101813564010000000081111561011557600080fd5b82018360208201111561012757600080fd5b8035906020019184602083028401116401000000008311171561014957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561019957600080fd5b8201836020820111156101ab57600080fd5b803590602001918460208302840111640100000000831117156101cd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610683945050505050565b005b61022a6004803603602081101561022357600080fd5b50356106d8565b60408051918252519081900360200190f35b61020b6004803603604081101561025257600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166106ed565b61020b6004803603604081101561028b57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610723565b6102d1600480360360408110156102c457600080fd5b5080359060200135610751565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103336004803603604081101561031057600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610772565b604080519115158252519081900360200190f35b61020b6004803603604081101561035d57600080fd5b81019060208101813564010000000081111561037857600080fd5b82018360208201111561038a57600080fd5b803590602001918460208302840111640100000000831117156103ac57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505050903573ffffffffffffffffffffffffffffffffffffffff16915061078a9050565b6103336004803603606081101561041857600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff602082013581169160400135166107bb565b61022a6107cf565b61020b6004803603604081101561046157600080fd5b81019060208101813564010000000081111561047c57600080fd5b82018360208201111561048e57600080fd5b803590602001918460208302840111640100000000831117156104b057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561050057600080fd5b82018360208201111561051257600080fd5b8035906020019184602083028401116401000000008311171561053457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107d4945050505050565b61022a6004803603602081101561058857600080fd5b5035610824565b61020b600480360360408110156105a557600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff1661083b565b61020b600480360360408110156105de57600080fd5b8101906020810181356401000000008111156105f957600080fd5b82018360208201111561060b57600080fd5b8035906020019184602083028401116401000000008311171561062d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505050903573ffffffffffffffffffffffffffffffffffffffff1691506108639050565b61068f8251825161091c565b60005b82518110156106d3576106cb8382815181106106aa57fe5b60200260200101518383815181106106be57fe5b602002602001015161083b565b600101610692565b505050565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546107159061070d9033610772565b6101a6610925565b61071f8282610933565b5050565b61074773ffffffffffffffffffffffffffffffffffffffff821633146101a8610925565b61071f8282610999565b600082815260208190526040812061076990836109ff565b90505b92915050565b60008281526020819052604081206107699083610a1b565b60005b82518110156106d3576107b38382815181106107a557fe5b60200260200101518361083b565b60010161078d565b60006107c78484610772565b949350505050565b600081565b6107e08251825161091c565b60005b82518110156106d35761081c8382815181106107fb57fe5b602002602001015183838151811061080f57fe5b60200260200101516106ed565b6001016107e3565b600081815260208190526040812061076c90610a49565b6000828152602081905260409020600201546107479061085b9033610772565b6101a7610925565b60005b82518110156106d35761088c83828151811061087e57fe5b6020026020010151836106ed565b600101610866565b60006108a08383610a1b565b61091457508154600180820184556000848152602080822090930180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86169081179091558554908252828601909352604090209190915561076c565b50600061076c565b61071f81831460675b8161071f5761071f81610a4d565b600082815260208190526040902061094b9082610894565b1561071f57604051339073ffffffffffffffffffffffffffffffffffffffff83169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526020819052604090206109b19082610aba565b1561071f57604051339073ffffffffffffffffffffffffffffffffffffffff83169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b8154600090610a119083106064610925565b6107698383610c61565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001919091016020526040902054151590565b5490565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526001830160205260408120548015610c575783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8083019190810190600090879083908110610b2257fe5b600091825260209091200154875473ffffffffffffffffffffffffffffffffffffffff90911691508190889085908110610b5857fe5b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055918316815260018981019092526040902090840190558654879080610bc657fe5b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff8816825260018981019091526040822091909155945061076c9350505050565b600091505061076c565b6000826000018281548110610c7257fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16939250505056fea2646970667358221220479421e13b85ee3a93588703e45e1bd6fea0503b28a338db863d3e1e0f7031c464736f6c63430007010033";