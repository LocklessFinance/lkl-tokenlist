/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {TrancheFactory} from "../TrancheFactory";

export class TrancheFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    dateLibrary: string,
    overrides?: Overrides
  ): Promise<TrancheFactory> {
    return super.deploy(
      _factory,
      dateLibrary,
      overrides || {}
    ) as Promise<TrancheFactory>;
  }
  getDeployTransaction(
    _factory: string,
    dateLibrary: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, dateLibrary, overrides || {});
  }
  attach(address: string): TrancheFactory {
    return super.attach(address) as TrancheFactory;
  }
  connect(signer: Signer): TrancheFactory__factory {
    return super.connect(signer) as TrancheFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrancheFactory {
    return new Contract(address, _abi, signerOrProvider) as TrancheFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "dateLibrary",
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
        internalType: "address",
        name: "trancheAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wpAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "TrancheCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "TRANCHE_CREATION_HASH",
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
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wpAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_incentiveToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lklStaking",
        type: "address",
      },
    ],
    name: "deployTranche",
    outputs: [
      {
        internalType: "contract Tranche",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "contract IInterestToken",
        name: "",
        type: "address",
      },
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516139af3803806139af83398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c6138e96100c66000396000610112015260006103ee01526138e96000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80631af3f317146200004b5780633bc5de30146200006d5780634282f3de146200008c575b600080fd5b62000055620000b2565b60405162000064919062000a88565b60405180910390f35b62000077620000e1565b60405162000064979695949392919062000a39565b620000a36200009d3660046200086a565b6200013e565b60405162000064919062000a91565b604051620000c36020820162000750565b6020820181038252601f19601f820116604052508051906020012081565b60005460015460055460025460035460045473ffffffffffffffffffffffffffffffffffffffff95861695938416937f00000000000000000000000000000000000000000000000000000000000000009381169216919293949596565b6000805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316178355600187905560028054868316908416179055600380549185169190921617905560405184908290620001ba9083908990602001620008e6565b60405160208183030381529060405280519060200120905060008273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200021b57600080fd5b505afa15801562000230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405262000278919081019062000784565b905060008373ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002c357600080fd5b505afa158015620002d8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002fe91906200075e565b905060008173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200034957600080fd5b505afa1580156200035e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003849190620008c3565b9050600060ff60f81b308660405180602001620003a19062000750565b6020820181038252601f19601f8201166040525080519060200120604051602001620003d194939291906200091b565b6040516020818303038152906040528051906020012060001c90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166334bc395982868e866040518563ffffffff1660e01b81526004016200044d94939291906200097f565b602060405180830381600087803b1580156200046857600080fd5b505af11580156200047d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004a391906200075e565b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9283161790556040517ff9b966990000000000000000000000000000000000000000000000000000000081529089169063f9b96699906200052c9084908f9060009060019060040162000a02565b600060405180830381600087803b1580156200054757600080fd5b505af11580156200055c573d6000803e3d6000fd5b5050505060018873ffffffffffffffffffffffffffffffffffffffff1663081e3eda6040518163ffffffff1660e01b815260040160206040518083038186803b158015620005a957600080fd5b505afa158015620005be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005e4919062000851565b620005f0919062000ae9565b6004556040516000908690620006069062000750565b8190604051809103906000f590508015801562000627573d6000803e3d6000fd5b5090508b8b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f86944ab3f9722712d06f9d63f492e9893c0c77cc40e512ca1c1f3aaaec6bf2d360405160405180910390a48173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620006f6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006ed9062000ab2565b60405180910390fd5b600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811682556001829055600580548216905560028054821690556003805490911690556004559b9a5050505050505050505050565b612d058062000baf83390190565b60006020828403121562000770578081fd5b81516200077d8162000b88565b9392505050565b60006020828403121562000796578081fd5b815167ffffffffffffffff80821115620007ae578283fd5b818401915084601f830112620007c2578283fd5b815181811115620007d757620007d762000b59565b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156200081c576200081c62000b59565b60405281815283820160200187101562000834578485fd5b6200084782602083016020870162000b26565b9695505050505050565b60006020828403121562000863578081fd5b5051919050565b6000806000806080858703121562000880578283fd5b843593506020850135620008948162000b88565b92506040850135620008a68162000b88565b91506060850135620008b88162000b88565b939692955090935050565b600060208284031215620008d5578081fd5b815160ff811681146200077d578182fd5b60609290921b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000168252601482015260340190565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b600073ffffffffffffffffffffffffffffffffffffffff86168252608060208301528451806080840152620009bc8160a085016020890162000b26565b60a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505083604083015260ff8316606083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff9490941684526020840192909252151560408301521515606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff97881681526020810196909652938616604086015291851660608501528416608084015290921660a082015260c081019190915260e00190565b90815260200190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60208082526018908201527f435245415445322061646472657373206d69736d617463680000000000000000604082015260600190565b60008282101562000b21577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500390565b60005b8381101562000b4357818101518382015260200162000b29565b8381111562000b53576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811462000bab57600080fd5b5056fe6101406040523480156200001257600080fd5b50604080518082018252601981527f4c6f636b6c657373205072696e636970616c20546f6b656e20000000000000006020808301918252835180850190945260018452600760fc1b90840152815191929162000071916000916200067b565b508051620000879060019060208401906200067b565b506002805460ff1916601217905560036020526000197f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff8190553060009081526040902055620000d6620003be565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001089190620008c8565b60408051918290038220828201825260018352603160f81b60209384015290516200015b93927fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69146913091016200096d565b60405160208183030381529060405280519060200120600681905550505060003390506000806000806000806000876001600160a01b0316633bc5de306040518163ffffffff1660e01b815260040160e060405180830381600087803b158015620001c557600080fd5b505af1158015620001da573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000200919062000721565b6001600160601b0319606086811b821660805288811b821660a05284901b1660e05261012086905260408051637e062a3560e11b81529051979e50959c50939a5091985096509450925088916000916001600160a01b0384169163fc0c546a91600480820192602092909190829003018186803b1580156200028157600080fd5b505afa15801562000296573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002bc9190620007b3565b9050806001600160a01b031660c0816001600160a01b031660601b815250506000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200031757600080fd5b505afa1580156200032c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000352919062000887565b7fff0000000000000000000000000000000000000000000000000000000000000060f882901b166101005290506200038a8162000665565b5050600780546001600160a01b0319166001600160a01b0394909416939093179092556008555062000a8895505050505050565b6000339050600080600080846001600160a01b0316633bc5de306040518163ffffffff1660e01b815260040160e060405180830381600087803b1580156200040557600080fd5b505af11580156200041a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000440919062000721565b50505093509350935093506000846001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200048757600080fd5b505afa1580156200049c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620004c69190810190620007d9565b60405190915060009060019082906001600160a01b03861690637a0674a360e11b90620004fc9087908b90869060240162000999565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516200053c9190620008aa565b600060405180830381855af49150503d806000811462000579576040519150601f19603f3d011682016040523d82523d6000602084013e6200057e565b606091505b505090506000856001600160a01b031663f40ce94660e01b868a86604051602401620005ad9392919062000999565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620005ed9190620008aa565b600060405180830381855af49150503d80600081146200062a576040519150601f19603f3d011682016040523d82523d6000602084013e6200062f565b606091505b505090508180156200063e5750805b6200065957634e487b7160e01b600052600160045260246000fd5b50505050505050505050565b6002805460ff191660ff92909216919091179055565b828054620006899062000a1c565b90600052602060002090601f016020900481019282620006ad5760008555620006f8565b82601f10620006c857805160ff1916838001178555620006f8565b82800160010185558215620006f8579182015b82811115620006f8578251825591602001919060010190620006db565b50620007069291506200070a565b5090565b5b808211156200070657600081556001016200070b565b600080600080600080600060e0888a0312156200073c578283fd5b8751620007498162000a6f565b602089015160408a01519198509650620007638162000a6f565b6060890151909550620007768162000a6f565b6080890151909450620007898162000a6f565b60a08901519093506200079c8162000a6f565b8092505060c0880151905092959891949750929550565b600060208284031215620007c5578081fd5b8151620007d28162000a6f565b9392505050565b600060208284031215620007eb578081fd5b81516001600160401b038082111562000802578283fd5b818401915084601f83011262000816578283fd5b8151818111156200082b576200082b62000a59565b604051601f8201601f19168101602001838111828210171562000852576200085262000a59565b6040528181528382016020018710156200086a578485fd5b6200087d826020830160208701620009e9565b9695505050505050565b60006020828403121562000899578081fd5b815160ff81168114620007d2578182fd5b60008251620008be818460208701620009e9565b9190910192915050565b8154600090819060028104600180831680620008e557607f831692505b60208084108214156200090657634e487b7160e01b87526022600452602487fd5b8180156200091d57600181146200092f576200095f565b60ff198616895284890196506200095f565b6200093a8a620009dd565b885b86811015620009575781548b8201529085019083016200093c565b505084890196505b509498975050505050505050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6000606082528451806060840152620009ba816080850160208901620009e9565b60208301949094525060408101919091526080601f909201601f19160101919050565b60009081526020902090565b60005b8381101562000a06578181015183820152602001620009ec565b8381111562000a16576000848401525b50505050565b60028104600182168062000a3157607f821691505b6020821081141562000a5357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000a8557600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160f81c610120516121c662000b3f60003960008181610c5f015261143801526000505060008181610acf0152611767015260008181610b0e0152610be5015260008181610458015281816105990152818161072701528181610b3e01528181610cd001528181610deb015281816110be0152818161121101526112d80152600081816104e901528181610c1b0152610fe501526121c66000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636f307dc31161010457806395d89b41116100a2578063d2d8812011610071578063d2d8812014610366578063d505accf1461036e578063dd62ed3e14610381578063f106845414610394576101cf565b806395d89b411461033b578063a9059cbb14610343578063aa082a9d14610356578063c985479e1461035e576101cf565b80637da081a2116100de5780637da081a2146102f85780637ecebe001461030257806385f45c8814610315578063884e17f314610328576101cf565b80636f307dc3146102d557806370a08231146102dd578063764b666c146102f0576101cf565b806330adf81f11610171578063421b15c11161014b578063421b15c1146102aa578063638126f8146102b257806363cf7cdd146102ba5780636e553f65146102c2576101cf565b806330adf81f14610285578063313ce5671461028d5780633644e515146102a2576101cf565b8063095ea7b3116101ad578063095ea7b31461021c5780631210aac21461023c57806318160ddd1461025d57806323b872dd14610272576101cf565b8063041be7c2146101d457806306fdde03146101f257806309218e9114610207575b600080fd5b6101dc61039c565b6040516101e99190611fc5565b60405180910390f35b6101fa6103c8565b6040516101e99190611cd1565b61020f610456565b6040516101e99190611bf9565b61022f61022a366004611b13565b61047a565b6040516101e99190611c6b565b61024f61024a366004611b74565b6104e4565b6040516101e9929190611fe2565b6102656107e6565b6040516101e99190611c76565b61022f610280366004611a67565b6107fe565b610265610a94565b610295610ab8565b6040516101e99190611ff0565b610265610ac1565b610265610ac7565b61020f610acd565b6101dc610af1565b61024f6102d0366004611b74565b610b09565b61020f610be3565b6102656102eb366004611a1b565b610c07565b61020f610c19565b610300610c3d565b005b610265610310366004611a1b565b610dcf565b61024f610323366004611a1b565b610de1565b610265610336366004611b74565b611067565b6101fa61141c565b61022f610351366004611b13565b611429565b610265611436565b61026561145a565b61020f611460565b61030061037c366004611aa2565b61146f565b61026561038f366004611a35565b6116cb565b6102656116e8565b60095470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681565b600080546103d5906120d4565b80601f0160208091040260200160405190810160405280929190818152602001828054610401906120d4565b801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104d3908690611c76565b60405180910390a350600192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639dc29fac33866040518363ffffffff1660e01b8152600401610535929190611c31565b600060405180830381600087803b15801561054f57600080fd5b505af1158015610563573d6000803e3d6000fd5b50506040517f3af9e669000000000000000000000000000000000000000000000000000000008152600092506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169150633af9e669906105cf903090600401611bf9565b60206040518083038186803b1580156105e757600080fd5b505afa1580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f9190611b5c565b6009549091506fffffffffffffffffffffffffffffffff80821691700100000000000000000000000000000000900416600082841161065f576000610669565b61066983856120bd565b90506000826106788a8461204f565b6106829190612016565b90506000670de0b6b3a764000061069f6509184e72a0008461204f565b6106a99190612016565b6106b390836120bd565b90506106bf8a856120bd565b600980546fffffffffffffffffffffffffffffffff9283167001000000000000000000000000000000000292169190911790556040517f67caf87100000000000000000000000000000000000000000000000000000000815260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906367caf87190610760908e9088908890600401611c4a565b606060405180830381600087803b15801561077a57600080fd5b505af115801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b29190611b96565b9250509150806000146107c557600b8190555b60006107d28d888e6116ee565b929d929c50919a5050505050505050505050565b6009546fffffffffffffffffffffffffffffffff1690565b6001600160a01b038316600090815260036020526040812054828110156108405760405162461bcd60e51b815260040161083790611f8e565b60405180910390fd5b6001600160a01b03851633146108ec576001600160a01b03851660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108ea57838110156108bb5760405162461bcd60e51b815260040161083790611d42565b6108c584826120bd565b6001600160a01b03871660009081526004602090815260408083203384529091529020555b505b6108f683826120bd565b6001600160a01b038087166000908152600360205260408082209390935590861681522054610926908490611ffe565b6001600160a01b03808616600090815260036020526040908190209290925560075460085492517fb5c5f67200000000000000000000000000000000000000000000000000000000815291169163b5c5f672916109899189918890600401611c4a565b600060405180830381600087803b1580156109a357600080fd5b505af11580156109b7573d6000803e3d6000fd5b50506007546008546040517f0efe6a8b0000000000000000000000000000000000000000000000000000000081526001600160a01b039092169350630efe6a8b9250610a0a918891908890600401611c4a565b600060405180830381600087803b158015610a2457600080fd5b505af1158015610a38573d6000803e3d6000fd5b50505050836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610a7f9190611c76565b60405180910390a360019150505b9392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60025460ff1681565b60065481565b600a5481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6009546fffffffffffffffffffffffffffffffff1681565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd337f0000000000000000000000000000000000000000000000000000000000000000876040518463ffffffff1660e01b8152600401610b7c93929190611c0d565b602060405180830381600087803b158015610b9657600080fd5b505af1158015610baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bce9190611b3c565b50610bd883610de1565b915091509250929050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600a5415610c5d5760405162461bcd60e51b815260040161083790611eb2565b7f0000000000000000000000000000000000000000000000000000000000000000421015610c9d5760405162461bcd60e51b815260040161083790611e44565b6040517f3af9e6690000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633af9e66990610d05903090600401611bf9565b60206040518083038186803b158015610d1d57600080fd5b505afa158015610d31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d559190611b5c565b6009549091506fffffffffffffffffffffffffffffffff16811015610db4577ff7f87880c827db1e5aaa7a648e710c6e9c3a608de27471889dbd94199232c31f42604051610da39190611c76565b60405180910390a142600a55610dcc565b60405162461bcd60e51b815260040161083790611f57565b50565b60056020526000908152604090205481565b60008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166385f45c88306040518263ffffffff1660e01b8152600401610e359190611bf9565b606060405180830381600087803b158015610e4f57600080fd5b505af1158015610e63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e879190611b96565b91945092509050600083610e9b848461204f565b610ea59190612016565b6009549091506fffffffffffffffffffffffffffffffff80821691700100000000000000000000000000000000900416610ee0836002611ffe565b821115610eff5760405162461bcd60e51b815260040161083790611f20565b60008083118015610f0f57508284115b15610f45578186610f2085876120bd565b610f2a919061204f565b610f349190612016565b610f3e90876120bd565b9050610f48565b50845b610f528184611ffe565b610f5c8784611ffe565b600980546fffffffffffffffffffffffffffffffff938416928416700100000000000000000000000000000000029316929092177fffffffffffffffffffffffffffffffff00000000000000000000000000000000161790556040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340c10f199061101c908d908a90600401611c31565b600060405180830381600087803b15801561103657600080fd5b505af115801561104a573d6000803e3d6000fd5b505050506110588a826117f9565b97509395505050505050915091565b600a546009546000919084906fffffffffffffffffffffffffffffffff168215611191576040517f3af9e6690000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633af9e669906110f3903090600401611bf9565b60206040518083038186803b15801561110b57600080fd5b505afa15801561111f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111439190611b5c565b90508181101561118f5781611158828961204f565b6111629190612016565b9250426111726202a30086611ffe565b1061118f5760405162461bcd60e51b815260040161083790611d79565b505b61119b3387611902565b6111a5868261208c565b600980547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff929092169190911790556040517f70a082310000000000000000000000000000000000000000000000000000000081526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319061124e903090600401611bf9565b60206040518083038186803b15801561126657600080fd5b505afa15801561127a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129e9190611b5c565b90506000670de0b6b3a76400006112bb6509184e72a0008661204f565b6112c59190612016565b6112cf90856120bd565b905060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166367caf8718b89876040518463ffffffff1660e01b815260040161132693929190611c4a565b606060405180830381600087803b15801561134057600080fd5b505af1158015611354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113789190611b96565b9250925092508060001461138c57600b8190555b600082611399858861204f565b6113a39190612016565b90508681101561140c57886113ca5760405162461bcd60e51b815260040161083790611f20565b426113d86202a3008b611ffe565b1061140c577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b50919a9950505050505050505050565b600180546103d5906120d4565b6000610a8d3384846107fe565b7f000000000000000000000000000000000000000000000000000000000000000081565b600b5481565b6007546001600160a01b031681565b6006546001600160a01b03881660009081526005602090815260408083205490519293926114c8927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d92918d9101611c7f565b604051602081830303815290604052805190602001206040516020016114ef929190611bc3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090506001600160a01b03881661154d5760405162461bcd60e51b815260040161083790611e0d565b600181858585604051600081526020016040526040516115709493929190611cb3565b6020604051602081039080840390855afa158015611592573d6000803e3d6000fd5b505050602060405103516001600160a01b0316886001600160a01b0316146115cc5760405162461bcd60e51b815260040161083790611e7b565b8415806115d95750844211155b6115f55760405162461bcd60e51b815260040161083790611ee9565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156116355760405162461bcd60e51b815260040161083790611db0565b6001600160a01b038816600090815260056020526040812080549161165983612128565b90915550506001600160a01b038089166000818152600460209081526040808320948c168084529490915290819020899055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906116b9908a90611c76565b60405180910390a35050505050505050565b600460209081526000928352604080842090915290825290205481565b60085481565b6000600b546000141561170357506000610a8d565b600083600b5486611714919061204f565b61171e9190612016565b905080600b600082825461173291906120bd565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb9061179e9086908590600401611c31565b602060405180830381600087803b1580156117b857600080fd5b505af11580156117cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f09190611b3c565b50949350505050565b6001600160a01b03821660009081526003602052604090205461181d908290611ffe565b6001600160a01b03808416600090815260036020526040908190209290925560075460085492517f0efe6a8b000000000000000000000000000000000000000000000000000000008152911691630efe6a8b916118809186918690600401611c4a565b600060405180830381600087803b15801561189a57600080fd5b505af11580156118ae573d6000803e3d6000fd5b50505050816001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516118f69190611c76565b60405180910390a35050565b6001600160a01b0382166000908152600360205260409020546119269082906120bd565b6001600160a01b03808416600090815260036020526040908190209290925560075460085492517fb5c5f67200000000000000000000000000000000000000000000000000000000815291169163b5c5f672916119899186918690600401611c4a565b600060405180830381600087803b1580156119a357600080fd5b505af11580156119b7573d6000803e3d6000fd5b5050505060006001600160a01b0316826001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516118f69190611c76565b80356001600160a01b0381168114611a1657600080fd5b919050565b600060208284031215611a2c578081fd5b610a8d826119ff565b60008060408385031215611a47578081fd5b611a50836119ff565b9150611a5e602084016119ff565b90509250929050565b600080600060608486031215611a7b578081fd5b611a84846119ff565b9250611a92602085016119ff565b9150604084013590509250925092565b600080600080600080600060e0888a031215611abc578283fd5b611ac5886119ff565b9650611ad3602089016119ff565b95506040880135945060608801359350608088013560ff81168114611af6578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611b25578182fd5b611b2e836119ff565b946020939093013593505050565b600060208284031215611b4d578081fd5b81518015158114610a8d578182fd5b600060208284031215611b6d578081fd5b5051919050565b60008060408385031215611b86578182fd5b82359150611a5e602084016119ff565b600080600060608486031215611baa578283fd5b8351925060208401519150604084015190509250925092565b7f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b81811015611cfd57858101830151858201604001528201611ce1565b81811115611d0e5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6020808252601d908201527f45524332303a20696e73756666696369656e742d616c6c6f77616e6365000000604082015260600190565b60208082526007908201527f453a4561726c7900000000000000000000000000000000000000000000000000604082015260600190565b60208082526022908201527f45524332303a20696e76616c6964207369676e6174757265202773272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526018908201527f45524332303a20696e76616c69642d616464726573732d300000000000000000604082015260600190565b6020808252600d908201527f453a4e6f74204578706972656400000000000000000000000000000000000000604082015260600190565b60208082526015908201527f45524332303a20696e76616c69642d7065726d69740000000000000000000000604082015260600190565b6020808252600c908201527f453a416c72656164795365740000000000000000000000000000000000000000604082015260600190565b60208082526015908201527f45524332303a207065726d69742d657870697265640000000000000000000000604082015260600190565b60208082526009908201527f453a4e45475f494e540000000000000000000000000000000000000000000000604082015260600190565b60208082526008908201527f453a4e6f4c6f7373000000000000000000000000000000000000000000000000604082015260600190565b6020808252601b908201527f45524332303a20696e73756666696369656e742d62616c616e63650000000000604082015260600190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b918252602082015260400190565b60ff91909116815260200190565b6000821982111561201157612011612161565b500190565b60008261204a577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561208757612087612161565b500290565b60006fffffffffffffffffffffffffffffffff838116908316818110156120b5576120b5612161565b039392505050565b6000828210156120cf576120cf612161565b500390565b6002810460018216806120e857607f821691505b60208210811415612122577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561215a5761215a612161565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212209fda0619f96fa3e999d717222f46791b655ebaba838d63b9cc7acdbc2b64411b64736f6c63430008000033a26469706673582212204da946403d7cb0e94dd22b6e638b30d06b3f2b1d9c228976cecf494dbc98e9c264736f6c63430008000033";
