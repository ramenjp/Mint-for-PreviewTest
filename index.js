const ethers = require("ethers");
const abi = require("./abi.json");
require("dotenv").config();

const contractAddress = "0x7510ac404FD204a80D838d5d33a9f061780D57f2";
const network = "rinkeby";

// 環境変数
const privateKey = process.env.PRIVATE_KEY;
const infuraApiKey = process.env.INFURA_PRIVATE_KEY;

// ウォレットのimport
const wallet = new ethers.Wallet(privateKey);

// ウォレットアドレス取得
const address = wallet.address;

const infuraProvider = new ethers.providers.InfuraProvider(
  network,
  infuraApiKey
);

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
