import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { appTheme } from "../theme";
import { store } from "../state/store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={appTheme}>
      <CSSReset />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
