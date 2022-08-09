const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { applicationStatus } = require("../utils/consts");

// Create User Schema
const ApplicationSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    applicationType: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      required: true,
      default: applicationStatus.initialised,
    },
    value: {
      type: Number,
      required: true,
    },
    adhaarNumber: {
      type: Number,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
  },
  { collection: "application" }
);

module.exports = User = mongoose.model("application", ApplicationSchema);
