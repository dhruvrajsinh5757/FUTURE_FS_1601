import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      text: 'GitHub',
      href: 'https://github.com/meetjakasaniya',
      color: 'inherit',
    },  
    {
      icon: <LinkedInIcon />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jakasaniya-mit',
      color: 'inherit',
    },
    {
      icon: <EmailIcon />,
      text: 'Email',
      href: 'mailto:jadejadhruvrajsinh@gmail.com',
      color: 'inherit',
    },
    {
      icon: <PhoneIcon />,
      text: '9875056633',
      href: 'tel:+919875056633',
      color: 'inherit',
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 10,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
          className="animate-on-scroll"
        >
          About Me
        </Typography>

        <Box
          sx={{
            maxWidth: '48rem',
            mx: 'auto',
            color: 'text.primary',
          }}
          className="animate-on-scroll"
        >
          <Typography variant="body1" paragraph>
            Hello! I'm DHRUVRAJSINH JADEJA, a passionate and dedicated MERN Stack Developer from Morbi, Gujarat. I specialize in building responsive and dynamic web applications using technologies like HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB, and MySQL. My goal is to craft seamless user experiences and develop clean, efficient code that solves real-world problems.
          </Typography>
          <Typography variant="body1" paragraph>
            Currently pursuing my B.Tech in Information Technology at CHARUSAT, I have maintained a strong academic record and continually expand my technical knowledge through online courses in Data Structures, DBMS, and Algorithm Design.
          </Typography>
          <Typography variant="body1" paragraph>
            I love collaborating on innovative projects and have developed several applications including a Smart Classroom Management System, a Netflix Clone, and an Event Management System. I'm also beginning to explore Blockchain technology to stay ahead in this fast-evolving tech landscape.
          </Typography>
          <Typography variant="body1" paragraph>
            Apart from coding, I value teamwork, effective communication, and lifelong learning. I'm always open to new opportunities that allow me to grow and contribute meaningfully.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outlined"
                startIcon={link.icon}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  borderRadius: '9999px',
                  px: 3,
                  py: 1,
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 