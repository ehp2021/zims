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

//ROW 2
//castle
const IMAGE0 ='https://images.pexels.com/photos/2832085/pexels-photo-2832085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//yacht 
const IMAGE ='https://images.pexels.com/photos/42091/pexels-photo-42091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//ferrari
const IMAGE2 ='https://images.pexels.com/photos/5126057/pexels-photo-5126057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// aston martin
const IMAGE3 ='https://images.pexels.com/photos/7287363/pexels-photo-7287363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

//ROW 3
// house
const IMAGE4 ='https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// car
const IMAGE5 ='https://images.pexels.com/photos/5085643/pexels-photo-5085643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// motorcycle
const IMAGE6 ='https://images.pexels.com/photos/2798288/pexels-photo-2798288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// dog
const IMAGE7 ='https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';



const Mint = () => {

  return ( 
    <div className='mint-container'>
      <div className='mint-grid'>
        <Grid
          h='1500px'
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          // padding={'20px'}
          background={'radial-gradient(600px at 50% 50% , #fff 20%, #000 100%)'}
        >

          {/* ROW 1 */}
          <GridItem rowSpan={4} colSpan={1} bg='gray' > 
            <div><Sidebar style={{ width: '15px' }} /></div>
          </GridItem>
          <GridItem marginTop={'50px'} rowSpan={1} colSpan={4} bg='none' borderRadius={'30px'}> 
              <Center><div className="nft-title">Mint New NFTs</div></Center>
          </GridItem>

          

{/* ROW 2 */}
      {/* ROW 2, item 1 */}
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE0})`,
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
                    src={IMAGE0}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #1
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Castle
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      2,750,000 Points
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
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    NFT #2
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
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE2})`,
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
                    src={IMAGE2}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #3
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Ferrari
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      150,000 Points
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

    {/* ROW 2, item 4 */}
        <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE3})`,
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
                    src={IMAGE3}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #4
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Aston Martin
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      100,000 Points
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

{/* ROW 3 */}

    {/* ROW 3, item 1 */}
        <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE4})`,
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
                    src={IMAGE4}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #5
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    House
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      75,000 Points
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

    {/* ROW 3, item 2 */}
        <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE5})`,
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
                    src={IMAGE5}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #6
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Car
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      20,000 Points
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

{/* ROW 3, item 3 */}
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE6})`,
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
                    src={IMAGE6}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #7
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Motorcycle
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      10,000 Points
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

{/* ROW 3, item 4 */}
          <GridItem rowSpan={1} colSpan={1} bg='none' borderRadius={'30px'}> 
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
                    backgroundImage: `url(${IMAGE7})`,
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
                    src={IMAGE7}
                    marginTop={'40px'}
                    marginLeft={'30px'}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    NFT #8
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Dog
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={600} fontSize={'xl'}>
                      5,000 Points
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

          {/* ROW 4 */}
          {/* <GridItem rowSpan={1} colSpan={1} bg='gray' borderRadius={'30px'}> 
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
          </GridItem> */}


        </Grid>
      </div>
    </div>
  
  )
}

export default Mint;