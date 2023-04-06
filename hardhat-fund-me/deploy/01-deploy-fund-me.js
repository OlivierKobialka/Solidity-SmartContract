// hre = Hardhat Runtime Environment
// module.exports = async (hre) => {
//     const { deployments, getNamedAccounts } = hre;
//! }; THE SAME
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    // if chainId is X use address Y
    // if chainId is Z use address A

    const fundMe= await deploy("FundMe", {
        from: deployer,
        args: [
            /* address? */
        ], // put price fred address
        log: true
    })
};
