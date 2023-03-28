// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

constract FallBackExample {
    uint256 public result;

    receive() external payable {
        result = 1;
    }

    fallback() externa; payable {
        result = 2;
    }
}
/*

fallback is a special function that is executed either when

    a function that does not exist is called or
    Ether is sent directly to a contract but receive() does not exist or msg.data is not empty

fallback has a 2300 gas limit when called by transfer or send.

*/