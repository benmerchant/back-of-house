/*
 * Title: ~/components/linkLister/linkLister.API.js
 *
 * Description: declare routes for linkLister
 *              attach them to Express Router
 * Author: Ben Merchant
*/

const router = require('express').Router();

const linkListerRouter = router;

linkListerRouter.get('/', (req,res,next) => {
  res.json({message: 'LinkLister GET route'});
});

module.exports = linkListerRouter;
