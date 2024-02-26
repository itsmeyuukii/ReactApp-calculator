import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './form.css';

const Form = () => {
  return (
    <container>
    <h1>
        My Diary
    </h1>
    <form>
        <Box>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
        </Box>
    </form>
    
    


    </container>
    

    
  )
}

export default Form
