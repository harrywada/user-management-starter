const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  imageURL: {
    type: String,
    required: true
  },
  activated: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
