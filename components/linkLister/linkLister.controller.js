/**
 * @filename ~/components/linkLister/linkLister.controller.js
 * @fileoverview response callback functions for the
 * LinkLister route methods
 *
 * @author Ben Merchant
 * @licence MIT
 * @copyright June 11, 2019
 */
// dependencies
const _ = require('lodash');
// import Mongoose model
/**
* @typedef {Mongoose.Schema} {(
*            url:string,
*            dateAdded:Date,
*            description:string
*          )}
*/
/** @type {Mongoose.Schema} */
const LinkListerModel = require('./linkLister.model');

// object for validation errors
const ValidationErrors = [];

module.exports = {
  createNewLinkLister: [ // Create a new LinkLister link
    (req,res,next) => { // My own little validation
      if(_.isEmpty(req.body))
        ValidationErrors.push({message: 'Somehow there was nothing in the request body!'});
      next();
    },
    (req,res) => {
      if(!_.isEmpty(ValidationErrors))
        return res.status(400).json({ errors: ValidationErrors });
      else {
        // description isn't required
        if(_.isEmpty(req.body.description)){
          const NewLinkLister = new LinkListerModel({url: req.body.url});
          res.status(200).json({
            message:'Success - url only',
            link: NewLinkLister
          });
        } else {
          const NewLinkLister = new LinkListerModel({
            url: req.body.url,
            description: req.body.description
          });
          res.status(200).json({
            message:'Success - url & description only',
            link: NewLinkLister
          })
        }
      }
    }
  ],
  // GET all LinkLister links
  getAllLinkLister: (req,res) => {
    res.json({message: 'LinkLister GET all links route111'});
  },
  // GET one LinkLister link by id
  getOneLinkLister: (req,res,next) => {
    res.json({message: 'LinkLister GET one route1'});
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
