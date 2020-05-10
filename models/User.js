const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id: { type: mongoose.SchemaTypes.ObjectId, required: true, index: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.Now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
