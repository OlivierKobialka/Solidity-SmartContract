// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;
    uint256 public minimumUsd = 50 * 10 ** 18; //? 1e18

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public owner;
    
    constructor() {
        owner = msg.sender;
    }

    function fund() public payable {
        // be able to set the minimum amount of ether to send
        // msg.value.getConvertionRate("USD") / 1e18 >= minimumUsd
        require(msg.value.getConversionRate() >= minimumUsd, "You need to spend more ETH!");
        funders.push(msg.sender); //? msg.sender is the address of the person who called this function
        addressToAmountFunded[msg.sender] = msg.value;
    }

    function withdraw() public onlyOwner {
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex]
            addressToAmountFunded[funder] = 0;
        }
        // reset the array
        funders = new address[](0);        
        //! withdraw funds

        // transfer
        // payable(msg.sender).transfer(address(this).balance);
        // send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Failed to send ether");
        // call
        (bool callSucces, /* bytes memory dataReturned */) = payable(msg.sender).call{vale: address(this).balance}("");
        require(callSucces, "Failed to call ether");
    }

    modifier onlyOwner{
        require(msg.sender == owner, "You are not the owner");
        _;
    }
}
 