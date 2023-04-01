const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    asnc (taskArgs, hre) => {
        hre.ethers.provider.getBlockNumber()
    }
)