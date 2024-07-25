const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let weatherData = [];

app.post('/weather', (req, res) => {
  const data = req.body;
  weatherData.push(data);
  res.status(201).send('Weather data added');
});

app.get('/weather', (req, res) => {
  res.status(200).json(weatherData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
