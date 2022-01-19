import React from 'react'
import { Box, Typography } from '@mui/material/'
import CardOpportunities from './CardOpportunities'
import icoUser from './img/icoData.svg'
import icoWeb from './img/icoWeb.svg'
import icoBlockchain from './img/icoBlockchain.svg'
import icoTitle from './img/title.svg'

const productBlockchain = [
  {
    id: '1',
    text: 'Product co-creation & blockchain',
    icon: icoBlockchain,
  },
  {
    id: '2',
    text: 'Product Quality Automation',
    icon: icoWeb,
  },
  {
    id: '3',
    text: 'Dedicated Product Team',
    icon: icoUser,
  },
];
const JobOpportunities = () => {
  return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        color="text.primary"
        bgcolor="#F7FBFE"
        height={650}
        spacing={2}
        marginTop={10}
      >
        <img src={icoTitle} alt="ico-Title" />
        <Typography variant="p" m={4}>
            Great products are built block by block. 57BLOCKS is redefining how
            products are built, applying a combination of technology and process
            improvements to deliver a new kind of distributed development
            experience.
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "30px" }}>We got three main products</Typography> 
        {productBlockchain.map((product) => (
          <CardOpportunities key={product.id} item={product} />
        ))}
      </Box>
  )
}

export default JobOpportunities
