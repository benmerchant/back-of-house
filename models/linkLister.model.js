const mongoose = require('mongoose');

const LinkListerSchema = mongoose.Schema({
  url: String,
  dateAdded: Date,
  description: String,
  dateUpdated: Date
});

module.exports = mongoose.model('LinkLister', LinkListerSchema);
