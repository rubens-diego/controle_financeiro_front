import { AuthContext, AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { useContext, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ligth } from "../styles/thems/ligth";
import { dark } from "../styles/thems/dark";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={dark}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
