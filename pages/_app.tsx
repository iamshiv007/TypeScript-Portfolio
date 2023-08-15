import React from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/cssGrid.css";
import "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
