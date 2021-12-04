import Carousel from '../mini/Carousel';
import Sidebar from '../mini/Sidebar';
import { Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Sidebar isMobile={false} />
      <Flex>
        {/* <Flex background={'radial-gradient(600px at 50% 50% , #cccccc 20%, #191C27 100%)'}> */}
        <Flex m='0 auto' w={{ base: 'none', xl: '25%' }} mt='6rem'>
          <Carousel />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
