const mongoose = require('mongoose');

// need to add a DATEMODIFIED member with subdocuments: basically a changelog
const LinkListerSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, 'What is the URL?']
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('LinkLister', LinkListerSchema);
