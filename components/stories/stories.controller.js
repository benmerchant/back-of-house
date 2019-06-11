/**
 * @filename ~/components/stories/stories.controller.js
 * @fileoverview response callback functions for the
 * Stories route methods
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 11, 2019
*/

module.exports = {
  // GET all Stories links
  getAllStories: (req,res) => {
    res.json({message: 'Stories GET all links route111'});
  },
  // GET one Stories link by id
  getOneStories: (req,res,next) => {
    res.json({message: 'Stories GET one route1'});
  },
  // Create a new Stories link
  createNewStories: (req,res) => {
    res.json({message: 'Stories POST route1'});
  },
  // Update a Stories link by id
  updateOneStories: (req,res) => {
    res.json({message: 'Stories PUT route1'});
  },
  // Delete a Stories link by id
  deleteOneStories: (req,res) => {
    res.json({message: 'Stories DELETE route1'});
  }
}
