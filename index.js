const ethers = require("ethers");
const abi = require("./abi.json");
require("dotenv").config();

const contractAddress =
  "0x8a235ed12064cb1328d93896bd65b9c3dc8d7c8fdbc13df49dd006c03aac7290;";

// 環境変数
const privateKey = process.env.PRIVATE_KEY;
const infuraApiKey = process.env.INFURA_PRIVATE_KEY;

// ウォレットのimport
const wallet = new ethers.Wallet(privateKey);

// ウォレットアドレス取得
const address = wallet.address;

const infuraProvider = new ethers.providers.InfuraProvider(
  "rinkeby",
  infuraApiKey
);

// const signer = new ethers.Wallet(privateKey, provider);
const signer = wallet.connect(infuraProvider);

// mint
(async () => {
  const contract = await new ethers.Contract(contractAddress, abi, signer);
  for (let i = 0; i < 1152; i++) {
    console.log("mint", i, "回目");
    await contract.mint();
  }
})();

console.log("privateKey ;", process.env.PRIVATE_KEY);
console.log("infura ;", process.env.INFURA_API_KEY);

console.log("address :", address);
console.log("privateKey :", privateKey);
