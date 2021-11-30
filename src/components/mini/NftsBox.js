import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  const IMAGE =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fcars-gallery-149x%2FFERRARI-488-GTB-thumbnail-5428_4.jpg&f=1&nofb=1';
// const IMAGE2 =
//   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.yachtcharterfleet.com%2Fcharter-MOONRAKER%2FMOONRAKER-17.jpg%3Fimage_id%3D70412%26k%3D32cd%26w%3D400%26h%3D400%26q%3D75%26o%3Diwc&f=1&nofb=1';



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
                    NFT #1
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Ferrari
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      150,760 Points
                    </Text>
                  </Stack>
                </Stack>
              </Box>


        </div>

    )

}
export default NftsBox;