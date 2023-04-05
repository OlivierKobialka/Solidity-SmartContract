const { ethers } = require("hardhat");
// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        simpleStorageFunction = await ethers.getContractFactory(
            "SimpleStorage"
        );
        simpleStorage = await simpleStorageFunction.deploy();
    });
    it();
});
