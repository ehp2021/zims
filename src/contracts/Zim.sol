// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10 <0.9.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

// import "github.com/openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Zim is ERC721 {
    constructor() ERC721("Zim", "ZIM") {
    }
}