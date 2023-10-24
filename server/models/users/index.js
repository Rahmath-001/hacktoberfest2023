import mongoose from "mongoose";

//This is Main User Schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    maxlength: 30,
    minlength: 2,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    maxlength: 500,
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
});

const userModel = new mongoose.model("Users", userSchema, "users");

export default userModel;