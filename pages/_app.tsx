import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import ShifumiProvider from "context/ShifumiProvider";
import Head from "next/head";
import Layout from "components/layout/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shifumi</title>
        <meta name="description" content="Shifumi" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <React.Fragment>
        <ShifumiProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShifumiProvider>
      </React.Fragment>
    </>
  );
}
