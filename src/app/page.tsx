"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Skeleton from './components/skeleton';
import './globals.css';
import { Box, Button, Typography } from '@mui/material';
import XX from './components/img/divider-xx-red.png'
import Tri from './components/img/tri.svg';
import Tritwo from './components/img/tritwo.svg';
import CardBig from './components/cardBig';
import CustomCard from './components/CustomCard';
import { StaticImageData } from 'next/image';
import MediaCard from './components/fourCards';
import Cardnocaption from './components/cardnocaption';
import a from './components/img/review_1-compressor.jpg';
import b from './components/img/review_3-compressor-2.jpg';
import c from './components/img/review_2-compressor.jpg';
import d from './components/img/review_4-compressor-2.jpg';
import { LinkOff, PedalBike, CloudOutlined, MonitorHeart } from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import cap1 from './components/img/home-image1.jpg'
import cap2 from './components/img/home-image2.jpg'
import cap3 from './components/img/home-image3.jpg'
import cap4 from './components/img/home-image4.jpg'
import cap5 from './components/img/home-image54.jpg'
import cap6 from './components/img/home-image6.jpg'
import TrainorCard from './components/cardtrainors'
import trainorone from './components/img/trainer1.jpg'
import trainortwo from './components/img/trainer3.jpg'
import trainorthree from './components/img/trainer4.jpg'
import Cardperformancee from './components/cardperformance'
import perfone from './components/img/blog1.jpg'
import perftwo from './components/img/blog6.jpg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import perfthree from './components/img/blog4.jpg'

import loading from './components/img/gym_logo_1x.png'
interface CardDataItem {
  Icon: SvgIconComponent;
  title: string;
  description: string;
}
interface CardData {
  image: any;
  title: string;
  description: string;
}
interface TrainCard {
  image: any;
  title: string;
  job: string;
  description: string;
}
interface Cardperformance {
  image: any;
  title: string;

