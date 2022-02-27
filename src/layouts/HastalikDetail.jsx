import React, { useEffect, useState } from 'react'


import Typography from '@mui/material/Typography';
import HastalikService from '../services/hastalikService';
import { Link, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import "../App.css";
import Button from '@mui/material/Button';

export default function HastalikDetail() {
    let {id}=useParams()
   
const [getByIdHastalik, setGetByIdHastalik] = useState({})
useEffect(()=>{
    let hastalikService = new HastalikService();
    hastalikService.getById(id).then(result => {setGetByIdHastalik(result.data.data[0])})
},[])

  return (<div className='aa'>
  <Image className='HastalikDetailPhoto'  src={getByIdHastalik.photo_url} alt={getByIdHastalik.name}  width="400" height="250"/>
  
    <Typography gutterBottom variant="h5" component="div">{getByIdHastalik.name}</Typography>
  <Typography paragraph variant="body2" color="text.secondary">
{getByIdHastalik.aciklama}

  </Typography>
    
  <Button variant="contained"><Link style={{ textDecoration: 'none' , color:"white"}} to={`../../egzersizler/${getByIdHastalik.id}`}>Egzersize Başla</Link></Button>

  </div>
  )
}
