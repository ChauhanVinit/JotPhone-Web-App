import { Mulish } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const mulishSans = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "JotPhone - Advanced Business Communication Solutions",
  description: "Explore JotPhone's innovative features for seamless business communication, including AI-driven analytics and real-time collaboration tools.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>JotPhone: The Leading Business Communication Platform</title>
        <meta name="description" content="Stay connected with JotPhone's AI-powered phone systems and SMS solutions. Grow your sales pipeline and deliver fast customer-centric support. Try free for 14 days." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jotphoneweb.netlify.app/" />
      </Head>
      <html lang="en">
        <body
          className={`${mulishSans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
