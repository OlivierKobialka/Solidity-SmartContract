const { ethers, run, network } = require("hardhat");

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed();
    console.log(`Deployed contract to: ${simpleStorage.address}`);
    console.log(network.config);
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await verify(simpleStorage.address, []);
    }
}

async function verify(getContractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: getContractAddress,
            constructorArguments: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(error);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
