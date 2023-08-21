import React from "react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/cssGrid.css";
import "../styles/Home.module.css";

import { BlogProvider } from "../contextApi/blogContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
      <Analytics />
    </BlogProvider>
  );
}
