import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import '../globals.css'
import image from './img/home_img-compressor.jpg'


const CardBig: React.FC = () => {
  return (
    <Card sx={{border:'none',margin:'10%',width:'80%',minHeight:'100%', maxHeight:'auto',backgroundColor:'#1e2123', display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }} >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '50%' } }}>
        <Image src={image} alt='img' style={{ width: '90%', height: '70%', borderRadius: '0px', }} className='image' />
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
        <CardContent>
          <Typography component="div" variant="h5" sx={{marginBottom:'5%',color:'white',fontFamily:'mt',fontWeight:'bolder'}}>

            Sign Up For A Free Training Session!
          </Typography>
          <Box sx={{width:'100%',display:'flex',flexDirection:'column',marginBottom:'5%'}}>
            <Typography sx={{color:'#999999',marginBottom:'2%'}}>Name *</Typography>
            <input type="text" className='duration-500 bg-[#222527] text-white h-[40px] border-2 border-[#737373] hover:border-0 hover:border-transparent'/>
          </Box>
          <Box sx={{width:'100%',display:'flex',flexDirection:'column',marginBottom:'10%'}}>
            <Typography sx={{color:'#999999',marginBottom:'2%'}}>Email</Typography>
            <input type="text"  className='duration-500 bg-[#222527] text-white h-[40px] border-2 border-[#737373] hover:border-0 hover:border-transparent' />
          </Box>
        
          <Button sx={{ height:'55px',fontSize:'18px',fontFamily:'mt',width: '100%', backgroundColor: '#ee6059', color: 'white', borderRadius: '0px' }} >
            Start Now!
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
export default CardBig;
