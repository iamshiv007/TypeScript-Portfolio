import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET")
      return res.send({
        success: false,
        message: `${req.method} Method Not Allowed`,
      });

    const config = {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    };

    const url = `https://api.pexels.com/v1/curated?page=${1}`;

    const { data } = await axios.get(url, config);

    res.send({ success: true, photos: data.photos });
  } catch (error) {
    let errorMessage: string;
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else {
      errorMessage = (error as Error).toString();
    }
    res.send({
      success: false,
      message: errorMessage,
    });
  }
}