// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;
    uint256 public minimumUsd = 50 * 10 ** 18; //? 1e18

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    function fund() public payable {
        // be able to set the minimum amount of ether to send
        // msg.value.getConvertionRate("USD") / 1e18 >= minimumUsd
        require(
            getConversionRate(
                msg.value >= minimumUsd,
                "You need to spend at least 1 ETH"
            )
        );
        funders.push(msg.sender); //? msg.sender is the address of the person who called this function
        addressToAmountFunded[msg.sender] = msg.value;
    }
}
