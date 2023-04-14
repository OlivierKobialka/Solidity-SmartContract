const { getNamedAccounts } = require("hardhat");
async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ether.getContract("FundMe", deployer);
    console.log("Funding Contract...");
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    });
    await transactionResponse.wait();
    console.log("Funded Contract!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
