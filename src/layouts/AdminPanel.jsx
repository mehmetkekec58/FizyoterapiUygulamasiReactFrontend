import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AdminPanel() {
  return (
    <div>    <Box  sx={{ '& > :not(style)': { m: 1 } }}>

    <Fab size="medium" color="primary" aria-label="Ekle">
      <AddIcon />
    </Fab>
  
  </Box></div>
  )
}
