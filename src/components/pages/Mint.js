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

//yacht
const IMAGE ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.yachtcharterfleet.com%2Fcharter-MOONRAKER%2FMOONRAKER-17.jpg%3Fimage_id%3D70412%26k%3D32cd%26w%3D400%26h%3D400%26q%3D75%26o%3Diwc&f=1&nofb=1';

//ferrari
const IMAGE2 ='';


const Mint = () => {

  return ( 
    <div className='mint-container'>
      <div className='mint-grid'>
        <Grid
          h='1500px'
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={4}
          padding={'20px'}
          background={'radial-gradient(600px at 50% 50% , #fff 20%, #000 100%)'}
        >

          {/* ROW 1 */}
          <GridItem marginTop={'50px'} rowSpan={1} colSpan={4} bg='none' borderRadius={'30px'}> 
              <Center><div className="nft-title">Mint New NFTs</div></Center>
          </GridItem>

{/* ROW 2 */}
      {/* ROW 2, item 1 */}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
            <Center>
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
                    Yacht
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      650,000 Points
                    </Text>
                  </Stack>
                  <Stack>
                  <Button
                      my={4}
                      w='100%'
                      colorScheme='teal'
                      color='white'
                    >Mint</Button>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>

    {/* ROW 2, item 2 */}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
          <Center>
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
                    Yacht
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      650,000 Points
                    </Text>
                  </Stack>
                  <Stack>
                  <Button
                      my={4}
                      w='100%'
                      colorScheme='teal'
                      color='white'
                    >Mint</Button>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
    
    {/* ROW 2, item 3*/}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

    {/* ROW 2, item 4 */}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

{/* ROW 3 */}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          {/* ROW 4 */}
          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
              <div>hi</div>
          </GridItem>


        </Grid>
      </div>
    </div>
  
  )
}

export default Mint;