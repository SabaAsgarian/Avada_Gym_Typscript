import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import '../globals.css';

interface CarddProps {
  image: StaticImageData | string; // Allow both StaticImageData and string for flexibility
}

const Cardd: React.FC<CarddProps> = ({ image }) => {
  return (
    <Card sx={{ transition:'1s', width: { xs: '100%', md: '30%' }, 
    margin: { xs: '10px 0', md: '10px' },
    height: { xs: 'auto', md: 'auto' }, backgroundColor:'transparent',boxShadow:'none','&:hover':{transform:'scale(1.1)'}}} >
      <CardContent>
        
          <Image src={image} alt='pics' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      
      </CardContent>
    </Card>
  );
};

export default Cardd;