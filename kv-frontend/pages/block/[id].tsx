import type { GetServerSideProps } from "next";
import BlockTable from "../../components/BlockTable";
import Result from "../../model/Result";
import BlockStats from "../../model/BlockStats";
import styles from "../../styles/Container.module.scss";
import { Block } from "../../model/Block";

export type BlockProps = {
  blockStats: BlockStats;
  block: Block;
};

const Block = ({ blockStats, block }: BlockProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Block search results</h1>
        <BlockTable blockStats={blockStats} block={block} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blockId: string = typeof params?.id === "string" ? params.id : "";
  const res = await fetch(
    process.env.BACKEND_URL + `getblockstats?hash_or_height=${blockId}`
  );
  const blockStatsResult = (await res.json()) as Result<BlockStats>;

  const resBlock = await fetch(
    process.env.BACKEND_URL +
      `getblock?blockhash=${blockStatsResult.result.blockhash}`
  );
  const blockResult = (await resBlock.json()) as Result<Block>;

  return {
    props: {
      blockStats: blockStatsResult.result,
      block: blockResult.result,
    },
  };
};

export default Block;
