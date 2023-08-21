import mongoose, { Schema, Document, Model } from "mongoose";

interface IMail extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const mailSchema: Schema<IMail> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Mail: Model<IMail> = mongoose.model<IMail>(
  "SecondMail",
  mailSchema
);
