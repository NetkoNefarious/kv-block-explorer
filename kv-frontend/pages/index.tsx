import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import BlockchainSearch from "../components/BlockchainSearch";
import RecentBlocksTable, {
  RecentBlocksProps,
} from "../components/RecentBlockTable";
import RecentTransactionTable, {
  RecentTransactionProps,
} from "../components/RecentTransactionTable";
import { RecentBlock } from "../model/RecentBlock";
import { RecentTransaction } from "../model/RecentTransaction";
import styles from "../styles/Container.module.scss";

const Home = ({
  recentBlocks,
  recentTransactions,
}: RecentBlocksProps & RecentTransactionProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Block Explorer</h1>

        <BlockchainSearch />

        <section className={styles.recentData}>
          <div className={styles.recentBlocks}>
            <h1>Last 6 blocks</h1>
            <RecentBlocksTable recentBlocks={recentBlocks} />
          </div>
          <div className={styles.recentTransactions}>
            <h1>Last 6 transactions in the mempool</h1>
            <RecentTransactionTable recentTransactions={recentTransactions} />
          </div>
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.MEMPOOL_URL + "blocks");
  const recentBlocks = (await res.json()) as RecentBlock[];

  const resMempool = await fetch(process.env.MEMPOOL_URL + "mempool/recent");
  const recentTransactions = (await resMempool.json()) as RecentTransaction[];

  return {
    props: {
      recentBlocks: recentBlocks.slice(0, 6),
      recentTransactions: recentTransactions.slice(0, 6),
    },
  };
};

export default Home;
