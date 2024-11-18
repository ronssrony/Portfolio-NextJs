import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Typography } from '@mui/material';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 2 } }}>
      <a href="https://mazn.onrender.com/" target='_blank'>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1  }} />
       <Typography style={{fontWeight:'600'}}> Live Preview</Typography>
      </Fab>
      </a>
    </Box>
  );
}
