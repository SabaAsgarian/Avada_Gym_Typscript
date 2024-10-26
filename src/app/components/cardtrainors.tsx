import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import '../globals.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
interface CarddProps {
    image: any;
    title: string;
    job: string;
    description: string;
}
const Cardd: React.FC<CarddProps> = ({ image, title, job, description }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '30%' }, margin: '10px', backgroundColor: 'transparent',cursor:'pointer' }} >
            <Box sx={{transition:'1s','&:hover':{transform:'scale(1.1)'}, display: 'flex', justifyContent: 'center', alignItems: 'center',  }} >
                <Image src={image} alt={title}  style={{ objectFit: 'cover',width:'100%',height:'auto' ,}} />
            </Box>
            <CardContent sx={{ backgroundColor: '#25292b',padding:'5%' }}>

                <Typography variant="h6" sx={{ textAlign: 'start', marginTop: '10px', fontFamily: 'mt', fontSize: '15px', fontWeight: 'bolder',color:'white' }} >
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'start', marginTop: '10px', fontFamily: 'mt', fontSize: '15px', fontWeight: 'bolder',color:'white'  }} >
                    {job}
                </Typography>
                <Typography variant="h6" sx={{width:'60%', marginTop:'10%',marginBottom:'10%',textAlign: 'start', fontFamily: 'os', fontSize: '15px', fontWeight: 'thiner',color:'#999999' }} >
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Box sx={{ width: '40px', height: '40px', backgroundColor: '#1e2123',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FacebookOutlinedIcon sx={{ color: 'white', fontSize: '20px' }} />
                    </Box>
                    <Box sx={{marginLeft:'2%', width: '40px', height: '40px', backgroundColor: '#1e2123',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <XIcon sx={{  color: 'white', fontSize: '20px' }} />
                    </Box>
                    <Box sx={{marginLeft:'2%', width: '40px', height: '40px', backgroundColor: '#1e2123',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <InstagramIcon sx={{ color: 'white', fontSize: '20px' }} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Cardd;