/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowecase: true.valueOf,
    unique: true,
  },
  password: {
    type: String,
    required: [true],
  },
});
const userz = mongoose.model("user", userSchema);
module.exports = userz;
