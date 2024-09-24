import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/musician/toolbar.css";
import "@/styles/musician/mainPage.css";
import "@/styles/musician/aboutPage.css";
import "@/styles/musician/servicePage.css";
import "@/styles/musician/media.css";
import "@/styles/fonts.css";

import 'swiper/swiper-bundle.css'; // Para importar todos los estilos
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
