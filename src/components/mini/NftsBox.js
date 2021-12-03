import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useMoralis, useMoralisQuery } from 'react-moralis';

const IMAGE =
'https://images.pexels.com/photos/5126057/pexels-photo-5126057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';


const NftsBox = () => {
  const { data, error, isLoading } = useMoralisQuery('mintedNFTs');
  const {user} = useMoralis()
console.log(data);

  return ( 
    <>
    {data !==null && data.filter(data => (data.attributes.user.id === user.id)).map((nft,i)=>{
      return(
        <div className="minted-nft"> 
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
            marginRight={'40px'} 
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
                backgroundImage: `url(${nft.attributes.photo})`,
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
                objectFit={'cover'}
                src={nft.attributes.photo}
                marginTop={'40px'}
                marginLeft={'30px'}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {`NFT #: ${i+1}`}
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {nft.attributes.title}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={600} fontSize={'xl'}>
                  {parseFloat(nft.attributes.initialPrice).toLocaleString('en-US')} Points
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Initial Price
              </Text>
              </Stack>
            </Stack>
          </Box>
        </div>
      )}
      )}
     
    </>
  )

}
export default NftsBox;