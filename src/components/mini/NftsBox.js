import { Box, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { useMoralis, useMoralisQuery } from 'react-moralis';



const NftsBox = () => {
  const { data } = useMoralisQuery('mintedNFTs');
  const { user } = useMoralis();


  return (
    <>
      {data !== null &&
        data
          .filter(data => data.attributes.user.id === user.id)
          .map((nft, i) => {
            return (
              <Flex textAlign='center'>
                <Flex
                  m='1rem'
                  w='15rem'
                  h='23rem'
                  p={6}
                  bg='gray.800'
                  pos='relative'
                  zIndex={1}
                  borderRadius='10px'
                  direction='column'
                  justify='space-around'
                  transition='all 0.2s ease'
                  _hover={{ transform: 'scale(1.02) translateY(-4px)' }}
                >
                  <Box
                    mt={-12}
                    pos='relative'
                    height='180px'
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: '100%',
                      h: '100%',
                      pos: 'absolute',
                      top: 0,
                      left: 0,
                      transform: 'translateY(15%)',
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
                      height='200px'
                      width='170px'
                      objectFit={'contain'}
                      m='0 auto'
                      marginTop='2rem'
                      src={nft.attributes.photo}
                    />
                  </Box>
                  <Stack pt={6} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      {`NFT #: ${i + 1}`}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                      {nft.attributes.title}
                    </Heading>
                    <Stack direction={'row'} align='center' spacing={2}>
                      <Text fontWeight={600} fontSize={'xl'}>
                        {parseFloat(nft.attributes.initialPrice).toLocaleString('en-US')}{' '}
                        Points
                      </Text>
                      <Text
                        color={'gray.500'}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                      >
                        Initial Price
                      </Text>
                    </Stack>
                  </Stack>
                </Flex>
              </Flex>
            );
          })}
    </>
  );
};
export default NftsBox;
