import type { GetServerSideProps } from "next";
import BlockTable from "../../components/BlockTable";
import Result from "../../model/Result";
import BlockStats from "../../model/BlockStats";
import styles from "../../styles/Container.module.scss";

export type BlockProps = {
  blockStats: BlockStats;
};

const Block = ({ blockStats }: BlockProps) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Block search results</h1>
      <BlockTable blockStats={blockStats} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blockId: string = typeof params?.id === "string" ? params.id : "";
  const res = await fetch(
    process.env.BACKEND_URL + `getblockstats?hash_or_height=${blockId}`
  );
  const blockStatsResult = (await res.json()) as Result<any>;

  return {
    props: {
      blockStats: blockStatsResult.result,
    },
  };
};

export default Block;
