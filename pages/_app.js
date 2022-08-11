// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/react";
import "@fontsource/montserrat";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
