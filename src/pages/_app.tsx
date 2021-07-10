import "styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ClientSessionProvider from "context/ClientSessionProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientSessionProvider>
      <Component {...pageProps} />
    </ClientSessionProvider>
  );
}
export default MyApp;
