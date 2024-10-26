"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Logo from './img/gym_logo_1x.png'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const drawerWidth = '100%';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'show',
})<{ show: boolean }>(({ theme, show }) => ({
  transition: 'transform 0.3s ease-in-out',
  transform: show ? 'translateY(0)' : 'translateY(-100%)',
  backgroundColor:'transparent',
  color:'white',
  padding:'2%',
  boxShadow:'none',
 

}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor:'#1e2123',
  color:'white',
}));

const navItems = ['HOME', 'ABOUT US', 'FACILITIES', 'MEMBERSHIP', 'TESTIMONIALS', 'BLOG'];

export default function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const [showAppBar, setShowAppBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const vh5 = window.innerHeight * 0.001; // 5% of viewport height
      if (currentScrollY > vh5) {
        setShowAppBar(false);
      } else {
        setShowAppBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed" show={showAppBar}>
        <Toolbar>
        <Image src={Logo} alt="logo"  style={{ 
    height: '80%', 
    width: {xs:'30%', md:'17%'} as any, 
    marginRight: '20px' 
  }}  />
          
          {!isSmallScreen && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  sx={{ 
                    color: item === 'HOME' ? '#ee6059' : 'white', 
                    mx: 1,
                    '&:hover': {
                      color: '#ee6059',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
          
          <Box sx={{ flexGrow: 1 }} />
          
          {!isMobile && (
            <Button variant="contained" sx={{ 
              mr: 2,
              width: '180px',
              height: '60px',
              borderRadius: '0px',
              backgroundColor: '#ee6059',
              '&:hover': {
                backgroundColor: '#d15651',
              }
            }}>
              Join Today
            </Button>
          )}
          
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor:'#1e2123',
            color: 'white'
          },
          

        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={{color:'white'}}/>
          </IconButton>
        </DrawerHeader>
        <List>
          {navItems.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText 
                  primary={text} 
                  sx={{ 
                    color: text === 'HOME' ? '#ee6059' : 'inherit',
                    '& .MuiTypography-root': {
                      transition: 'color 0.3s ease',
                    },
                    '&:hover .MuiTypography-root': {
                      color: '#ee6059',
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