  description: string;
}
interface CardNoCap {
  image: any;

}

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.2; // 120vh
      setShowScrollTop(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
   
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="bg-black w-full min-h-[120vh] max-h-auto flex justify-center items-center text-center relative">
          <Image src={loading} alt="Loading"  style={{position:'absolute',zIndex:'99999'}}/>
        </div>
      </>
    )
  }

  const cardData: CardDataItem[] = [
    { Icon: LinkOff, title: 'Strength & Conditioning', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
    { Icon: PedalBike, title: 'Fitness & Cardio', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
    { Icon: CloudOutlined, title: 'Flexibility & Rest', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
    { Icon: MonitorHeart, title: 'Health & Diet', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
  ];
  const cardDatafour: CardData[] = [
    {
      image: a,
      title: 'The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!',
      description: 'Tara Smith',
    },
    {
      image: b,
      title: 'The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.',
      description: 'Simon Chel',
    },
    {
      image: c,
      title: 'The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.',
      description: 'Jen Wirth',
    },
    {
      image: d,
      title: 'No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.',
      description: 'Jeff Glum',
    },
  ];
  const TrainCard: TrainCard[] = [
    {
      image: trainorone,
      title: 'Ann Baker',
      job: 'Personal Trainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.',
    },
    {
      image: trainortwo,
      title: 'Anne Warren',
      job: 'Personal Trainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.',
    },
    {
      image: trainorthree,
      title: 'Peter Rice',
      job: 'Personal Trainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.',
    },

  ];
  const Cardperformance: Cardperformance[] = [
    {
      image: perfone,
      title: 'Train with free weights or your body weight?',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },
    {
      image: perftwo,
      title: 'Nutritional advice that will keep you training',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },
    {
      image: trainorthree,
      title: 'Simple principles for your next workout',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },
    {
      image: perfthree,
      title: 'To be number one, train like you’re number two',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },
    {
      image: trainorone,
      title: 'The myths of shedding body fat explored',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },
    {
      image: trainortwo,
      title: 'Top 5 mistakes every gym member makes',
     
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus [...]',
    },

  ];
  const CardNoCap: CardNoCap[] = [
    {
      image: cap1,

    },
    {
      image: cap2,

    },
    {
      image: cap3,

    },
    {
      image: cap4,

    },
    {
      image: cap5,

    },
    {
      image: cap6,

    },
  ];

  return (
    <>
      <div className='bg-first w-full min-h-[120vh] max-h-auto bg-center bg-cover'>

        <Box sx={{ width: '100%', height: '100%' }}>
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '200px'
          }}>
            <Typography variant='h1' sx={{ color: 'white', width: '100%', textAlign: 'center', marginBottom: '3%', fontFamily: 'mt', fontWeight: 'bolder' }} className='!font-extrabold'>
              NO PAIN NO GAIN
            </Typography>
            <Typography variant='h2' sx={{ fontWeight: 'thiner', color: 'white', width: '100%', textAlign: 'center', marginBottom: '5%', fontSize: '20px', fontFamily: 'mt' }}>
              Motivation is what gets you started. Habit is what keeps you going.
            </Typography>
            <Box sx={{marginBottom: '6%'}}>
              <Button sx={{ width: '200px', height: '60px', fontFamily: 'mt', border: '1px solid #b4b1af', borderRadius: '0px', color: '#b4b1af', backgroundColor: 'transparent', '&:hover': { color: 'white', border: '1px solid white' } }}>
                Join Us Today
              </Button>
            </Box>
          </Box>
        </Box>


      </div>
      <Box sx={{ width: '100%', minHeight: '60vh', maxHeight: 'auto', backgroundColor: '#25292b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '60%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <Typography variant='h2' sx={{ marginTop: '8%', marginBottom: '5%', fontSize: '35px', color: 'white', fontFamily: 'mt', fontWeight: 'bolder' }}>WORLD CLASS STRENGTH</Typography>
          <Image src={XX} alt='XX' width={30} height={30} style={{}} />
          <Typography variant='body2' sx={{ marginTop: '5%', fontSize: '15px', color: '#999999', fontFamily: 'os', fontWeight: 'bolder' }}>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we’re equipped to help you reach your goals of a healthy and fit lifestyle.</Typography>
        </Box>

      </Box>
      <Box sx={{ position: 'relative', height: '5vh', backgroundColor: '#1e2123', display: { xs: 'none', md: 'flex' } }}>
        <Image src={Tri} alt='tri' style={{ width: '20%', position: 'absolute', top: '-20vh', left: '38%' }} />
      </Box>
      <Box sx={{ backgroundColor: '#1e2123', width: '100%', minHeight: '80vh', maxHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <CardBig />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', backgroundColor: '#f6f7fa', minHeight: '90vh', maxHeight: 'auto' }} className='bg-third bg-center bg-cover'>
        {cardData.map((card, index) => (
          <CustomCard key={index} Icon={card.Icon} title={card.title} description={card.description} />
        ))}
      </Box>
      <Box sx={{ width: '100%', minHeight: '100vh', maxHeight: 'auto', backgroundColor: '#25292b',display:'flex',justifyContent: 'center',
          alignItems:'center',flexDirection: 'column' }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems:'center',
          width: '80%',
         
        }} className="">
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', textAlign: 'center' }}>
            <Typography variant='h2' sx={{ marginTop: '8%', marginBottom: '5%', fontSize: '35px', color: 'white', fontFamily: 'mt', fontWeight: 'bolder' }}>REAL WORLD RESULTS</Typography>
            <Image src={XX} alt='XX' width={30} height={30} style={{ marginBottom: '5%' }} />
          </Box>
          
          {cardDatafour.map((card, index) => (
            <MediaCard key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </Box>
      </Box>
      <Box sx={{ width: '100%', minHeight: '120vh', maxHeight: 'auto', backgroundColor: '#25292b', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', textAlign: 'center' }}>
          <Typography variant='h2' sx={{ marginTop: '10%', marginBottom: '5%', fontSize: '35px', color: 'white', fontFamily: 'mt', fontWeight: 'bolder' }}>HIGH PERFORMANCE FACILITIES</Typography>
          <Image src={XX} alt='XX' width={30} height={30} style={{ marginBottom: '5%' }} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '85%',
          padding: '20px',
          marginBottom: '8%'
        }}>
          {CardNoCap.map((card, index) => (
            <Cardnocaption key={index} image={card.image} />
          ))}
        </Box>
      </Box>
      <div className='bg-brucelee  bg-fixed bg-cover w-full min-h-[80vh] max-h-auto flex justify-center items-center'>
        <Box sx={{ color: "white", display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ width: { xs: "80%", lg: "45%" }, fontFamily: 'os' }}>“ I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times ”</Typography>
          <Typography sx={{ fontWeight: 'bolder', marginTop: '5%', fontFamily: 'os', fontSize: '18px' }}>BRUCE LEE • QUOTE OF THE DAY</Typography>
        </Box>
      </div>
      <Box sx={{ width: '100%', minHeight: '120vh', maxHeight: 'auto', backgroundColor: '#1e2123', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <Typography variant='h2' sx={{ marginTop: '10%', marginBottom: '1.5%', fontSize: '35px', color: 'white', fontFamily: 'mt', fontWeight: 'bolder' }}>MEET OUR TRAINERS</Typography>
          <Image src={XX} alt='XX' width={30} height={30} style={{ marginBottom: '5%' }} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '85%',
          padding: '20px',
          marginBottom: '5%'
        }}>
          {TrainCard.map((card, index) => (
            <TrainorCard key={index} image={card.image} title={card.title} job={card.job} description={card.description} />
          ))}
        </Box>
        <Box sx={{ marginBottom: '10%' }} >
          <Button sx={{cursor:'pointer', fontSize: '18px', width: '250px', height: '60px', fontFamily: 'mt', border: '1px solid #b4b1af', borderRadius: '0px', color: '#b4b1af', backgroundColor: 'transparent', '&:hover': { color: 'white', border: '1px solid white' } }}>
            VIEW ALL TRAINERS
          </Button>
        </Box>
       
      </Box>
      <Box sx={{ position: 'relative', height: '5vh', backgroundColor: '#25292b', display: { xs: 'none', md: 'flex' } }}>
        <Image src={Tritwo} alt='tritwo' style={{ width: '40%', position: 'absolute', top: '-290px', left: '30%' }} />
      </Box>
      <Box sx={{ backgroundColor: '#25292b', width: '100%', minHeight: '200vh', maxHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <Typography variant='h2' sx={{ marginTop: '5%', marginBottom: '1.5%', fontSize: '35px', color: 'white', fontFamily: 'mt', fontWeight: 'bolder' }}>PERFORMANCE NEWS</Typography>
          <Image src={XX} alt='XX' width={30} height={30} style={{ marginBottom: '5%' }} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '85%',
          padding: '20px',
          marginBottom: '5%'
        }}>
          {Cardperformance.map((card, index) => (
            <Cardperformancee key={index} image={card.image} title={card.title}  description={card.description} />
          ))}
        </Box>
        <Box sx={{ marginBottom: '10%' }} >
          <Button sx={{cursor:'pointer', fontSize: '18px', width: '250px', height: '60px', fontFamily: 'mt', border: '1px solid #b4b1af', borderRadius: '0px', color: '#b4b1af', backgroundColor: 'transparent', '&:hover': { color: 'white', border: '1px solid white' } }}>
          READ ALL ARTICLES
          </Button>
        </Box>
      </Box>
      {showScrollTop && (
        <Box 
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '0%',
            right: '5%',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
            opacity: showScrollTop ? 1 : 0,
          }}
        >
          <Box 
            sx={{
              '&:hover': { backgroundColor: '#ee6059' },
              backgroundColor: '#313131',
              borderRadius: '8px 8px 0px 0px',
              width: '50px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <KeyboardArrowUpIcon sx={{ color: 'white' }} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Page;
