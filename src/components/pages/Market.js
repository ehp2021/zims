import './Market.css';
import Image from '../../assets/images/market.png'
import Sidebar from '../mini/Sidebar';
import {Flex, Text} from '@chakra-ui/react'

const Market = () => {
    return ( 
      <>
      <Sidebar isMobile={false} />
      <Flex > 
       <Flex
        m='0 auto'
        w={{ base: 'none', xl: '80%' }}
        mt='6rem'
        mr={{ base: 'none', xl: '1rem', '2xl': '-8rem' }}
         > 
      <div className="market-right">  
        <div className="market-title">Marketplace</div>
        
        <img src={Image} height='500px' alt="Snow" className="img-fade" />
        
        <Text className="coming-soon" transform={{base: 'translate(-50%, -50%)', xl:'translate(-30%, -50%)' }}>
          COMING SOON
        </Text>
      </div>
     </Flex>
    </Flex>
    </>
    )
}
export default Market;