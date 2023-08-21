import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { connectDb } from "../../../database/connect";
import { Mail } from "../../../models/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    connectDb();
    const { name, email, message, subject } = req.body;

    // Replace these with your actual email service settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SENDER_GMAIL_ID,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_GMAIL_ID,
      to: process.env.RECEIVER_GMAIL_ID,
      subject,
      text: `name = ${name}, email = ${email}, message = ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      const mail = await Mail.create(req.body);
      res.status(200).json({ mail: mail, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
