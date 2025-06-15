require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// OpenWeather API configuration
const OPENWEATHER_API_KEY = "01a34d81cc2fd1e3ca964dadf75616af";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get current weather
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Get 5-day forecast
app.get('/api/forecast/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forecast data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 