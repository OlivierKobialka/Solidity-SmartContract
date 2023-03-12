// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

// Inherit from SimpleStorage - Inheritance
contract ExtraStorage is SimpleStorage {
    // + 5
    // ovveride
    // virtual override
    function store(uint256 _favoriteNumber) public override {
        favoriteNumber = _favoriteNumber + 5;
    }
}
