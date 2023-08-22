import mongoose, { Document, Model, Schema } from "mongoose";

interface IFeedback extends Document {
  name: string;
  email: string;
  rating: number;
  good: string;
  bad: string;
  suggetion: string;
}

const feedbackSchema: Schema<IFeedback> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  good: {
    type: String,
  },
  bad: {
    type: String,
  },
  suggetion: {
    type: String,
  },
});

export const Feedback: Model<IFeedback> = mongoose.model<IFeedback>(
  "Secondfeedback",
  feedbackSchema
);
