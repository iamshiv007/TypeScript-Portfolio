import React, { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Theme from "../utils/Theme";
const Navbar = dynamic(() => import("../layout/Navbar"));
const MobileNavbar = dynamic(() => import("../layout/mobileNavbar"));
const ChatSystem = dynamic(() => import("../utils/ChatSystem"));
const Intro = dynamic(() => import("../sections/Intro"));
const SocialMedia = dynamic(() => import("../utils/SocialMedia"));
const Skills = dynamic(() => import("../sections/Skills"));
const Projects = dynamic(() => import("../sections/Projects"));
const LatestBlogs = dynamic(() => import("../sections/LatestBlogs"));
const Journey = dynamic(() => import("../sections/Journey"));
const Apps = dynamic(() => import("../sections/Apps"));
const SendMail = dynamic(() => import("../utils/SendMail"));
const Footer = dynamic(() => import("../layout/Footer"));
const Feedback = dynamic(() => import("../utils/Feedback"));

const Home: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Shiv&apos;s Portfolio</title>
        {/* Primary Meta Tags */}
        <meta content="Shiv's Portfolio" name="title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
          name="description"
        />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="og:url" />
        <meta content="Shiv's Portfolio" property="og:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="og:description"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="og:image"
        />

        {/* Twitter */}
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="twitter:card"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app"
          property="twitter:url"
        />
        <meta content="Shivraj Gurjar - Portfolio" property="twitter:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="twitter:description"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="twitter:image"
        />

        {/* Other Meta Tags */}
        <meta
          content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
          name="keywords"
        />
        <meta content="Shivraj Gurjar" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* Favicon */}
        <link
          href="https://shiv-s-portfolio.vercel.app/favicon.ico"
          rel="icon"
          type="image/x-icon"
        />
      </Head>
      <Theme>
        <div className="dark:bg-gray-700 ">
          {/* Navbar */}
          <Navbar />
          {/* Mobile Navbar */}
          <MobileNavbar />
          {/* Intro */}
          <Intro />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Latest Blogs */}
          <LatestBlogs />
          {/* Journey */}
          <Journey />
          {/* Apps */}
          <Apps />
          {/* SendMail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          {/* ChatSystem */}
          <ChatSystem />
          {/* Feedback Modal */}
          <Feedback />
        </div>
      </Theme>
    </Fragment>
  );
};

export default Home;
