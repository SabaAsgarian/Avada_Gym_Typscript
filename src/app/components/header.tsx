"use client"
import * as React from 'react';
import { styled, useTheme, Theme } from '@mui/material/styles';
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
import Logo from './img/gym_logo_1x.png';
import { useState, useEffect } from 'react';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface StyledAppBarProps extends AppBarProps {
  show: boolean;
}

const drawerWidth = '100%';

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'show',
})<StyledAppBarProps>(({ theme, show }) => ({
  transition: 'transform 0.3s ease-in-out',
  transform: show ? 'translateY(0)' : 'translateY(-100%)',
  backgroundColor: 'transparent',
  color: 'white',
  padding: '2%',
  boxShadow: 'none',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor: 'transparent',
  color: 'white',
}));

const navItems: string[] = ['HOME', 'ABOUT US', 'FACILITIES', 'MEMBERSHIP', 'TESTIMONIALS', 'BLOG'];

const ResponsiveAppBar: React.FC<Props> = (props) => {
  const theme: Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState<boolean>(false);
  const [showAppBar, setShowAppBar] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      const vh5: number = window.innerHeight * 0.2;
      if (currentScrollY > vh5) {
        setShowAppBar(false);
      } else {
        setShowAppBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', textAlign: 'center', }}>
      <StyledAppBar position="fixed" show={showAppBar}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <Image
            src={Logo}
            alt="logo"
            style={{
              height: '80%',
              width: { xs: '30%', md: '17%' } as any,
            }}
          />

          {!isSmallScreen && (
            <Box sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
            }}>
              {navItems.map((item: string) => (
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

          {!isMobile && (
            <Button variant="contained" sx={{
              width: '180px',
              height: '60px',
              borderRadius: '0px',
              textAlign: 'center',
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
            backgroundColor: '#1e2123',
            color: 'white',
            top: '20%', // Add this line
            height: '90%', // Add this line to make it take up remaining space
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={{ color: 'white' }} />
          </IconButton>
        </DrawerHeader>
        <List>
          {navItems.map((text: string) => (
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

export default ResponsiveAppBar;