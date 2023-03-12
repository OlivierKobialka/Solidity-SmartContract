// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SafeMathTester {
    uint8 public bigNumber = 255; // checked

    //! resets to 0
    function add() public {
        unchecked {
            bigNumber = bigNumber + 1;
        }
    }
}


/**
 * checked keyword is used to check for overflows and underflows
 * checked and unchecked is making gas cost cheaper 
 */