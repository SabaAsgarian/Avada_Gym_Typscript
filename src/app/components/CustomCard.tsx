import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import '../globals.css'
import X from './img/divider-x-red.png'
import Image from 'next/image';

interface CustomCardProps {
  Icon: SvgIconComponent;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card sx={{ minHeight:'400px', maxHeight:'auto', width: { xs: '100%', sm: '100%', md: '20%' }, margin: '10px', backgroundColor:'transparent', flexDirection:'column' }} >
      <CardContent>
        <Box sx={{width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{ 
                margin:'10%',
              position: 'relative',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              width: '120px', 
              height:'120px',
              borderRadius:'50%',
              border:'1px solid #ee6059',
              '&:hover::before': {
                animation: 'fusionSonar 1.5s linear infinite',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                right: '-1px',
                bottom: '-1px',
                borderRadius: '50%',
                border: '10px solid #ee6059',
                opacity: 0,
              },
              '@keyframes fusionSonar': {
                '0%': {
                  opacity: 0,
                  transform: 'scale(1)',
                },
                '50%': {
                  opacity: 0.5,
                  transform: 'scale(1.5)',
                },
                '100%': {
                  opacity: 0,
                  transform: 'scale(1.8)',
                },
              },
            }} 
          >
            <Icon sx={{ fontSize: 70, color: '#ee6059' }} />
          </Box>
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            marginTop: '10px', 
            fontFamily: 'mt', 
            fontSize: '15px', 
            fontWeight: 'bolder', 
            color: isHovered ? '#ee6059' : 'white',
            transition: 'color 0.3s ease-in-out',
          }} 
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'5%'}}>
            <Image src={X} alt='X' width={15} height={15}/>
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '10px', fontFamily: 'os', fontSize: '15px', fontWeight: 'thiner', color:'#999999' }} >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
