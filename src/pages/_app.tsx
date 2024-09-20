import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/toolbar.css";
import "@/styles/mainPage.css";
import "@/styles/aboutPage.css";
import "@/styles/servicePage.css";
import "@/styles/fonts.css";

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
