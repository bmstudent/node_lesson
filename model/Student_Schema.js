import mongoose from "mongoose";

const Student_Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    class: {
      type: String,
    },
    phone: {
      type: String,
      trim: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Student = mongoose.model("Student", Student_Schema);

export default Student;
