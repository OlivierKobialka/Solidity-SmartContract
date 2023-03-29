// synchronous - [solidity ]
// Asynchronous - [javascript]
const ethers = require("ethers");
// const solc = require("solc")
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
	// First, compile this!
	// And make sure to have your ganache network up!
	let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
	let wallet = new ethers.Wallet(
		"0xc53777392032192d2590ddf272e6932de5a45f38f68eccf703e623b185087a40",
		provider
	);
	// const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
	// let wallet = new ethers.Wallet.fromEncryptedJsonSync(
	//   encryptedJson,
	//   process.env.PRIVATE_KEY_PASSWORD
	// );
	// wallet = wallet.connect(provider);
	const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
	const binary = fs.readFileSync(
		"./SimpleStorage_sol_SimpleStorage.bin",
		"utf8"
	);
	const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
	console.log("Deploying, please wait...");
	const contract = await contractFactory.deploy();
	// const contract = await contractFactory.deploy({ gasPrice: 100000000000 })
	const deploymentReceipt = await contract.deployTransaction.wait(1);
	console.log(`Contract deployed to ${contract.address}`);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
