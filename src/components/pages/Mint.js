import {
    Grid,
    GridItem,
    Center,
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Button,
    Image,
} from '@chakra-ui/react';

import './Mint.css';
import Sidebar from '../mini/Sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useNewMoralisObject,
    useMoralisFile,
    useMoralisCloudFunction,
    useWeb3ExecuteFunction,
    useNFTBalances,
} from 'react-moralis';
import contractAbi from '../../abis/ZimCollectables';
import Web3 from 'web3';

const Mint = () => {
    const [contract, setContract] = useState(null);
    const [address, setAddress] = useState(null);
    const [NFTs, setNFTs] = useState([]);
    const [NFTsFetched, setNFTsFetched] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const { user, Moralis, enableWeb3, isWeb3Enabled,setUserData } = useMoralis();
    const { isUploading, moralisFile, saveFile } = useMoralisFile();
    const { getNFTBalances, data, isLoading, isFetching } = useNFTBalances();
    const contractAddress = '0x56F105b7cdC3A0177cf79b2f67C8BA9f6BadE97f';// from EP ganache 

    const [newPoints, setNewPoints] = useState(user.attributes.points)

    async function getAll() {
        const resultAPI = await axios.get('https://zims-nft-api.herokuapp.com/');
        setNFTs(resultAPI.data);
        setNFTsFetched(true);
    }

    // const loadWeb3 = async() => {
    //     if (window.ethereum) {
    //         window.web3 = new Web3(window.ethereum);
    //         await window.ethereum.enable();
    //     } else if (window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider);
    //     } else {
    //         window.alert(
    //             'Non-ethereum browswer detected. You should consider trying Metamask!'
    //         );
    //     }
    // };

    // async function loadBlockchainData() {
    //     setContract(new window.web3.eth.Contract(newAbi, contractAddress));
    //     setAddress(user.attributes.ethAddress);
    // }


    useEffect(() => {
        enableWeb3();
        if (isWeb3Enabled) {
            console.log('web3 is enabled');
        }
        getNFTBalances({ params: { chain: '0x1' } });
    }, []);
    // console.log(JSON.stringify(data, null, 2));

    useEffect(() => {
        getAll();
    }, []);

    useEffect(()=>{
      setUserData({ points: newPoints });
    },[newPoints])

   

    const ABI = contractAbi.abi[20];

    const abi = [{
        inputs: [{
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'uri',
                type: 'string',
            },
        ],
        name: 'mintToken',
        outputs: [{
            internalType: 'uint256',
            name: '',
            type: 'uint256',
        }, ],
        stateMutability: 'nonpayable',
        type: 'function',
    }, ];

    // const newAbi = [{
    //     inputs: [{
    //         internalType: 'string',
    //         name: 'tokenURI',
    //         type: 'string',
    //     }, ],
    //     name: 'mintToken',
    //     outputs: [],
    //     stateMutability: 'nonpayable',
    //     type: 'function',
    // }, ];

    const MintNFT = async nft => {
    
        const options = {
            contractAddress: contractAddress,
            functionName: 'mintToken',
            abi: abi,
            params: {
                to: user.attributes.ethAddress,
                uri: JSON.stringify(nft),
            },
        };
        const receipt = await Moralis.executeFunction(options);
        console.log(receipt, "***RECEIPT");

        const nftPoints = nft.price;
        console.log(newPoints-parseInt(nftPoints),'Line 121')
        setNewPoints(prev=>prev-parseInt(nftPoints))
    };

    // console.log(ABI);

    return ( 
    <div className = 'mint-container' >
            <div className = 'mint-grid' >
            <Grid h = '1500px'
            templateRows = 'repeat(11, 1fr)'
            templateColumns = 'repeat(5, 1fr)'
            gap = { 4 } > 
  { /* ROW 1 */ } 
            <GridItem rowSpan = { 11 }
            colSpan = { 1 }
            bg = 'gray' >
            <div>
            <Sidebar style = {
                { width: '15px' }
            }
            /> 
            </div> 
            </GridItem> 
            <GridItem marginTop = { '50px' }
            rowSpan = { 1 }
            colSpan = { 4 }
            bg = 'none'
            borderRadius = { '30px' } >
            <Center >
            <div className = 'nft-title' > Mint New NFTs </div> 
            </Center> 
            </GridItem> 
            
{/* { / * ROW 2 * / }  */}
          {
            NFTsFetched &&
            NFTs.sort((a, b) => parseInt(a.price) - parseInt(b.price)).map(nft => {
                return ( <GridItem rowSpan = { 1 }
                    colSpan = { 1 }
                    bg = 'none'
                    borderRadius = { '30px' } >
                    <Center >
                    <Box role = { 'group' }
                    p = { 6 }
                    maxW = { '300px' }
                    w = { 'full' }
                    bg = { 'gray.800' }
                    boxShadow = { '2xl' }
                    rounded = { 'lg' }
                    pos = { 'relative' }
                    zIndex = { 1 } >
                    <Box rounded = { 'lg' }
                    mt = {-12 }
                    pos = { 'relative' }
                    height = { '180px' }
                    _after = {
                        {
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${nft.photo})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }
                    }
                    _groupHover = {
                        {
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }
                    } >
                    < Image rounded = { 'lg' }
                    height = { 125 }
                    width = { 100 }
                    objectFit = { 'contain' }
                    src = { nft.photo }
                    marginTop = { '40px' }
                    marginLeft = { '30px' }
                    /> 
                    
                    </Box > <Stack pt = { 10 }
                    align = { 'center' } >
                    <Text color = { 'gray.500' }
                    fontSize = { 'sm' }
                    textTransform = { 'uppercase' } >
                    NFT# { nft.id } </Text> 
                    <Heading fontSize = { '2xl' }
                    fontFamily = { 'body' }
                    fontWeight = { 500 } >

                    { nft.title } </Heading> < Stack direction = { 'row' }
                    align = { 'center' } >
                    <Text fontWeight = { 600 }
                    fontSize = { 'xl' } >

                    { `${parseFloat(nft.price).toLocaleString(
                              'en-US'
                            )} Points` } 
                    </Text> 
                    </Stack > 
                    <Stack >
                    <Button my = { 4 }
                    w = '100%'
                    colorScheme = 'teal'
                    color = 'white'
                    isDisabled = { parseFloat(nft.price) > user.attributes.points }
                    // onClick={() => console.log(nft)}
                    onClick = {
                        () => {
                            return MintNFT(nft);
                        }
                    } >
                    Mint </Button> 
                    </Stack > 
                    </Stack> 
                    </Box > 
                    </Center> </GridItem >
                );
            })
        } 
        </Grid> 
        </div > 
        </div>
);
};

export default Mint;