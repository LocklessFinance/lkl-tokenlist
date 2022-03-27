import fs from "fs";
import hre from "hardhat";

import mumbaiAddressesJson from "src/addresses/mumbai.addresses.json";
import { getTokenList } from "src/getTokenList";

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

const network = hre.network.name == "hardhat" ? "mainnet" : hre.network.name;
const addressesJsonFilePath = '';
console.log('network', network);

getTokenList(
   mumbaiAddressesJson,
  "Mumbai token list",
  "dist/mumbai.tokenlist.json"
)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });