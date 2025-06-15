import React from 'react';
import { Container, Typography, Box, Chip, useTheme } from '@mui/material';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React JS',
        'Node JS',
        'Express JS',
        'MongoDB',
        'GitHub',
        'Visual Studio Code',
        'RESTful APIs',
      ],
    },
    {
      title: 'Soft Skills & Methodologies',
      skills: [
        'Teamwork',
        'Leadership',
        'Presentation',
        'Planning',
        'Creativity',
        'Problem Solving',
        'Time management'
      ],
    },
    {
      title: 'Languages',
      skills: ['English', 'Gujarati', 'Hindi'],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
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
          Skills
        </Typography>

        <Box
          sx={{
            maxWidth: '64rem',
            mx: 'auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              sx={{
                mb: 6,
              }}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {category.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                }}
              >
                {category.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    label={skill}
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.dark',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 