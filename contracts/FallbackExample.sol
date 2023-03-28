// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

constract FallBackExample {
    uint256 public result;

    recive() external payable {
        result = 1;
    }

    fallback() externa; payable {
        result = 2;
    }
}