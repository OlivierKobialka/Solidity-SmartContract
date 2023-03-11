// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    bool XX = true;
    uint256 public storedData = 1;
    address owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    string public name = "SimpleStorage";
    int256 aXX = -1;
    uint256[] public numbers = [1, 2, 3];
    bytes32 public hash =
        0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef;

    function store(uint256 _storedData) public {
        storedData = _storedData;
        uint256 testVar = 5;
    }

    function retrive() public view returns (uint256) {
        return storedData;
    }

    function add() public pure returns (uint256) {
        return (1 + 1);
    }

    // People public person = People({storedData: 1, name: "John"}); Struct initialization with named parameters
    People[] public people; // Array of structs, People[] => dynamic array, ex. people[0].name = "John"

    struct People {
        uint256 storedData;
        string name;
    }

    function addPerson(string memory _name, uint256 _storedData) public {
        // Pushing a new struct to the array
        // people.push(People(_storedData, _name));
        People memory newPerson = People({
            storedData: _storedData,
            name: _name
        });
        people.push(newPerson);
        // or
        people.push(People(_storedData, _name));
    }
}
