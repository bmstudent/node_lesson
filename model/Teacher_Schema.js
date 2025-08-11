import mongoose from "mongoose";

const Teacher_Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  subject: {
    type: String,
  },
  phone: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
  },
});

const Teacher = mongoose.model("Teacher", Teacher_Schema);

export default Teacher;
