import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from "../components/Header";

import { theme } from '../styles/theme';

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import "../styles/slider.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp