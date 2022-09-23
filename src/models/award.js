import mongoose from "mongoose";
const { Schema } = mongoose;

import isValidAwardType from "../helpers/model/award";

const awardTypeSchema = Schema({
  awardType: {
    type: String,
    required: [true, "award type is required"],
    min: 3,
    validate: [isValidAwardType, "Please enter valid award type"],
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Award", awardTypeSchema);
