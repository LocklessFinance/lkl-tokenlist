/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {MockWeightedOracleMath} from "../MockWeightedOracleMath";

export class MockWeightedOracleMath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockWeightedOracleMath> {
    return super.deploy(overrides || {}) as Promise<MockWeightedOracleMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockWeightedOracleMath {
    return super.attach(address) as MockWeightedOracleMath;
  }
  connect(signer: Signer): MockWeightedOracleMath__factory {
    return super.connect(signer) as MockWeightedOracleMath__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockWeightedOracleMath {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockWeightedOracleMath;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "normalizedWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "bptTotalSupplyLn",
        type: "int256",
      },
    ],
    name: "calcLogBPTPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "normalizedWeightA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "normalizedWeightB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceB",
        type: "uint256",
      },
    ],
    name: "calcLogSpotPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "fromLowResLog",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "toLowResLog",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cfd806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806357aad01314610051578063abb9d0d514610080578063be7a6d1e1461009d578063c519a075146100c6575b600080fd5b61006e6004803603602081101561006757600080fd5b50356100f5565b60408051918252519081900360200190f35b61006e6004803603602081101561009657600080fd5b5035610108565b61006e600480360360608110156100b357600080fd5b5080359060208101359060400135610113565b61006e600480360360808110156100dc57600080fd5b5080359060208101359060408101359060600135610128565b60006101008261013f565b90505b919050565b600061010082610183565b6000610120848484610196565b949350505050565b6000610136858585856101b7565b95945050505050565b60008061014b836101ec565b9050655af3107a40006000821361016a57652d79883d20008203610174565b652d79883d200082015b8161017b57fe5b059392505050565b6000610100655af3107a40008302610250565b6000806101ab6101a68587610718565b61013f565b92909203949350505050565b6000806101d76101c78486610718565b6101d18789610718565b90610718565b90506101e28161013f565b9695505050505050565b60006101fc600083136064610771565b670c7d713b49da00008213801561021a5750670f43fc2c04ee000082125b1561024057670de0b6b3a764000061023183610783565b8161023857fe5b059050610103565b610249826108ba565b9050610103565b60006102957ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc0000831215801561028e575068070c1cc73b00c800008313155b6009610771565b60008212156102c1576102aa82600003610250565b6ec097ce7bc90715b34b9f10000000008161023857fe5b60006806f05b59d3b2000000831261031757507ffffffffffffffffffffffffffffffffffffffffffffffff90fa4a62c4e00000090910190770195e54c5dd42177f53a27172fa9ec630262827000000000610363565b6803782dace9d9000000831261035f57507ffffffffffffffffffffffffffffffffffffffffffffffffc87d2531627000000909101906b1425982cf597cd205cef7380610363565b5060015b6064929092029168056bc75e2d6310000068ad78ebc5ac6200000084126103c9577fffffffffffffffffffffffffffffffffffffffffffffff5287143a539e0000009093019268056bc75e2d631000006e01855144814a7ff805980ff008400082020590505b6856bc75e2d631000000841261041b577fffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf0000009093019268056bc75e2d631000006b02df0ab5a80a22c61ab5a70082020590505b682b5e3af16b18800000841261046b577fffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e78000009093019268056bc75e2d63100000693f1fce3da636ea5cf85082020590505b6815af1d78b58c40000084126104bb577fffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c000009093019268056bc75e2d63100000690127fa27722cc06cc5e282020590505b680ad78ebc5ac6200000841261050a577ffffffffffffffffffffffffffffffffffffffffffffffff5287143a539e000009093019268056bc75e2d6310000068280e60114edb805d0382020590505b68056bc75e2d631000008412610559577ffffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf000009093019268056bc75e2d63100000680ebc5fb4174612111082020590505b6802b5e3af16b188000084126105a8577ffffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e7800009093019268056bc75e2d631000006808f00f760a4b2db55d82020590505b68015af1d78b58c4000084126105f7577ffffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c00009093019268056bc75e2d631000006806f5f177578893793782020590505b68056bc75e2d631000008481019085906002908280020505918201919050600368056bc75e2d631000008783020505918201919050600468056bc75e2d631000008783020505918201919050600568056bc75e2d631000008783020505918201919050600668056bc75e2d631000008783020505918201919050600768056bc75e2d631000008783020505918201919050600868056bc75e2d631000008783020505918201919050600968056bc75e2d631000008783020505918201919050600a68056bc75e2d631000008783020505918201919050600b68056bc75e2d631000008783020505918201919050600c68056bc75e2d631000008783020505918201919050606468056bc75e2d63100000848402058502059695505050505050565b60006107278215156004610771565b826107345750600061076b565b670de0b6b3a7640000838102906107579085838161074e57fe5b04146005610771565b82600182038161076357fe5b046001019150505b92915050565b8161077f5761077f81610c5a565b5050565b670de0b6b3a7640000026000806ec097ce7bc90715b34b9f1000000000808401907fffffffffffffffffffffffffffffffffff3f68318436f8ea4cb460f000000000850102816107cf57fe5b05905060006ec097ce7bc90715b34b9f100000000082800205905081806ec097ce7bc90715b34b9f100000000081840205915060038205016ec097ce7bc90715b34b9f100000000082840205915060058205016ec097ce7bc90715b34b9f100000000082840205915060078205016ec097ce7bc90715b34b9f100000000082840205915060098205016ec097ce7bc90715b34b9f1000000000828402059150600b8205016ec097ce7bc90715b34b9f1000000000828402059150600d8205016ec097ce7bc90715b34b9f1000000000828402059150600f826002919005919091010295945050505050565b6000670de0b6b3a76400008212156108f7576108ed826ec097ce7bc90715b34b9f1000000000816108e757fe5b056108ba565b6000039050610103565b60007e1600ef3172e58d2e933ec884fde10064c63b5372d805e203c0000000000000831261094857770195e54c5dd42177f53a27172fa9ec630262827000000000830592506806f05b59d3b2000000015b73011798004d755d3c8bc8e03204cf44619e0000008312610980576b1425982cf597cd205cef7380830592506803782dace9d9000000015b606492830292026e01855144814a7ff805980ff008400083126109c8576e01855144814a7ff805980ff008400068056bc75e2d63100000840205925068ad78ebc5ac62000000015b6b02df0ab5a80a22c61ab5a7008312610a03576b02df0ab5a80a22c61ab5a70068056bc75e2d6310000084020592506856bc75e2d631000000015b693f1fce3da636ea5cf8508312610a3a57693f1fce3da636ea5cf85068056bc75e2d631000008402059250682b5e3af16b18800000015b690127fa27722cc06cc5e28312610a7157690127fa27722cc06cc5e268056bc75e2d6310000084020592506815af1d78b58c400000015b68280e60114edb805d038312610aa65768280e60114edb805d0368056bc75e2d631000008402059250680ad78ebc5ac6200000015b680ebc5fb417461211108312610ad157680ebc5fb4174612111068056bc75e2d631000009384020592015b6808f00f760a4b2db55d8312610b06576808f00f760a4b2db55d68056bc75e2d6310000084020592506802b5e3af16b1880000015b6806f5f17757889379378312610b3b576806f5f177578893793768056bc75e2d63100000840205925068015af1d78b58c40000015b6806248f33704b2866038312610b6f576806248f33704b28660368056bc75e2d63100000840205925067ad78ebc5ac620000015b6805c548670b9510e7ac8312610ba3576805c548670b9510e7ac68056bc75e2d6310000084020592506756bc75e2d6310000015b600068056bc75e2d63100000840168056bc75e2d631000008086030281610bc657fe5b059050600068056bc75e2d63100000828002059050818068056bc75e2d63100000818402059150600382050168056bc75e2d63100000828402059150600582050168056bc75e2d63100000828402059150600782050168056bc75e2d63100000828402059150600982050168056bc75e2d63100000828402059150600b820501600202606485820105979650505050505050565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea2646970667358221220f0786863de97a908784af35ce33f42cd73fcbcd387d6cf77c7084c1bb5518c2764736f6c63430007010033";
