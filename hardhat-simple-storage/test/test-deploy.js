const { ethers } = require("hardhat");
// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
    beforeEach(async function () {
        const simpleStorageFunction = await ethers.getContractFactory(
            "SimpleStorage"
        );
    });
    it();
});
