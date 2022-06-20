const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    designation: { type: String, default: "" },
    Province: { type: String },
    District: { type: String },
    CitizenshipFront: { type: String, default: "" },
    CitizenshipBack: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

// {
//   phone: { type: Number, required: true, unique: true },
//   password: { type: String, required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },

//   profilePic: { type: String, default: "" },
//   designation: { type: String ,default: ""},
//   Province: { type: String },
//   District: { type: String },
//   CitizenshipFront: { type: String, default: "" },
//   CitizenshipBack: { type: String, default: "" },
// },
