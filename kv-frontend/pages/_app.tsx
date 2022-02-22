import "../styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import MenuHeader from "../components/MenuHeader";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Block Explorer</title>
        <meta name="description" content="Block Explorer Seminar" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MenuHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
