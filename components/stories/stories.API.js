/*
 * Title: ~/components/stories/stories.API.js
 *
 * Description: declare routes for stories
 *              attach them to Express Router
 *
 * Author: Ben Merchant
*/

const router = require('express').Router();

const storiesRouter = router;

storiesRouter.get('/', (req,res,next) => {
  res.json({message: 'Stories GET route'});
});

module.exports = storiesRouter;
