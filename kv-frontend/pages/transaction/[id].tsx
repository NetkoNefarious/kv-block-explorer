import type { GetServerSideProps } from "next";
import DataTable from "../../components/DataTable";
import Result from "../../model/Result";
import Transaction from "../../model/Transaction";

type TransactionProps = {
  transaction: Transaction;
};

const txToData = (transaction: Transaction) => ({
  id: transaction.txid,
  hash: transaction.hash,
});

const Transaction = ({ transaction }: TransactionProps) => {
  return <DataTable object={txToData(transaction)} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const txid: string = typeof params?.id === "string" ? params.id : "";
  const res = await fetch(
    process.env.BACKEND_URL + `getrawtransaction?txid=${txid}&verbose=1`
  );
  const resultJson = (await res.json()) as Result<Transaction>;

  return {
    props: {
      transaction: resultJson.result,
    },
  };
};

export default Transaction;
