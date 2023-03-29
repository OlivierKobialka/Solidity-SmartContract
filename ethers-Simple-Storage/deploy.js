// synchronous - [solidity ]
// Asynchronous - [javascript]
const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
	let provider = new ethers.providers.JsonRpcProvider("HTTP://0.0.0.0:8545");
	let wallet = new ethers.Wallet(
		"0xc53777392032192d2590ddf272e6932de5a45f38f68eccf703e623b185087a40",
		provider
	);
	const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
	const binary = fs.readFileSync(
		"./SimpleStorage_sol_SimpleStorage.bin",
		"utf8"
	);

	const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
	console.log("Deploying, please wait…");
	const contract = await contractFactory.deploy();
	console.log(contract);

	const deploymentReceipt = await contract.deployTransaction.wait(1);
	console.log(`Contract deployed to ${contract.address}`);
	console.log(`Transaction hash: ${deploymentReceipt.transactionHash}`);
	console.log(" ");
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
