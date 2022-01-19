import React from 'react'
//import CandidateFilters from './candidateFilters.jsx'
import TableCandidate from './tableCandidate.jsx'
import { Box, Grid, TextField, InputAdornment,  Typography} from '@material-ui/core'
import Shape from './Shape.png'

/* const useStyles = ((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  })); */

const Candidates = () => {
  /*  const classes = useStyles();
   const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  }); 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }; */
    return(
        <>
            <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                <Grid item gl={12}>
                  <Box justifyContent="flex-start" textAlign="left">
                    <Typography gl={{ fontSize: '28px'}}  variant="h3" gutterBottom >Candidates</Typography>
                  </Box>
                  <Box justifyContent="flex-end">
                    <TextField
                      placeholder='Find a Candidate'
                      id="filled-start-adornment"
                      //className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><img src={Shape} alt="search" /></InputAdornment>,
                      }}
                      variant="filled"
                    />
                  </Box>
                </Grid>
                <Grid item>
                    <TableCandidate/>
                </Grid>
            </Grid> 
        </>
    )
}

export default Candidates