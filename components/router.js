/**
 * @filename ~/components/router.js
 * @fileoverview Description: main API router declaration
 * exported as a function that accepts the Express app
 * object as it's only argument
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 10, 2019
*/
const router = require('express').Router();
const LinkListerAPI = require('./linkLister/linkLister.API');
const StoriesAPI = require('./stories/stories.API');

/**
 * define API route
 * attachefeatures API declarations to Express
 * @param {Express} app
 *
 */
module.exports = (app) => {

  const apiRouter = router;

  apiRouter.use('/linkLister', LinkListerAPI);
  apiRouter.use('/stories', StoriesAPI);

  app.use('/api', apiRouter);
};
