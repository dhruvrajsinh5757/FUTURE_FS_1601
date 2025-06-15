# Weather Dashboard

A beautiful and functional weather dashboard application built with React.js and Node.js.

## Features

- Search for weather by city name
- Display current weather conditions
- Show 5-day weather forecast
- Save favorite cities for quick access
- Beautiful dark mode UI with Material-UI
- Responsive design for all devices

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenWeather API key

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```
   PORT=5000
   OPENWEATHER_API_KEY=your_api_key_here
   ```

5. Start the development servers:

   In the root directory:
   ```bash
   npm run dev:full
   ```

   This will start both the backend server (port 5000) and the frontend development server (port 3000).

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a city name in the search box
3. View current weather and forecast information
4. Click the heart icon to add/remove cities from favorites
5. Access your favorite cities from the favorites section

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - Axios

- Backend:
  - Node.js
  - Express
  - Axios

## API

The application uses the OpenWeather API for weather data. You can get your API key by signing up at [OpenWeather](https://openweathermap.org/api). 