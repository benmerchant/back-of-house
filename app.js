const express = require('express');
const mongoose = require('mongoose');

console.log('app (ExpressJS) is starting up...');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// hard code routes for now import later
app.get('/', (req, res) => {
  res.send('Heyooooo World');
});
// handle 404s
app.use((req, res, next) => {
  res.status(404);
  res.json('404 - error');
});
// export the app object
module.exports = app;
