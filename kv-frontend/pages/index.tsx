import type { NextPage } from "next";
import Head from "next/head";
import BlockchainSearch from "../components/BlockchainSearch";
import Footer from "../components/Footer";
// import Result from "../model/Result";
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

        <div className={styles.grid}></div>
      </main>

      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(process.env.BACKEND_URL);
//   const lastAddedBlocks = (await res.json()) as Result<Block>;

//   return {
//     props: {
//       lastAddedBlocks,
//     },
//   };
// }

export default Home;
