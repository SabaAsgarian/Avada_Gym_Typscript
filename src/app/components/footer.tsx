"use client"
import React from 'react'
import { Box, Button, Paper, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import logO from './img/gym_ad-compressor.jpg';
import Me from './img/me.png';
import './../globals.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#25292b',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    ...theme.applyStyles('dark', {
        backgroundColor: '#25292b',
    }),
}));

const Footer: React.FC = () => {
    return (
        <>
            <div className='bg-footer w-full min-h-[30vh] max-h-auto flex justify-center items-center brightness-150 '>
                <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, width: '80%', height: '100%' }}>
                    <div className='w-full h-1/2 md:w-[80%] lg:h-full flex flex-col text-center md:text-start'>
                        <h1 className='text-[18px] lg:text-[35px] font-mt font-extrabold text-white mt-[10%] md:mt-0'>Achieve Your Fitness Goals</h1>
                        <h6 className='text-[15px] lg:text-[18px] font-os text-white my-[10%] md:my-0'>Flexible membership packages to suit all levels of athlete and achieve your fitness goals</h6>
                    </div>
                    <div className='w-full h-1/2 md:w-[20%] lg:h-full flex justify-center items-center'>
                        <Button sx={{
                            marginBottom:{xs:'10%',md:'0%'},
                            cursor: 'pointer',
                            fontSize:{xs:'13px',md:'18px'},
                            width: {xs:'150px',md:'180px'},
                            height: '60px',
                            fontFamily: 'mt',
                            border: '1px solid #b4b1af',
                            borderRadius: '0px',
                            color: '#b4b1af',
                            backgroundColor: 'transparent',
                            '&:hover': {
                                color: 'white',
                                border: '1px solid white'
                            }
                        }}>
                            JOIN US
                        </Button>
                    </div>
                </Box>
            </div>
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'start', backgroundColor: '#25292b', color: 'white' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '80%', marginTop: '5%' }}>


                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 3, sm: 2, md: 4, lg: 8 }}
                    >
                        <Item>
                            <a href="#link1" style={{ textDecoration: 'none', textAlign: 'start' }}>
                                <h1 className="text-[15px]  font-mt text-[#999999]">COME FIND US</h1>
                                <p className="text-[#999999] font-os text-[15px] my-[12%]">12345 North Main Street New York, NY 555555</p>
                                <Box sx={{ display: 'flex', }}>
                                    <p className='text-[#999999]'>Phone:</p>
                                    <p className='text-white font-os hover:text-[#ee6059] duration-700'>1.800.555.6789</p>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <p className='text-[#999999]'>Email:</p>
                                    <p className='text-white font-os hover:text-[#ee6059] duration-700'>computer.sabaa@gmail.com</p>
                                </Box>

                            </a>
                        </Item>
                        <Item>
                            <a href="#link1" style={{ textDecoration: 'none', textAlign: 'start' }}>
                                <h1 className="text-[15px]  font-mt text-[#999999] mb-[12%]">RECENT POSTS</h1>
                                <Box sx={{ display: 'flex', }}>
                                    <ChevronRightIcon sx={{ color: 'white' }} />
                                    <p className="text-white font-os text-[15px] hover:text-[#ee6059] duration-700">Train with free weights or your body weight?</p>
                                </Box>
                                <Box sx={{ display: 'flex', marginTop: '12%' }}>
                                    <ChevronRightIcon sx={{ color: 'white' }} />
                                    <p className="text-white font-os text-[15px] hover:text-[#ee6059] duration-700">Nutritional advice that will keep you training</p>
                                </Box>

                            </a>
                        </Item>
                        <Item>
                            <a href="#link1" style={{ color: '#999999', textDecoration: 'none', textAlign: 'start' }}>
                                <h1 className="text-[15px]  font-mt mb-[12%]">OPENING TIMES</h1>
                                <p className=" font-os text-[15px]">Weekdays Monday – Friday
                                    09:00 – 19:00</p>
                                <p className=" font-os text-[15px] mt-[12%]">Weekends Saturday – Sunday
                                    09:00 – 21:00</p>

                            </a>
                        </Item>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                             <Item>
                            <Box sx={{ transition: '1s', width: '100%', height: '100%', '&:hover': { transform: 'scale(1.1)' } }}>
                                <Image
                                    src={logO}
                                    alt="Logo"
                                    priority

                                    style={{ width: '270px', height: '176px' }}
                                />
                            </Box>
                         </Item>
                        </Link>
                    </Stack>
                    <Box sx={{ width: '100%', my: '5%',backgroundColor:"#1e2123" }}>
                        <Stack spacing={2}>
                            <Item>
                                <Image src={Me} alt="me" width={100} height={100} style={{ borderRadius: '50%', backgroundColor: '#ee6059' }} />
                                <Typography sx={{ color: "white", fontFamily: 'cr' }}>Developed by saba asgarian</Typography>
                                <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr'>
                                    <InstagramIcon sx={{ color: 'white', ml: '2%', backgroundColor: '#ee6059' }} className="p-hover" />
                                </Link>
                                <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                                    <LinkedInIcon sx={{ color: 'white', ml: '2%', backgroundColor: '#ee6059' }} className="p-hover" />
                                </Link>
                                <Link href='https://github.com/SabaAsgarian'>
                                    <GitHubIcon sx={{ color: 'white', ml: '2%', backgroundColor: '#ee6059' }} className="p-hover" />
                                </Link>
                                <Link href='mailto:computer.sabaa@gmail.co'>
                                    <MailIcon sx={{ color: 'white', ml: '2%', backgroundColor: '#ee6059' }} className="p-hover" />
                                </Link>
                            </Item>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;




