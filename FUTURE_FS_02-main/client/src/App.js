import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  ThemeProvider,
  createTheme,
  
  CssBaseline,
} from '@mui/material';
import { Search as SearchIcon, Favorite, FavoriteBorder } from '@mui/icons-material';
import axios from 'axios';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: 'rgba(30, 30, 30, 0.8)',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(30, 30, 30, 0.8)',
          borderRadius: '15px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
      },
    },
  },
});

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleSearch = async () => {
    try {
      setError('');
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`http://localhost:5000/api/weather/${city}`),
        axios.get(`http://localhost:5000/api/forecast/${city}`),
      ]);
      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (err) {
      setError('City not found. Please try again.');
    }
  };

  const toggleFavorite = () => {
    if (!weather) return;
    
    const newFavorites = favorites.includes(city)
      ? favorites.filter(fav => fav !== city)
      : [...favorites, city];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const getWeatherIcon = (weatherCode) => {
    const icons = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '🌨️',
      '13n': '🌨️',
      '50d': '🌫️',
      '50n': '🌫️',
    };
    return icons[weatherCode] || '🌤️';
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 4,
          pb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: 'bold',
                mb: 4,
              }}
            >
              Weather Dashboard
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 1, 
                mb: 4, 
                justifyContent: 'center',
                '& .MuiTextField-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                },
              }}
            >
              <TextField
                label="Enter city name"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                sx={{ width: '300px' }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                startIcon={<SearchIcon />}
                sx={{
                  borderRadius: '10px',
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                }}
              >
                Search
              </Button>
            </Box>

            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            {weather && (
              <Card sx={{ 
                mb: 4, 
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.9) 0%, rgba(33, 203, 243, 0.9) 100%)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ color: 'white' }}>
                      {weather.name}, {weather.sys.country}
                    </Typography>
                    <IconButton onClick={toggleFavorite} sx={{ color: 'white' }}>
                      {favorites.includes(city) ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                  <Typography variant="h2" sx={{ my: 2, color: 'white' }}>
                    {Math.round(weather.main.temp)}°C
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {weather.weather[0].description}
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={4}>
                      <Typography sx={{ color: 'white' }}>Humidity: {weather.main.humidity}%</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ color: 'white' }}>Wind: {weather.wind.speed} m/s</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ color: 'white' }}>Pressure: {weather.main.pressure} hPa</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}

            {forecast && (
              <Grid container spacing={2}>
                {forecast.list.slice(0, 5).map((item, index) => (
                  <Grid item xs={12} sm={6} md={2.4} key={index}>
                    <Card sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                          {new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                        </Typography>
                        <Typography variant="h4" sx={{ my: 1, color: 'white' }}>
                          {Math.round(item.main.temp)}°C
                        </Typography>
                        <Typography sx={{ fontSize: '2rem' }}>
                          {getWeatherIcon(item.weather[0].icon)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          {item.weather[0].description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {favorites.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Favorite Cities
                </Typography>
                <Grid container spacing={2}>
                  {favorites.map((favCity) => (
                    <Grid item xs={12} sm={6} md={4} key={favCity}>
                      <Card sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}>
                        <CardContent>
                          <Typography variant="h6" sx={{ color: 'white' }}>{favCity}</Typography>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => {
                              setCity(favCity);
                              handleSearch();
                            }}
                            sx={{
                              mt: 1,
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: 'white',
                              '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              },
                            }}
                          >
                            View Weather
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 