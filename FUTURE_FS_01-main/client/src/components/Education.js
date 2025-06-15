import React from 'react';
import { Container, Typography, Box, Paper, Grid, useTheme } from '@mui/material';

const Education = () => {
  const theme = useTheme();

  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'CHARUSAT',
      location: 'Anand, Gujarat',
      period: '2023 - Present',
      details: 'CGPA: 8.20',
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'GSHSEB',
      location: 'Morbi, Gujarat',
      period: '2023',
      details: 'Percentile: 80.33',
    },
    {
      degree: 'Secondary Education',
      institution: 'GSEB',
      location: 'Morbi, Gujarat',
      period: '2021',
      details: 'Percentage: 71%',
    },
  ];

  const certifications = [
    {
      title: ' Problem Solving through Programming In C',
      issuer: 'NPTEL',
      date: 'April 2024',
      score: 'Score: 56',
    },
    {
      title: 'Database Management System',
      issuer: 'NPTEL',
      date: 'Sep 2024',
      score: 'Score: 56',
    },
    {
      title: ' Data Structure and Algorithms using Java',
      issuer: 'NPTEL',
      date: 'Oct 2024',
      score: 'Score: 60',
    },
  ];

  return (
    <Box
      component="section"
      id="education"
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
          Education
        </Typography>

        <Box
          sx={{
            maxWidth: '48rem',
            mx: 'auto',
            position: 'relative',
            pl: { xs: 4, md: 6 },
            mb: 8,
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

          {education.map((edu, index) => (
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
                  {edu.degree}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {edu.location} | {edu.period}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {edu.details}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        <Typography
          variant="h4"
          component="h3"
          align="center"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: 'text.primary',
          }}
          className="animate-on-scroll"
        >
          Certifications
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: '48rem',
            mx: 'auto',
          }}
        >
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Typography variant="h6" component="h4" gutterBottom fontWeight="bold">
                  {cert.title}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {cert.issuer}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {cert.date}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {cert.score}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

 export default Education;