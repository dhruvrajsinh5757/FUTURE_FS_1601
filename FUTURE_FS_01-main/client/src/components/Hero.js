import React from 'react';
import { Container, Typography, Button, Box, useTheme } from '@mui/material';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        py: { xs: 10, md: 16 },
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              mb: { xs: 4, md: 0 },
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 4,
              boxShadow: 6,
              p: { xs: 3, md: 6 },
            }}
            className="animate-on-scroll"
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ mb: 2, fontWeight: 500 }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              DHRUVRAJSINH JADEJA
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Fullstack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, maxWidth: '32rem', color: 'text.secondary' }}
            >
              I craft engaging user experiences with HTML, CSS, JavaScript, Nodejs, React JS, Expressjs, MongoDB while exploring Blockchain technologies. With strong communication skills, I thrive in collaborative environments and drive projects to success.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  borderRadius: '9999px',
                  px: 4,
                  py: 1.5,
                  boxShadow: 2,
                  background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 100%)',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                    background: 'linear-gradient(90deg, #6366F1 0%, #3B82F6 100%)',
                  },
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#projects"
                sx={{
                  borderRadius: '9999px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  border: '2px solid #3B82F6',
                  color: '#3B82F6',
                  background: 'white',
                  '&:hover': {
                    backgroundColor: '#3B82F6',
                    color: 'white',
                  },
                }}
              >
                View Projects
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              display: 'flex',
              justifyContent: 'center',
            }}
            className="animate-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <Box
              component="img"
              src="/dhruvrajsinh.jpg"
              alt="DHRUVRAJSINH JADEJA"
              sx={{
                width: { xs: 256, md: 320 },
                height: { xs: 256, md: 320 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: `4px solid transparent`,
                backgroundImage: `linear-gradient(white, white), linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                boxShadow: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 