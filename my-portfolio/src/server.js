import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve static files from React dist
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// Route to return all projects
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Manager',
      author: 'Xavier',
      description: 'Springboot Application to create a Hospital Management Application.',
      languages: ['Springboot', 'Java'],
      technologies: ['Rest API', 'SwaggerUI'],
      link: '#'
    },
    {
      id: 2,
      title: 'Werewolf Testing Application',
      author: 'Xavier',
      description: 'Angular Typescript application to test in-house data.',
      languages: ['Angular', 'TypeScript'],
      technologies: ['AWS Lambda', 'DynamoDB'],
      link: '#'
    }
  ];
  res.json(projects);
});

// Route to fetch weather data
app.get('/api/weather', async (req, res) => {
  const API_KEY = '3c88f2d9a8548cecb14336e3dd247e8e';
  const CITY = 'Nova Scotia, Canada';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    console.log('Weather API Response:', data);

    const weatherInfo = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
    };

    res.json(weatherInfo);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Redirect all other requests to React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
