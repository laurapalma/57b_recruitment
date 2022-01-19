import React from 'react';
import { Card, CardContent, Typography} from '@mui/material/'

const CardOpportunities = ({item}) => {
  return (
    <>  
      <Card
        sx={{    
          display:'flex',          
          width: {xs:343, md:340},
          height: { xs: 104, md: 172},
          justifyContent:{xs:'center',  md:'center'},
          alignItems: {xs:'center', md:'center'}, 
          flexDirection: {xs:'column', md:'column'}, 
          marginTop:3             
        }}   
        spacing={8}
        elevation={3}
        >
        <CardContent 
          sx={{
          display: 'flex',
          flexDirection: {xs:'row', md:'column'}, 
          alignItems: {xs:'center', md:'center'},      
          }}               
        >
          <img src={item.icon} alt='ico-Blockchain' />
          <Typography sx={{ fontSize: 18}} variant='p'>{item.text}</Typography>
        </CardContent>
      </Card> 
    </>
  )
}

export default CardOpportunities;
