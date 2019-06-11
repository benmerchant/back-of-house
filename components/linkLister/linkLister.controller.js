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
*            dateAdded:Date, [default]
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
    (req,res,next) => {
      if(!_.isEmpty(ValidationErrors))
        return res.status(400).json({ errors: ValidationErrors });
      else {
        // description isn't required
        if(_.isEmpty(req.body.description)){
          const NewLinkLister = new LinkListerModel({url: req.body.url});
          const query = NewLinkLister.save();
          query.then((link) => {
            res.status(200).json({
              message:'Success - url only',
              link: link
            });
          }).catch(next);
        } else {
          const NewLinkLister = new LinkListerModel({
            url: req.body.url,
            description: req.body.description
          });
          const query = NewLinkLister.save();
          query.then((newLink) => {
            console.log(newLink);
            res.status(200).json({
              message:'Success - url & description',
              link: newLink
            });
          }).catch(next);
        }
      }
    }
  ],
  // GET all LinkLister links
  getAllLinkLister: (req,res,next) => {
    const query = LinkListerModel.find({});
    const promise = query.exec();
    promise.then((links) => {
      res.status(200).json({
        message:'Success - here are the links',
        links: links
      });
    }).catch(next);
  },
  // GET one LinkLister link by id
  getOneLinkLister: (req,res,next) => {
    const query = LinkListerModel.findById(req.params.id);
    query.then((link) => {
      if(!link) res.status(404).json({message:'No such document with that _id'});
      res.status(200).json({
        message:'Success - here is your link',
        link: link
      });
    }).catch(next);
  },
  // Update a LinkLister link by id
  updateOneLinkLister: (req,res,next) => {
    const query = LinkListerModel.findByIdAndUpdate(req.params.id,{
      url: req.body.newUrl
    },{new:true});
    query.then((link) => {
      res.status(200).json({
        message:'Success - here is your updated Link',
        link: link
      });
    }).catch(next);
  },
  // Delete a LinkLister link by id
  deleteOneLinkLister: (req,res,next) => {
    const query = LinkListerModel.findByIdAndDelete(req.params.id);
    query.then((info) => {
      if(!info) res.status(404).json({message:'No such document with that _id'});
      res.status(200).json({
        message:'Successfully deleted that document. great job',
        info: info
      });
    }).catch(next);
  }
}
