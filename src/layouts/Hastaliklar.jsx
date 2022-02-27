import React, {useEffect, useState} from 'react'
//import {ListGroup } from 'react-bootstrap/';
import HastalikService from '../services/hastalikService';
//import CardList from './CardList';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//import { Route, Routes } from 'react-router-dom';

export default function Hastaliklar() {
    
const [hastaliklar, setHastaliklar] = useState([])
const [loading, setLoading] = useState(false)
useEffect(()=>{
let hastalikService = new HastalikService();
hastalikService.getAllHastalik().then(result=>{setHastaliklar(result.data.data); setLoading(true)})
 },[]);

  return (

<div className='aa'>
  {loading===false?  <Box justifyContent="center" sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" />
    </Box>:  
  <Grid container spacing={1}>
    {hastaliklar.map(hastalik =>(

<Grid key={hastalik.id} item xs={3}>
<Card><Link style={{ textDecoration: 'none' }} to={`/hastaliklar/${hastalik.id}`}>
    <CardActionArea style={{ height:250 }}>
      <CardMedia
        component="img"
        height="150"
        width="150"
        image={hastalik.photo_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {hastalik.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hastalik.aciklama} 
        </Typography>
      </CardContent>
    </CardActionArea>
    </Link>
    </Card>
</Grid>
    ))}
 
  
  </Grid>}
  </div>

  
  )
  
}
