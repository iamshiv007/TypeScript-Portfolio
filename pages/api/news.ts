import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

interface GoogleNewsApiResponse {
  articles: Article[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { category, lang, country, max } = req.query;

    if (req.method !== "GET")
      return res.send({
        success: false,
        message: `${req.method} Method Not Allowed`,
      });

    const apikey = process.env.GOOGLE_NEWS_API_KEY;

    const url =
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=${max}&apikey=` +
      apikey;

    const { data } = await axios.get<GoogleNewsApiResponse>(url);

    res.send({ success: true, articles: data.articles });
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
