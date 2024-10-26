import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';

interface MediaCardProps {
  image: string;
  title: string;
  description: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{borderRadius:'0px', marginTop:'20%',
        backgroundColor:'#1e2123',
      display: 'flex', 
      flexDirection: { xs: 'column', sm: 'row' },
      width: { xs: '100%', md: '48%' }, 
      margin: { xs: '2% 0', md: '1%' }, 
      height: { xs: 'auto', sm: '200px' }
    }}>
      <Image src={image} alt='review' style={{margin:'5%',width: { xs: '100%', sm: '30%' } as any, 
          height: '75%',
          objectFit: 'cover'}}/>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '70%' } }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1" sx={{color:'#999999',fontFamily:'os',fontSize:'15px'}}>
            "{title}"
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{fontWeight:'bolder',color:'#999999',fontFamily:'os',fontSize:'15px'}}>
            -{description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MediaCard;
