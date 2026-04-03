import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: String,
  completed: {
    type: Boolean,
    default: false,
  }, 
}, { timestamps: true });

export default mongoose.model("Challenge", challengeSchema);