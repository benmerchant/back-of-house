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
// import the controller
const LinkListerController = require('./linklister.controller');

const linkListerRouter = router;

// GET all LinkLister links
linkListerRouter.get('/', LinkListerController.getAllLinkLister);
// GET one LinkLister link by id
linkListerRouter.get('/:id', LinkListerController.getOneLinkLister);
// Create a new LinkLister link
linkListerRouter.post('/', LinkListerController.createNewLinkLister);
// Update a LinkLister link by id
linkListerRouter.put('/:id', LinkListerController.updateOneLinkLister);
// Delete a LinkLister link by id
linkListerRouter.delete('/:id', LinkListerController.deleteOneLinkLister);

module.exports = linkListerRouter;
