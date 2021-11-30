import { Grid, GridItem } from '@chakra-ui/react';

const Mint = () => {

  return ( 
    <div className='mint-container'>
      <div className='mint-grid'>
        <Grid
          h='1000px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem> 

          </GridItem>


        </Grid>
      </div>
    </div>
  
  )
}

export default Mint;