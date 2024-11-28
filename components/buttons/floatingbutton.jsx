import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import Language from '@mui/icons-material/Language'

export default function FloatingActionButtons({link, name}) {
  
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <a href={`${link}`} target='_blank'>
      <Fab variant="extended">
         {name==="Live" && <Language sx={{ mr: 1  }}/>}
         {name==="Source" && <NavigationIcon sx={{ mr: 1  }} />}
        
       <Typography style={{fontWeight:'500'}}>{name}</Typography>
      </Fab>
      </a>
    </Box>
  );
}
