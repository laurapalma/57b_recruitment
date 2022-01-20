import React from 'react';
import Button from '@mui/material/Button';

const UserButtons = ({textContent}) =>{
    return (
        <Button sx={{
            borderRadius: 20, 
            paddingX: 5,
            textTransform:'capitalize', 
            marginX: 5}} 
            variant='outlined' 
            color='primary'
        >
            {textContent}
        </Button>
    )
}

export default UserButtons