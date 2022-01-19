import React from 'react'
// import ModalPool from './modalPool.jsx'
import {makeStyles, MenuItem, FormControl, Select, Grid} from '@mui/material/'
import iconFilter from './img/iconFilter.png'

/*  <Grid item>
        <ModalPool/>
    </Grid> */

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CandidateFilters = () => {
    const classes = useStyles();
    const [status, setStatus] = React.useState('');
  
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return(
        <>
            <Grid container 
                spacing={1} 
                direction='column' 
                justifyContent='center' 
                alignItems='flex-start'>
                <Grid item md={12}>
                    <img src={iconFilter} alt='iconFilter' />
                    <FormControl className={classes.formControl}>
                        <Select
                            value={status}
                            onChange={handleChange}
                            displayEmpty
                            className={classes.selectEmpty}                            
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value='' disabled>All Jobs</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={status}
                            onChange={handleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value='' disabled>All Status</MenuItem>
                            <MenuItem value={1}>Applied</MenuItem>
                            <MenuItem value={2}>Interview</MenuItem>
                            <MenuItem value={3}>Tech Test</MenuItem>
                            <MenuItem value={4}>Interview Management</MenuItem>
                            <MenuItem value={5}>Pool</MenuItem>
                            <MenuItem value={6}>Hired</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}
export default CandidateFilters