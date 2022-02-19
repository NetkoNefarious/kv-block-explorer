import type { NextPage } from "next";
import Head from "next/head";
import BlockchainSearch from "../components/BlockchainSearch";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Block Explorer</title>
        <meta name="description" content="Block Explorer Seminar" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Block Explorer</h1>

        <BlockchainSearch />
      </main>
    </div>
  );
};

export default Home;
