/**
 * @filename ~/components/linkLister/linkLister.API.js
 * @fileoverview declare routes for linkLister
 * and attach them to the Express Router
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 10, 2019
*/
const router = require('express').Router();

const linkListerRouter = router;

// GET all LinkLister links
linkListerRouter.get('/', (req,res) => {
  res.json({message: 'LinkLister GET all links route'});
});
// GET one LinkLister link by id
linkListerRouter.get('/:id', (req,res,next) => {
  res.json({message: 'LinkLister GET one route'});
});
// Create a new LinkLister link
linkListerRouter.post('/', (req,res) => {
  res.json({message: 'LinkLister POST route'});
});
// Update a LinkLister link by id
linkListerRouter.put('/:id', (req,res) => {
  res.json({message: 'LinkLister PUT route'});
});
// Delete a LinkLister link by id
linkListerRouter.delete('/:id', (req,res) => {
  res.json({message: 'LinkLister DELETE route'});
});

module.exports = linkListerRouter;
