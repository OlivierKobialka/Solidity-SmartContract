const { ethers } = require("hardhat");
// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrive();
        const expectedValue = "0";
        // assert || expect key word
    });
});
