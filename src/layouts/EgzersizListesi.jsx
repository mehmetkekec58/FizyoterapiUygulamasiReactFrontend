import React,{useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import { Image } from 'react-bootstrap';
import "../App.css";
import IcerikService from '../services/icerikService';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

export default function EgzersizListesi() {
  const [getIcerikler, setGetIcerikler] = useState([])
   const {id} = useParams()
  useEffect(()=>{
   let icerikService = new IcerikService()
   return icerikService.getAll(id).then(result => setGetIcerikler(result.data.data)

  )
  }, [])

  return (
    <div className='aa'>
      {getIcerikler.map(icerikler =>(
     <Box key={icerikler.id}>
 <Image className='HastalikDetailPhoto' src={icerikler.gif_url} alt="hastaliklar"  width="400" height="250"/>
 
 <Typography paragraph variant="body2" color="text.secondary">
   {icerikler.aciklama}
    
 </Typography>
 </Box>   
      ))}
   
      
    
  
    </div>
  )
}
