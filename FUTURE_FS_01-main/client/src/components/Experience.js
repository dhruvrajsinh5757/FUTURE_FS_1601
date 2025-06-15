import React from 'react';
import { Container, Typography, Box, Paper, useTheme } from '@mui/material';

const Experience = () => {
  const theme = useTheme();

  const experiences = [
    {
      title: 'Web Development Team Lead',
      company: 'Agevole Innovation Pvt. Ltd.',
      location: 'Surat, Gujarat',
      period: 'May 2024 - June 2024',
      responsibilities: [
        'Led the web development team on multiple projects',
        'Worked on Blog Website and BookStore Website projects',
        'Technologies used: HTML, CSS, Javascript, PHP',
        'Tools used: Visual Studio Code, Github',
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
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
          Professional Experience
        </Typography>

        <Box
          sx={{
            maxWidth: '48rem',
            mx: 'auto',
            position: 'relative',
            pl: { xs: 4, md: 6 },
          }}
        >
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '1.5rem', md: '2rem' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: 6,
              }}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '-1.5rem', md: '-2rem' },
                  top: 0,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transform: 'translateX(-50%)',
                }}
              />

              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {exp.title}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {exp.location} | {exp.period}
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                  {exp.responsibilities.map((item, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 