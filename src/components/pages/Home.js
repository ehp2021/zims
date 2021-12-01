import Carousel from '../mini/Carousel';
import Sidebar from '../mini/Sidebar';
import { Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
    <Flex background={'radial-gradient(600px at 50% 50% , #cccccc 20%, #191C27 100%)'}>
      <Flex direction='row'>
        <Sidebar style={{ width: '20px' }} />
      </Flex>
        <Flex m='0 auto' mt={4}>
          <Carousel />
        </Flex>
    </Flex>
    </>
  );
};

export default Home;
