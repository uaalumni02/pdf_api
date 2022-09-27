import mongoose from "mongoose";
const { Schema } = mongoose;

const certificateInformationSchema = mongoose.Schema({
  certificateDate: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    min: 2,
    max: 15,
  },
  lastName: {
    type: String,
    min: 2,
    max: 15,
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
