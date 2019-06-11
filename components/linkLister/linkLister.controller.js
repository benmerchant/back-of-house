/**
 * @filename ~/components/linkLister/linkLister.controller.js
 * @fileoverview response callback functions for the
 * LinkLister route methods
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 11, 2019
*/

module.exports = {
  // GET all LinkLister links
  getAllLinkLister: (req,res) => {
    res.json({message: 'LinkLister GET all links route111'});
  },
  // GET one LinkLister link by id
  getOneLinkLister: (req,res,next) => {
    res.json({message: 'LinkLister GET one route1'});
  },
  // Create a new LinkLister link
  createNewLinkLister: (req,res) => {
    res.json({message: 'LinkLister POST route1'});
  },
  // Update a LinkLister link by id
  updateOneLinkLister: (req,res) => {
    res.json({message: 'LinkLister PUT route1'});
  },
  // Delete a LinkLister link by id
  deleteOneLinkLister: (req,res) => {
    res.json({message: 'LinkLister DELETE route1'});
  }
}
