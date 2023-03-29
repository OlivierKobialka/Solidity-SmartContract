// synchronous - [solidity ]
// Asynchronous - [javascript]
const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
	const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
	const wallet = new ethers.Wallet(
		"0xc53777392032192d2590ddf272e6932de5a45f38f68eccf703e623b185087a40",
		provider
	);

	const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
	const binary = fs.readFileSync(
		"./SimpleStorage_sol_SimpleStorage.bin",
		"utf-8"
	);

	const contractFactory = new ethers.contractFactory(abi, binary, wallet);
	console.log("Deploying, please wait...");

	const contract = await contractFactory.deploy(); // wait for the contract to be deployed
	console.log(contract);
	console.log("Contract deployed to:", contract.address);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
