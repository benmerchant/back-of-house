/**
 * @filename ~/components/stories/stories.controller.js
 * @fileoverview response callback functions for the
 * Stories route methods
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
  *             title:string,
  *             dateAdded:Date, [default]
  *             storyType:string
  *               {enum: ['About', 'Tutorials', 'Projects', 'Articles', 'Blog']},
  *             bodyCopy:string
  *          )}
  */
/** @type {Mongoose.Schema} */
const StoriesModel = require('./stories.model');

// object for validation errors
const ValidationErrors = [];

module.exports = {

  createNewStories: [ // Create a new Stories story
    (req,res,next) => { // My own little validation
      if(_.isEmpty(req.body))
        ValidationErrors.push({message: 'Somehow there was nothing in the request body!'});
      next();
    },
    (req,res,next) => {
      if(!_.isEmpty(ValidationErrors))
        return res.status(400).json({ errors: ValidationErrors });
      else {
        const NewStories = new StoriesModel({
          title: req.body.title,
          bodyCopy: req.body.bodyCopy,
          storyType: req.body.storyType
        });
        const query = NewStories.save();
        query.then((newStory) => {
          console.log(newStory);
          res.status(200).json({
            message:'Success - url & description',
            story: newStory
          });
        }).catch(next);
      }
    }
  ],
  // GET all Stories
  getAllStories: (req,res,next) => {
    const query = StoriesModel.find({});
    const promise = query.exec();
    promise.then((stories) => {
      res.status(200).json({
        message:'Success - here are the stories',
        stories: stories
      });
    }).catch(next);
  },
  // GET one Stories story by id
  getOneStories: (req,res,next) => {
    const query = StoriesModel.findById(req.params.id);
    query.then((story) => {
      if(!story) res.status(404).json({message:'No such document with that _id'});
      res.status(200).json({
        message:'Success - here is your story',
        story: story
      });
    }).catch(next);
  },
  // Update a Stories story by id
  updateOneStories: (req,res,next) => {
    const query = StoriesModel.findByIdAndUpdate(req.params.id,{
      title: req.body.title
    },{new:true});
    query.then((story) => {
      res.status(200).json({
        message:'Success - here is your updated story',
        story: story
      });
    }).catch(next);
  },
  // Delete a Stories story by id
  deleteOneStories: (req,res,next) => {
    const query = StoriesModel.findByIdAndDelete(req.params.id);
    query.then((info) => {
      if(!info) res.status(404).json({message:'No such document with that _id'});
      res.status(200).json({
        message:'Successfully deleted that document. great job',
        info: info
      });
    }).catch(next);
  }
}
