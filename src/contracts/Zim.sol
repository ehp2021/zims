// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Zim is ERC721 {
    constructor() ERC721("Zim", "ZIM") {
    }
}