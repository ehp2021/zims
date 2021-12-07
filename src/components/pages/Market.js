import './Market.css';
import Image from '../../assets/images/market.png'
import Sidebar from '../mini/Sidebar';
import {Flex, Text, Box} from '@chakra-ui/react'

const Market = () => {
    return ( 
      <Box overflow='hidden' h='100vh' >
      <Sidebar isMobile={false} />
      <Flex > 
       <Flex
        m='0 auto'
        w={{ base: 'none', xl: '70%' }}
        mt='6rem'
        mr={{ base: 'none', xl: '1rem', '2xl': '-4rem' }}

         > 
      <div className="market-right">  
        <div className="market-title">Marketplace</div>
        
        <img src={Image} alt="Snow" className="img-fade" />
        
        <Text className="coming-soon" transform={{base: 'translate(-50%, -50%)', xl:'translate(-50%, -50%)' }}>
          COMING SOON
        </Text>
      </div>
     </Flex>
    </Flex>
    </Box>
    )
}
export default Market;