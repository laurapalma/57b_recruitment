import React from 'react'
import {Button, Modal} from '@mui/material/'

const ModalPool = () => {
    return(
        <>
        <Modal>
            <input 
                name='rejectionDescription' 
                type='text' 
                placeholder='Add The Reasons Why The Candidate Wont Continue The Process' 
                id='rejectionDescription'>
            </input>
            <Button variant='contained' color='primary' size='small'>Save</Button>
          </Modal>       
        </>
    )
}

export default ModalPool