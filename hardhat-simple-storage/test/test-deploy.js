const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
// describe("SimpleStorage", () => {});
describe("SimpleStorage tests", function () {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    //? assert || expect key word
    describe("favorite number", function () {
        it("Should start with a favorite number of 0", async function () {
            const currentValue = await simpleStorage.retrieve();
            const expectedValue = "0";
            expect(currentValue.toString()).to.equal(expectedValue);
        });
    });
    describe("store", function () {
        it("Should update when we call store", async function () {
            const expectedValue = "7";
            const transactionResponse = await simpleStorage.store(
                expectedValue
            );
            await transactionResponse.wait(1);

            const currentValue = await simpleStorage.retrieve();
            assert.equal(currentValue.toString(), expectedValue);
        });
    });
});
