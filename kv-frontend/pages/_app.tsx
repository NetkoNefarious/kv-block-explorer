import "../styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import MenuHeader from "../components/MenuHeader";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
