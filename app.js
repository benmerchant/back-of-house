/*
 * Title: ~/app.js
 *
 * Description: 1. ExpressJS object instantiation
 *              2. API initialization
 *
 * Author: Ben Merchant
*/

const express = require('express');
// import API routes
const API_Router = require('./components/router');
console.log('app (ExpressJS) is starting up...');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// import ALL routes here
API_Router(app);

// handle 404s
app.use((req, res, next) => {
  res.status(404);
  res.json('404 - error');
});

// export the app object
module.exports = app;
