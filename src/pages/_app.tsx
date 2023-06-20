import "@growchief/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
