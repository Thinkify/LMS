const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    contact: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    adhaar: {
      type: Number,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
  },
  { collection: "user" }
);

module.exports = User = mongoose.model("user", UserSchema);
