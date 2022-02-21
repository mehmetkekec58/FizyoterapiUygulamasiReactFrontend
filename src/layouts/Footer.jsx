import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/Edit';

export default function Footer() {
    const [value, setValue] = React.useState(0);
    
  return (
    <Box justifyContent="center">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Anasayfa" icon={<HomeIcon />} />
        <BottomNavigationAction label="İzlenenler" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Profil" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}


