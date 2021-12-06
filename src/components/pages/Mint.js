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
  Flex,
  SimpleGrid,
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
  const { user, Moralis, enableWeb3, isWeb3Enabled, setUserData } = useMoralis();
  const { isUploading, moralisFile, saveFile } = useMoralisFile();
  const { getNFTBalances, data, isLoading, isFetching } = useNFTBalances();
  const contractAddress = '0xF5E8eB2E6B792faD9E021c149ac26f22f4DBc566';

  const [newPoints, setNewPoints] = useState(user.attributes.points);

  const MintedNFTs = Moralis.Object.extend('mintedNFTs');
  const minted = new MintedNFTs();

  async function ItemNFT(nft) {
    minted.set('photo', nft.photo);
    minted.set('title', nft.title);
    minted.set('initialPrice', nft.price);
    minted.set('category', nft.category);
    minted.set('user', user);
    minted.set('username', user.attributes.username);
    await minted.save();
  }

  async function getAll() {
    const resultAPI = await axios.get('https://zims-nft-api.herokuapp.com/');
    setNFTs(resultAPI.data);
    setNFTsFetched(true);
  }

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

  useEffect(() => {
    setUserData({ points: newPoints });
  }, [newPoints]);

  const ABI = contractAbi.abi[20];

  const abi = [
    {
      inputs: [
        {
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
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

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
    console.log(receipt, '***RECEIPT');

    const nftPoints = nft.price;
    // console.log(newPoints - parseInt(nftPoints), 'Line 121');
    ItemNFT(nft);
    setNewPoints(prev => prev - parseInt(nftPoints));
    alert(`You have minted ${nft.title}`);
  };

  // console.log(ABI);

  return (
    <>
    <Sidebar isMobile={false} />
    <Flex overflowX='hidden'>
      <Flex
        m='0 auto'
        w={{ base: 'none', xl: '70%' }}
        mt='6rem'
        mr={{ base: 'none', xl: '0', '2xl': '-8rem' }}
      >
        <Flex direction='column' align='center' justify='center' textAlign='center'>
          <Text
            className='nft-title'
            fontSize={{ base: '2rem', sm: '3rem', md: '3.5rem' }}
          >
            Mint New NFTs
          </Text>
          <SimpleGrid columns={{ base: '1', sm: '2', md: '3' }} gap={4}>
            {NFTsFetched &&
              NFTs.sort((a, b) => parseInt(a.price) - parseInt(b.price)).map(nft => {
                return (
                  <>
                    <Box
                      p={6}
                      bg='gray.800'
                      boxShadow='2xl'
                      pos='relative'
                      zIndex={1}
                      rounded='lg'
                    >
                      <Box
                        mt={-12}
                        pos='relative'
                        height='180px'
                        _after={{
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
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(20px)',
                          },
                        }}
                      >
                        <Image
                          height='200px'
                          width='170px'
                          objectFit={'contain'}
                          src={nft.photo}
                          m='0 auto'
                          marginTop='2rem'
                        />
                      </Box>
                      <Stack pt={10} align={'center'}>
                        <Text
                          color={'gray.500'}
                          fontSize={'sm'}
                          textTransform={'uppercase'}
                        >
                          NFT# {nft.id}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                          {nft.title}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                          <Text fontWeight={600} fontSize={'xl'}>
                            {`${parseFloat(nft.price).toLocaleString('en-US')} Points`}
                          </Text>
                        </Stack>
                        <Stack>
                          <Button
                            my={4}
                            w='100%'
                            colorScheme='teal'
                            color='white'
                            isDisabled={parseFloat(nft.price) > user.attributes.points}
                            onClick={() => {
                              return MintNFT(nft);
                            }}
                          >
                            Mint
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </>
                );
              })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  </>
  );
};

export default Mint;
