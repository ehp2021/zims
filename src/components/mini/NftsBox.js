import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  const IMAGE =
  'https://images.pexels.com/photos/5126057/pexels-photo-5126057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';


const NftsBox = () => {

    return ( 
        <div > 
            <Box
                role={'group'}
                p={6}
                maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
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
                    backgroundImage: `url(${IMAGE})`,
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
                    src={IMAGE}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    My NFT #1
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Ferrari
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      150,000 Points
                    </Text>
                  </Stack>
                </Stack>
              </Box>


        </div>

    )

}
export default NftsBox;