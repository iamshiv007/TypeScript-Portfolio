import { NextApiRequest, NextApiResponse } from "next";

import { connectDb } from "../../../database/connect";
import { Feedback } from "../../../models/feedback";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, rating } = req.body;

    if (!name || !rating)
      return res
        .status(400)
        .json({ success: false, message: "Name and Rating Required?" });

    try {
      connectDb();
      const feedback = await Feedback.create(req.body);

      res
        .status(200)
        .json({ success: true, message: "Thanks for Your Feedback", feedback });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message:
          (error as any).response.data.message ||
          (error as { message: string }).message ||
          "",
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
