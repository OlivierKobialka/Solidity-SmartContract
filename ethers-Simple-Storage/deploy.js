// synchronous - [solidity ]
// Asynchronous - [javascript]
const ethers = require("ethers");
// const solc = require("solc")
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
	const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545");
	const wallet = new ethers.Wallet(
		"0xc53777392032192d2590ddf272e6932de5a45f38f68eccf703e623b185087a40",
		provider
	);
	const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
	const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
