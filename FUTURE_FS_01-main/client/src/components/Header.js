import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    { text: 'Education', href: '#education' },
    { text: 'Skills', href: '#skills' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} onClick={() => handleMenuClick(item.href)}>
          {item.text}
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <a href="#" className="text-2xl font-bold gradient-text">DHRUVRAJSINH JADEJA</a>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div className="flex-grow flex justify-center space-x-8">
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                onClick={() => handleMenuClick(item.href)}
                className="nav-link"
              >
                {item.text}
              </Button>
            ))}
          </div>
        )}

        <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: isMobile ? 0 : 2 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 