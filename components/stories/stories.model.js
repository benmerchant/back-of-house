const mongoose = require('mongoose');

// need to add a DATEMODIFIED member with subdocuments: basically a changelog
const StorySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'You forgot a title for the story']
  },
  storyType: {
    type: String,
    enum: ['About', 'Tutorials', 'Projects', 'Aritcles', 'Blog'],
    required: [true, 'Should never see this. Use dropdown menu in client app.']
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  bodyCopy: {
    type: String,
    required: [true, 'You didn\'t even tell us a story yet!!!']
  }
});

module.exports = mongoose.model('Story', StorySchema);
