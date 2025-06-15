import React from 'react';
import { Container, Typography, Box, Paper, Chip, useTheme } from '@mui/material';

const Projects = () => {
  const theme = useTheme();

  const projects = [
    
    {
      title: 'Netflix Clone',
      period: 'Oct 2024 - Nov 2024',
      description: 'Netflix Clone for Practicing Html, CSS, JavaScript .',
      technologies: ['HTML', 'CSS' ],
      tools: ['Visual Studio Code', 'GitHub'],
    },
    {
      title: 'Smart Classroom Management System',
      period: 'Feb 2025 - Apr 2025',
      description: 'Website provides a user-friendly interface for the Students and Faculties to efficiently manage their data and other classroom operations.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      tools: ['Visual Studio Code', 'GitHub', 'Mongo DB Atlas'],
    },
    {
      title: 'Event Management System',
      period: 'Apr 2025 - May 2025',
      description: 'A User-friendly platform for the event organizers to create, manage, and promote events, while providing attendees with a seamless registration and information experience.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      tools: ['Visual Studio Code', 'GitHub', 'Mogo DB Atlas'],
    },
    {
      title: 'Wheather App',
      period: 'May 2025 - June 2025',
      description: 'Website provides real-time weather updates and forecasts for any location worldwide, allowing users to plan their activities accordingly.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      tools: ['Visual Studio Code', 'GitHub', 'Wheather API', 'Mongo DB Atlas'],
    },
  ];

  return (
    <Box
      component="section"
      id="projects"
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
          Projects
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
            maxWidth: '72rem',
            mx: 'auto',
          }}
        >
          {projects.map((project, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                {project.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {project.period}
              </Typography>
              <Typography variant="body1" paragraph color="text.primary">
                {project.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Technologies:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.dark',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 'auto' }}>
                <Typography variant="subtitle2" gutterBottom>
                  Tools:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.tools.join(', ')}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 