import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Sending..." });

    try {
      const response = axios.post("/api/contact", formData);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Location",
      content: "Morbi, Gujarat, India",
      href:"https://www.google.com/maps/@23.0017745,70.8830004,15z?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      content: "9875056633",
      href: "tel:+919875056633",
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      content: "jadejadhruvrajsinh@gmail.com",
      href: "mailto:jadejadhruvrajsinh@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      href: "https://github.com/meetjakasaniya",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/jakasaniya-mit",
      label: "LinkedIn",
    },
    {
      icon: <EmailIcon />,
      href: "mailto:jadejadhruvrajsinh@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        bgcolor: "background.paper",
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
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="animate-on-scroll"
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              className="animate-on-scroll"
              style={{ animationDelay: "0.1s" }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Contact Information
              </Typography>

              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mr: 2,
                      mt: 0.5,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {info.title}
                    </Typography>
                    {info.href ? (
                      <Typography
                        component="a"
                        href={info.href}
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          textDecoration: "none",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {info.content}
                      </Typography>
                    ) : (
                      <Typography variant="body1" color="text.secondary">
                        {info.content}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}

              <Typography
                variant="h5"
                component="h3"
                sx={{ mt: 4, mb: 2 }}
                fontWeight="bold"
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={link.icon}
                    sx={{
                      borderRadius: "9999px",
                      px: 2,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                bgcolor: "background.paper",
                borderRadius: 2,
              }}
              className="animate-on-scroll"
              style={{ animationDelay: "0.2s" }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                Send Me a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: "9999px",
                  }}
                >
                  Send Message
                </Button>
              </form>
              {status.message && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: "center",
                    color:
                      status.type === "success" ? "success.main" : "error.main",
                  }}
                >
                  {status.message}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
