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
// import the controller
const StoriesController = require('./stories.controller');

const storiesRouter = router;

// GET all Stories links
storiesRouter.get('/', StoriesController.getAllStories);
// GET one Stories link by id
storiesRouter.get('/:id', StoriesController.getOneStories);
// Create a new Stories link
storiesRouter.post('/', StoriesController.createNewStories);
// Update a Stories link by id
storiesRouter.put('/:id', StoriesController.updateOneStories);
// Delete a Stories link by id
storiesRouter.delete('/:id', StoriesController.deleteOneStories);

module.exports = storiesRouter;
