/*
 * Title: ~/components/router.js
 *
 * Description: main API router declaration
 *              exported as a function that accepts the Express app object as
 *              it's only argument
 *
 * Author: Ben Merchant
*/

const router = require('express').Router();
const LinkListerAPI = require('./linkLister/linkLister.API');
const StoriesAPI = require('./stories/stories.API');

/**
 * attaches API declarations to Express
 * @param {Express} app
 *
 */
module.exports = (app) => {

  const apiRouter = router;

  // test route - remove when we start using POSTMAN
  apiRouter.get('/', (req, res, next) => {
    res.json({message: 'This is the home API route'});
  });
  // test route - remove when we start using POSTMAN



  apiRouter.use('/linkLister', LinkListerAPI);
  apiRouter.use('/stories', StoriesAPI);



  app.use('/api', apiRouter);

};
