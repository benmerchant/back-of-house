/**
 * @filename ~/components/stories/stories.API.js
 * @fileoverview declare routes for stories
 * and attach them to the Express Router
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 10, 2019
*/
const router = require('express').Router();

const storiesRouter = router;

// GET all Stories links
storiesRouter.get('/', (req,res) => {
  res.json({message: 'Stories GET all links route'});
});
// GET one Stories link by id
storiesRouter.get('/:id', (req,res,next) => {
  res.json({message: 'Stories GET one route'});
});
// Create a new Stories link
storiesRouter.post('/', (req,res) => {
  res.json({message: 'Stories POST route'});
});
// Update a Stories link by id
storiesRouter.put('/:id', (req,res) => {
  res.json({message: 'Stories PUT route'});
});
// Delete a Stories link by id
storiesRouter.delete('/:id', (req,res) => {
  res.json({message: 'Stories DELETE route'});
});

module.exports = storiesRouter;
