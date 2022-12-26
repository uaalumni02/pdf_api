import mongoose from "mongoose";
const { Schema } = mongoose;

const certificateInformationSchema = mongoose.Schema({
  certificateDate: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    min: 2,
    max: 30,
  },
  awardType: {
    type: Schema.Types.ObjectId,
    ref: "Award",
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Certficate", certificateInformationSchema);
