import React from 'react'
import { MenuItem, FormControl, Select, Grid} from '@mui/material/'
import iconFilter from './img/iconFilter.svg'

const CandidateFilters = () => {
    const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
    return(
        <Grid container 
            spacing={1} 
            direction='column' 
            justifyContent='center' 
            alignItems='flex-start'>
            <Grid item md={12}>
                <img src={iconFilter} alt='iconFilter' />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={status}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value=''>
                            <em>All Jobs</em>
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={status}
                        onChange={handleChange}
                        displayEmpty
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
    )
}
export default CandidateFilters