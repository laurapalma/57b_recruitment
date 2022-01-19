import React from 'react'
import TableCandidate from './tableCandidate.jsx'
import { Box, Grid, TextField, InputAdornment,  Typography} from '@mui/material/'
import Shape from './img/Shape.svg'

const Candidates = () => {
  return(
    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
      <Grid item gl={12}>
        <Box justifyContent="flex-start" textAlign="left">
          <Typography gl={{ fontSize: '28px'}}  variant="h3" gutterBottom >Candidates</Typography>
        </Box>
        <Box justifyContent="flex-end">
          <TextField
            placeholder='Find a Candidate'
            id="filled-start-adornment"
            InputProps={{
              startAdornment: <InputAdornment position="start"><img src={Shape} alt="search" /></InputAdornment>,
            }}
            variant="filled"/>
        </Box>
      </Grid>
      <Grid item>
        <TableCandidate/>
      </Grid>
    </Grid> 
  )
}

export default Candidates