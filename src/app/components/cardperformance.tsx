import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import '../globals.css'

interface CarddProps {
    image: any;
    title: string;

    description: string;
}
const Cardd: React.FC<CarddProps> = ({ image, title,description }) => {
    return (
        <Card sx={{boxShadow:'none',border:'0px',borderRadius:"0px", width: { xs: '100%', sm: '100%', md: '30%' }, margin: '10px', backgroundColor: 'transparent',cursor:'pointer',transition:'1s','&:hover':{transform:'translateY(-20px)' } }} >
            <Box sx={{transition:'1s','&:hover':{transform:'scale(1.1)'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' }} >
                <Image src={image} alt={title}  style={{ objectFit: 'cover',width:'100%', height:'400px'}} />
            </Box>
            <CardContent sx={{ backgroundColor: '#1e2123',padding:'10%' }}>

                <Typography variant="h6" sx={{ textAlign: 'start', marginTop: '10px',marginBottom:'5%', fontFamily: 'mt', fontSize: '20px', fontWeight: 'bolder',color:'white',transition:'1s','&:hover':{color:'#ee6059'} }} >
                    {title}
                </Typography>
               
                <Typography variant="caption" sx={{width:'60%', marginTop:'10%',marginBottom:'20%',textAlign: 'start', fontFamily: 'os', fontSize: '15px', fontWeight: 'thiner',color:'#999999' }} >
                    {description}
                </Typography>
               
            </CardContent>
        </Card>
    );
};

export default Cardd;