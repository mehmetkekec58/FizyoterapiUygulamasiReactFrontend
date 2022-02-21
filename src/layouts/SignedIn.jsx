import React from 'react'
import {Dropdown } from 'react-bootstrap/';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function SignedIn({signOut}) {
  return (
    <div>
         <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
  <Grid container spacing={1}>
        <Grid  item >
        <Avatar alt="avartar" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
   </Grid>  <Grid  item ><Typography>Mehmet</Typography></Grid>
  </Grid>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  href="#">
    Profilim</Dropdown.Item>
  <Dropdown.Item onClick={signOut}>Çıkış yap</Dropdown.Item>
    <Dropdown.Item href="#">Ayarlar</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </div>
  )
}
