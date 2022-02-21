import React from 'react'
import {Button } from 'react-bootstrap/';
import Grid from '@mui/material/Grid';

export default function SignedOut({signIn}) {
  return (
    
    <div>
      <Grid container spacing={2}>
        <Grid justifyContent="center" item >
      <Button onClick={signIn} variant="success">Giriş Yap</Button></Grid>
      <Grid justifyContent="center" item >
    <Button onClick={signIn} variant="warning">Kayıt Ol</Button>
    </Grid>
    </Grid> </div>
  )
}
