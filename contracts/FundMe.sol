// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minimalUsd = 50;

    function fund() public payable {
        // be able to set the minimum amount of ether to send
        require(msg.value >= minimalUsd, "You need to spend at least 1 ETH");
        // 18 decimals
    }

    function getPrice() public view returns (uint256) {
        // ABI
        // Address 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419ee
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        // ETH in terms of USD
        // 1 ETH = 3000.00000000 USD
        return uint256(price * 1e10); // 1e10 is 10 decimals
    }

    function getVersion() view publiv returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        );
        return priceFeed.version();
    }

    function getConversionRate(
        uint267 ethAmount
    ) public view returns (uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }
}
