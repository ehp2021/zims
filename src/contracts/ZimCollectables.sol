// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10 <0.9.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract ZimCollectables is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
		
    constructor() ERC721("ZimCollectables", "ZCOL") {}
    function mintToken(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}



//ayaan code from slack
// contract ZimCollectables is ERC721URIStorage {
// 	using Counters for Counters.Counter;
// 	Counters.Counter private _tokenIds;
// 	constructor() ERC721("ZimCollectables", "ZCOL") {}
	
//     struct Item {
// 		uint256 id;
// 		address creator;
// 		string uri;
// 		}

// 	mapping (uint256 => Item) public Items;

// 	function mintToken(string memory uri) public returns (uint256) {
// 			_tokenIds.increment();
// 			uint256 newItemId = _tokenIds.current();
// 			_safeMint(msg.sender, newItemId);
// 			Items[newItemId] = Item(newItemId, msg.sender,uri);
// 			return newItemId;
// 	}
// 	function tokenURI(uint256 tokenId) public view override returns (string memory){
// 	require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
// 	return Items[tokenId].uri;
// 	}
// }

/*       NEW CONTRACT       */

// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
// import '@openzeppelin/contracts/utils/Counters.sol';
// import '@openzeppelin/contracts/access/Ownable.sol';

// contract ZimCollectables is ERC721URIStorage {
//   using Counters for Counters.Counter;
//   Counters.Counter private _tokenIds;

//   constructor() ERC721('ZimCollectables', 'ZCOL') {}

//   function mintToken(address recipient, string memory tokenURI) public returns (uint256) {
//     _tokenIds.increment();
//     uint256 newItemId = _tokenIds.current();
//     _safeMint(recipient, newItemId);
//     _setTokenURI(newItemId, tokenURI);
//     return newItemId;
//   }
// }
/*       NEW CONTRACT       */

// pragma solidity ^0.8.0;

// import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
// import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
// import '@openzeppelin/contracts/access/Ownable.sol';

// contract CoinracerNFT is ERC721Enumerable, Ownable {
//   uint256 public ZCOL;
//uint256 private minBNB;
//uint256 private minCRACE;
//uint256 public mintSupply;
//uint256 maxMintSupply = 5000;
// mapping(uint256 => string) public _data;
// mapping(address => uint256) private _mintAmount;

//IERC20 crace;

// constructor(IERC721 zcol)
//   ERC721('ZimCollectables', 'ZCOL')
//   //uint256 _minBNB,
//   //uint256 _minCRACE
// {
//   ZCOL = 0;
//   //crace = _crace;
//   //minBNB = _minBNB;
//   //minCRACE = _minCRACE;
// }

// function updateMinBNB(uint256 _minBNB) external onlyOwner {
//   minBNB = _minBNB;
// }

// function updateMinCRACE(uint256 _minCRACE) external onlyOwner {
//   minCRACE = _minCRACE;
// }

//function mint(
//uint256 amount,
//uint256 craceValue,
//string[] memory data
//) external payable {
//require(amount > 0 && _mintAmount[msg.sender] + amount <= 5, 'NFT amount');
//require(mintSupply + amount <= maxMintSupply, 'Mint Supply');
//require(msg.value >= minBNB * amount, 'Under BNB limit');
//require(craceValue >= minCRACE * amount, 'Under CRACE limit');

// crace.transferFrom(msg.sender, address(this), craceValue);
// _mintAmount[msg.sender] += amount;
// mintSupply += amount;

//   for (uint256 i = 0; i < amount; i = i + 1) {
//     ZCOL = ZCOL + 1;
//     _safeMint(msg.sender, ZCOL);
//     _data[ZCOL] = data[i];
//   }
// }

// function mintZCol(address addr, string memory data) public {
//   ZCOL = ZCOL + 1;
//   _safeMint(addr, ZCOL);
//   _data[ZCOL] = data;
// }

// function mintByOwner(address addr, string memory data) external onlyOwner {
//   ZCOL = ZCOL + 1;
//   _safeMint(addr, ZCOL);
//   _data[ZCOL] = data;
// }

// function tokenURI(uint256 tokenId) public view override returns (string memory) {
//   require(_exists(tokenId), 'ERC721Metadata: URI query for nonexistent token');
//   return _data[tokenId];
// }
// }
