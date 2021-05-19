// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./base64.sol";

contract  base64 {

    constructor() {
        // nothing
    }

    function encode(string memory _str) public pure returns (string memory) {
        return Base64.encode(_str);
    }

    function decode(string memory _str) public pure returns (string memory) {
        return Base64.decode(_str);
    }

}