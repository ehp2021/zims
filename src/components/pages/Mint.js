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
  Image } from '@chakra-ui/react';
import './Mint.css';
import Sidebar from '../mini/Sidebar';
import axios from 'axios';
import {useState,useEffect} from 'react'
import{useMoralis, useMoralisFile, useWeb3Transfer} from 'react-moralis'



const Mint = () => {
  const [NFTs,setNFTs]=useState([]);
  const [NFTsFetched,setNFTsFetched] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, web3, Moralis } = useMoralis();
  const {
    error,
    isUploading,
    moralisFile,
    saveFile,
  } = useMoralisFile();

  
  async function getAll () {
    const result = await axios.get('https://zims-nft-api.herokuapp.com/')
    setNFTs(result.data);
    setNFTsFetched(true);
  }

  useEffect(()=>{
    getAll() 
  },[])

  // console.log(NFTs ? NFTs.data.price : "price")
  function disableButton(price) {
    if (price !== null) {
      console.log(price,user.attributes.points, "line 39")
      setIsDisabled(false)
      return parseFloat(price) > user.attributes.points 
    } else {
      return true;
    }
  }
  
  const clickHandler =(id)=>{
    console.log(id)
  }

  const mint = (title, photo) => {
    const metadata = {title: title}
    const metadataURI = saveFile(photo, {
      type: 'image/jpeg',
      metadata,
      saveIPFS: true,
    });
   mintNFT(metadataURI);
  }

  const mintNFT = async _uri => {
    const encodedFunction = web3.eth.abi.encodeFunctionCall(
      {
        name: 'mintToken',
        type: 'function',
        inputs: [
          {
            type: 'string',
            name: 'tokenURI',
          },
        ],
      },
      [_uri]
    );

    const Transfer = () => {
      const {fetch, error, isFetching} = useWeb3Transfer({
        amount: 1,
        receiver: user.attributes.ethAddress,
        type: "erc721",
        contractAddress: "0xa31426c301D34A7f3Bd70009969E721e0be074a3",
      });
    }

    // const transactionParameters = {
    //   to: user.attributes.ethAddress, //uset adress
    //   from: '0xa31426c301D34A7f3Bd70009969E721e0be074a3', // contract adress
    //   data: encodedFunction,
    // };


    // const txt = await ethereum.request({
    //   method: 'eth_sendTransaction',
    //   params: [transactionParameters],
    // });
    // console.log(txt)
    return Transfer;
  };

  return ( 
    <div className='mint-container'>
      <div className='mint-grid'>
        <Grid
          h='1500px'
          templateRows='repeat(11, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          // padding={'20px'}
          // background={'}
        >

          {/* ROW 1 */}
          <GridItem rowSpan={11} colSpan={1} bg='gray' > 
            <div><Sidebar style={{ width: '15px' }} /></div>
          </GridItem>
          <GridItem marginTop={'50px'} rowSpan={1} colSpan={4} bg='none' borderRadius={'30px'}> 
              <Center><div className="nft-title">Mint New NFTs</div></Center>
          </GridItem>

          

{/* ROW 2 */}
      {/* ROW 2, item 1 */}
      {NFTsFetched && NFTs.sort((a,b)=>parseInt(a.price)-parseInt(b.price)).map(nft=>{
        return(
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
            <Center>
              <Box
                role={'group'}
                p={6}
                maxW={'300px'}
                w={'full'}
                bg={'gray.800'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'180px'}
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
                    rounded={'lg'}
                    height={125}
                    width={100}
                    objectFit={'contain'}
                    src={nft.photo}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #{nft.id}
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
                      // onClick={()=> console.log(nft.title, nft.photo)}
                      onClick={()=> mint(nft.title, nft.photo)}
                    >Mint</Button>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
        )
      })}
          

        </Grid>
      </div>
    </div>
  
  )
}

export default Mint;