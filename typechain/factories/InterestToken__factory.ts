/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer, BigNumberish} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {InterestToken} from "../InterestToken";

export class InterestToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tranche: string,
    _strategySymbol: string,
    _timestamp: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<InterestToken> {
    return super.deploy(
      _tranche,
      _strategySymbol,
      _timestamp,
      _decimals,
      overrides || {}
    ) as Promise<InterestToken>;
  }
  getDeployTransaction(
    _tranche: string,
    _strategySymbol: string,
    _timestamp: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tranche,
      _strategySymbol,
      _timestamp,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): InterestToken {
    return super.attach(address) as InterestToken;
  }
  connect(signer: Signer): InterestToken__factory {
    return super.connect(signer) as InterestToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterestToken {
    return new Contract(address, _abi, signerOrProvider) as InterestToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tranche",
        type: "address",
      },
      {
        internalType: "string",
        name: "_strategySymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "PERMIT_TYPEHASH",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [],
    name: "tranche",
    outputs: [
      {
        internalType: "contract ITranche",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200322238038062003222833981016040819052620000349162000d35565b60408051808201909152601481527f4c6f636b657373205969656c6420546f6b656e20000000000000000000000000602082015262000075908484620001dd565b6040805180820190915260018152607960f81b60208201526200009a908585620002ab565b8151620000af90600090602085019062000c78565b508051620000c590600190602084019062000c78565b506002805460ff1916601217905560036020526000197f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff819055306000908152604090205562000114620002ec565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405162000146919062000e43565b60408051918290038220828201825260018352603160f81b60209384015290516200019993927fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc691469130910162000ee8565b60408051601f19818403018152919052805160209091012060065550506001600160601b0319606085901b16608052620001d381620002ee565b5050505062001199565b8251606090620001f590600090602087019062000c78565b506200020f838360006200030460201b620009f01760201c565b600080546200021e90620010e5565b80601f01602080910402602001604051908101604052809291908181526020018280546200024c90620010e5565b80156200029d5780601f1062000271576101008083540402835291602001916200029d565b820191906000526020600020905b8154815290600101906020018083116200027f57829003601f168201915b505050505090509392505050565b8251606090620002c390600190602087019062000c78565b50620002dd838360016200030460201b620009f01760201c565b600180546200021e90620010e5565b565b6002805460ff191660ff92909216919091179055565b828160005b8251811015620003d857818382815181106200033557634e487b7160e01b600052603260045260246000fd5b602001015160f81c60f81b90808054806200035090620010e5565b80601f8114620003605762000376565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620003a05790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508080620003cf9062001122565b91505062000309565b5080602d60f81b9080805480620003ef90620010e5565b80601f8114620003ff5762000415565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156200043f5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506200047384846200047a60201b60201c565b5050505050565b6200048682826200048a565b5050565b8060008080620004a8620004a2620151808862000ffa565b6200093a565b919450925090506000620004be600a8362000ffa565b905084620004ce82603062000f9e565b60f81b9080805480620004e190620010e5565b80601f8114620004f15762000507565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620005315790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a8362000564919062001140565b9050856200057482603062000f9e565b60f81b90808054806200058790620010e5565b80601f81146200059757620005ad565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620005d75790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055505050816001141562000625576200061f84602560f91b604160f81b602760f91b62000ae6565b620007d4565b816002141562000649576200061f84602360f91b604560f81b602160f91b62000ae6565b81600314156200066d576200061f84604d60f81b604160f81b602960f91b62000ae6565b816004141562000691576200061f84604160f81b600560fc1b602960f91b62000ae6565b8160051415620006b5576200061f84604d60f81b604160f81b605960f81b62000ae6565b8160061415620006d9576200061f84602560f91b605560f81b602760f91b62000ae6565b8160071415620006fd576200061f84602560f91b605560f81b601360fa1b62000ae6565b816008141562000721576200061f84604160f81b605560f81b604760f81b62000ae6565b816009141562000745576200061f84605360f81b604560f81b600560fc1b62000ae6565b81600a141562000769576200061f84604f60f81b604360f81b601560fa1b62000ae6565b81600b14156200078d576200061f84602760f91b604f60f81b602b60f91b62000ae6565b81600c1415620007b1576200061f84601160fa1b604560f81b604360f81b62000ae6565b60405162461bcd60e51b8152600401620007cb9062000f14565b60405180910390fd5b6000620007e360648562001140565b90506000620007f4600a8362000ffa565b9050856200080482603062000f9e565b60f81b90808054806200081790620010e5565b80601f811462000827576200083d565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615620008675790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a836200089a919062001140565b905086620008aa82603062000f9e565b60f81b9080805480620008bd90620010e5565b80601f8114620008cd57620008e3565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156200090d5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505050505050505050565b60008080838162253d8c620009538362010bd962000f57565b6200095f919062000f57565b9050600062023ab16200097483600462001011565b62000980919062000fc6565b90506004620009938262023ab162001011565b620009a090600362000f57565b620009ac919062000fc6565b620009b89083620010a0565b9150600062164b09620009cd84600162000f57565b620009db90610fa062001011565b620009e7919062000fc6565b90506004620009f9826105b562001011565b62000a05919062000fc6565b62000a119084620010a0565b62000a1e90601f62000f57565b9250600061098f62000a3285605062001011565b62000a3e919062000fc6565b90506000605062000a528361098f62001011565b62000a5e919062000fc6565b62000a6a9086620010a0565b905062000a79600b8362000fc6565b945062000a8885600c62001011565b62000a9583600262000f57565b62000aa19190620010a0565b9150848362000ab2603187620010a0565b62000abf90606462001011565b62000acb919062000f57565b62000ad7919062000f57565b9a919950975095505050505050565b8383908080548062000af890620010e5565b80601f811462000b085762000b1e565b83600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000b485790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508382908080548062000b7c90620010e5565b80601f811462000b8c5762000ba2565b83600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000bcc5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508381908080548062000c0090620010e5565b80601f811462000c105762000c26565b83600052602060002060ff1984168155603f9350505b5060029190910190915581546001161562000c505790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050505050565b82805462000c8690620010e5565b90600052602060002090601f01602090048101928262000caa576000855562000cf5565b82601f1062000cc557805160ff191683800117855562000cf5565b8280016001018555821562000cf5579182015b8281111562000cf557825182559160200191906001019062000cd8565b5062000d0392915062000d07565b5090565b5b8082111562000d03576000815560010162000d08565b805160ff8116811462000d3057600080fd5b919050565b6000806000806080858703121562000d4b578384fd5b84516001600160a01b038116811462000d62578485fd5b602086810151919550906001600160401b038082111562000d81578586fd5b818801915088601f83011262000d95578586fd5b81518181111562000daa5762000daa62001183565b604051601f8201601f191681018501838111828210171562000dd05762000dd062001183565b60405281815283820185018b101562000de7578788fd5b8792505b8183101562000e0a578383018501518184018601529184019162000deb565b8183111562000e1b57878583830101525b80975050505050506040850151915062000e386060860162000d1e565b905092959194509250565b815460009081906002810460018083168062000e6057607f831692505b602080841082141562000e8157634e487b7160e01b87526022600452602487fd5b81801562000e98576001811462000eaa5762000eda565b60ff1986168952848901965062000eda565b62000eb58a62000f4b565b885b8681101562000ed25781548b82015290850190830162000eb7565b505084890196505b509498975050505050505050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60208082526013908201527f64617465206465636f64696e67206572726f7200000000000000000000000000604082015260600190565b60009081526020902090565b600080821280156001600160ff1b038490038513161562000f7c5762000f7c62001157565b600160ff1b839003841281161562000f985762000f9862001157565b50500190565b600060ff821660ff84168060ff0382111562000fbe5762000fbe62001157565b019392505050565b60008262000fd85762000fd86200116d565b600160ff1b82146000198414161562000ff55762000ff562001157565b500590565b6000826200100c576200100c6200116d565b500490565b60006001600160ff1b03818413828413808216868404861116156200103a576200103a62001157565b600160ff1b848712828116878305891216156200105b576200105b62001157565b85871292508782058712848416161562001079576200107962001157565b8785058712818416161562001092576200109262001157565b505050929093029392505050565b60008083128015600160ff1b850184121615620010c157620010c162001157565b6001600160ff1b0384018313811615620010df57620010df62001157565b50500390565b600281046001821680620010fa57607f821691505b602082108114156200111c57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562001139576200113962001157565b5060010190565b6000826200115257620011526200116d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c612055620011cd6000396000818161033d015281816106160152818161066301526106ce01526120556000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636ebc0af1116100975780639dc29fac116100665780639dc29fac146101e8578063a9059cbb146101fb578063d505accf1461020e578063dd62ed3e1461022157610100565b80636ebc0af1146101a557806370a08231146101ba5780637ecebe00146101cd57806395d89b41146101e057610100565b806330adf81f116100d357806330adf81f1461016b578063313ce567146101735780633644e5151461018857806340c10f191461019057610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014357806323b872dd14610158575b600080fd5b61010d610234565b60405161011a9190611a2d565b60405180910390f35b61013661013136600461190a565b6102c2565b60405161011a9190611999565b61014b610339565b60405161011a91906119a4565b61013661016636600461185e565b6103f0565b61014b6105cb565b61017b6105ef565b60405161011a9190611ca2565b61014b6105f8565b6101a361019e36600461190a565b6105fe565b005b6101ad610661565b60405161011a9190611a0c565b61014b6101c8366004611812565b610685565b61014b6101db366004611812565b610697565b61010d6106a9565b6101a36101f636600461190a565b6106b6565b61013661020936600461190a565b610715565b6101a361021c366004611899565b610729565b61014b61022f36600461182c565b6109d3565b6000805461024190611f20565b80601f016020809104026020016040519081016040528092919081815260200182805461026d90611f20565b80156102ba5780601f1061028f576101008083540402835291602001916102ba565b820191906000526020600020905b81548152906001019060200180831161029d57829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103289086906119a4565b60405180910390a350600192915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663041be7c26040518163ffffffff1660e01b815260040160206040518083038186803b1580156103a157600080fd5b505afa1580156103b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d99190611933565b6fffffffffffffffffffffffffffffffff16905090565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120548281101561043f5760405162461bcd60e51b815260040161043690611c0e565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851633146105125773ffffffffffffffffffffffffffffffffffffffff851660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461051057838110156104d45760405162461bcd60e51b815260040161043690611a9e565b6104de8482611f09565b73ffffffffffffffffffffffffffffffffffffffff871660009081526004602090815260408083203384529091529020555b505b61051c8382611f09565b73ffffffffffffffffffffffffffffffffffffffff8087166000908152600360205260408082209390935590861681522054610559908490611d24565b73ffffffffffffffffffffffffffffffffffffffff80861660008181526003602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906105b89087906119a4565b60405180910390a3506001949350505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60025460ff1681565b60065481565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146106535760405162461bcd60e51b815260040161043690611c45565b61065d8282610b84565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205481565b60056020526000908152604090205481565b6001805461024190611f20565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461070b5760405162461bcd60e51b815260040161043690611c45565b61065d8282610c1d565b60006107223384846103f0565b9392505050565b60065473ffffffffffffffffffffffffffffffffffffffff8816600090815260056020908152604080832054905192939261078f927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d92918d91016119ad565b604051602081830303815290604052805190602001206040516020016107b6929190611963565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905073ffffffffffffffffffffffffffffffffffffffff88166108215760405162461bcd60e51b815260040161043690611b69565b6001818585856040516000815260200160405260405161084494939291906119ee565b6020604051602081039080840390855afa158015610866573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146108ba5760405162461bcd60e51b815260040161043690611ba0565b8415806108c75750844211155b6108e35760405162461bcd60e51b815260040161043690611bd7565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156109235760405162461bcd60e51b815260040161043690611ad5565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260056020526040812080549161095483611f74565b909155505073ffffffffffffffffffffffffffffffffffffffff8089166000818152600460209081526040808320948c168084529490915290819020899055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109c1908a906119a4565b60405180910390a35050505050505050565b600460209081526000928352604080842090915290825290205481565b828160005b8251811015610ad35781838281518110610a38577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b9080805480610a5190611f20565b80601f8114610a5f57610a75565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610a9e5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508080610acb90611f74565b9150506109f5565b50807f2d000000000000000000000000000000000000000000000000000000000000009080805480610b0490611f20565b80601f8114610b1257610b28565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610b515790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550610b7d8484610ca7565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040902054610bb5908290611d24565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600360205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c119085906119a4565b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040902054610c4e908290611f09565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600360205260408082209390935591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c119085906119a4565b61065d82828060008080610cc6610cc16201518088611dc9565b6114f2565b919450925090506000610cda600a83611dc9565b905084610ce8826030611d3c565b60f81b9080805480610cf990611f20565b80601f8114610d0757610d1d565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610d465790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a83610d779190611fad565b905085610d85826030611d3c565b60f81b9080805480610d9690611f20565b80601f8114610da457610dba565b83600052602060002060ff1984168155603f9350505b50600291909101909155815460011615610de35790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050508160011415610e8157610e7c847f4a000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f4e00000000000000000000000000000000000000000000000000000000000000611666565b6113a0565b8160021415610ef657610e7c847f46000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f4200000000000000000000000000000000000000000000000000000000000000611666565b8160031415610f6b57610e7c847f4d000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f5200000000000000000000000000000000000000000000000000000000000000611666565b8160041415610fe057610e7c847f41000000000000000000000000000000000000000000000000000000000000007f50000000000000000000000000000000000000000000000000000000000000007f5200000000000000000000000000000000000000000000000000000000000000611666565b816005141561105557610e7c847f4d000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f5900000000000000000000000000000000000000000000000000000000000000611666565b81600614156110ca57610e7c847f4a000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4e00000000000000000000000000000000000000000000000000000000000000611666565b816007141561113f57610e7c847f4a000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4c00000000000000000000000000000000000000000000000000000000000000611666565b81600814156111b457610e7c847f41000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4700000000000000000000000000000000000000000000000000000000000000611666565b816009141561122957610e7c847f53000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f5000000000000000000000000000000000000000000000000000000000000000611666565b81600a141561129e57610e7c847f4f000000000000000000000000000000000000000000000000000000000000007f43000000000000000000000000000000000000000000000000000000000000007f5400000000000000000000000000000000000000000000000000000000000000611666565b81600b141561131357610e7c847f4e000000000000000000000000000000000000000000000000000000000000007f4f000000000000000000000000000000000000000000000000000000000000007f5600000000000000000000000000000000000000000000000000000000000000611666565b81600c141561138857610e7c847f44000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f4300000000000000000000000000000000000000000000000000000000000000611666565b60405162461bcd60e51b815260040161043690611b32565b60006113ad606485611fad565b905060006113bc600a83611dc9565b9050856113ca826030611d3c565b60f81b90808054806113db90611f20565b80601f81146113e9576113ff565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156114285790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a836114599190611fad565b905086611467826030611d3c565b60f81b908080548061147890611f20565b80601f81146114865761149c565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156114c55790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505050505050505050565b60008080838162253d8c6115098362010bd9611cb0565b6115139190611cb0565b9050600062023ab1611526836004611ddd565b6115309190611d61565b905060046115418262023ab1611ddd565b61154c906003611cb0565b6115569190611d61565b6115609083611e95565b9150600062164b09611573846001611cb0565b61157f90610fa0611ddd565b6115899190611d61565b90506004611599826105b5611ddd565b6115a39190611d61565b6115ad9084611e95565b6115b890601f611cb0565b9250600061098f6115ca856050611ddd565b6115d49190611d61565b9050600060506115e68361098f611ddd565b6115f09190611d61565b6115fa9086611e95565b9050611607600b83611d61565b945061161485600c611ddd565b61161f836002611cb0565b6116299190611e95565b91508483611638603187611e95565b611643906064611ddd565b61164d9190611cb0565b6116579190611cb0565b9a919950975095505050505050565b8383908080548061167690611f20565b80601f81146116845761169a565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156116c35790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550838290808054806116f590611f20565b80601f811461170357611719565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156117425790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055508381908080548061177490611f20565b80601f811461178257611798565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156117c15790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461180d57600080fd5b919050565b600060208284031215611823578081fd5b610722826117e9565b6000806040838503121561183e578081fd5b611847836117e9565b9150611855602084016117e9565b90509250929050565b600080600060608486031215611872578081fd5b61187b846117e9565b9250611889602085016117e9565b9150604084013590509250925092565b600080600080600080600060e0888a0312156118b3578283fd5b6118bc886117e9565b96506118ca602089016117e9565b95506040880135945060608801359350608088013560ff811681146118ed578384fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561191c578182fd5b611925836117e9565b946020939093013593505050565b600060208284031215611944578081fd5b81516fffffffffffffffffffffffffffffffff81168114610722578182fd5b7f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b901515815260200190565b90815260200190565b95865273ffffffffffffffffffffffffffffffffffffffff94851660208701529290931660408501526060840152608083019190915260a082015260c00190565b93845260ff9290921660208401526040830152606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6000602080835283518082850152825b81811015611a5957858101830151858201604001528201611a3d565b81811115611a6a5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6020808252601d908201527f45524332303a20696e73756666696369656e742d616c6c6f77616e6365000000604082015260600190565b60208082526022908201527f45524332303a20696e76616c6964207369676e6174757265202773272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526013908201527f64617465206465636f64696e67206572726f7200000000000000000000000000604082015260600190565b60208082526018908201527f45524332303a20696e76616c69642d616464726573732d300000000000000000604082015260600190565b60208082526015908201527f45524332303a20696e76616c69642d7065726d69740000000000000000000000604082015260600190565b60208082526015908201527f45524332303a207065726d69742d657870697265640000000000000000000000604082015260600190565b6020808252601b908201527f45524332303a20696e73756666696369656e742d62616c616e63650000000000604082015260600190565b60208082526022908201527f63616c6c6572206973206e6f7420616e20617574686f72697a6564206d696e7460408201527f6572000000000000000000000000000000000000000000000000000000000000606082015260800190565b60ff91909116815260200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615611cea57611cea611fc1565b827f8000000000000000000000000000000000000000000000000000000000000000038412811615611d1e57611d1e611fc1565b50500190565b60008219821115611d3757611d37611fc1565b500190565b600060ff821660ff84168060ff03821115611d5957611d59611fc1565b019392505050565b600082611d7057611d70611ff0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f800000000000000000000000000000000000000000000000000000000000000083141615611dc457611dc4611fc1565b500590565b600082611dd857611dd8611ff0565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81841382841385830485118282161615611e1c57611e1c611fc1565b7f800000000000000000000000000000000000000000000000000000000000000084871286820588128184161615611e5657611e56611fc1565b858712925087820587128484161615611e7157611e71611fc1565b87850587128184161615611e8757611e87611fc1565b505050929093029392505050565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615611ecf57611ecf611fc1565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615611f0357611f03611fc1565b50500390565b600082821015611f1b57611f1b611fc1565b500390565b600281046001821680611f3457607f821691505b60208210811415611f6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611fa657611fa6611fc1565b5060010190565b600082611fbc57611fbc611ff0565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea26469706673582212207409d39b0661b9444b1ab4cc0285767a14dac79727b9031e909455d53b9039f664736f6c63430008000033";