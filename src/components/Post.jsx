import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Stack } from '@mui/material';

export default function Post({name, email,index, deletePostProp, img}) {
  const deletePost = ()=>{
    
    deletePostProp(index)
  }
  return (
    <div className='data_val cd' >
              <img src={img} alt="1"  className='postImg'/>
              <h4>{name}</h4>
              <h4>{email}</h4>
              <Stack>

              <Button variant='contained' color='error' onClick={deletePost}>
              <DeleteIcon />
              </Button>
              </Stack>
            </div>
  )
}
