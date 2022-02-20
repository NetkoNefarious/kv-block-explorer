import type { GetServerSideProps } from "next";
import TransactionTable from "../../components/TransactionTable";
import Result from "../../model/Result";
import Transaction from "../../model/Transaction";
import styles from "../../styles/Container.module.scss";

type TransactionProps = {
  transaction: Transaction;
  inputTransactions: Transaction[];
};

const Transaction = ({ transaction, inputTransactions }: TransactionProps) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Transaction</h1>
      <TransactionTable
        transaction={transaction}
        inputTransactions={inputTransactions}
      />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const txid: string = typeof params?.id === "string" ? params.id : "";
  const res = await fetch(
    process.env.BACKEND_URL + `getrawtransaction?txid=${txid}&verbose=1`
  );
  const transactionResult = (await res.json()) as Result<Transaction>;

  const inputTransactions = await Promise.all(
    transactionResult.result.vin.map(async (v) => {
      const inputTx = await fetch(
        process.env.BACKEND_URL + `getrawtransaction?txid=${v.txid}&verbose=1`
      );

      return (await inputTx.json()) as Result<Transaction>;
    })
  );

  return {
    props: {
      transaction: transactionResult.result,
      inputTransactions: inputTransactions.map((r) => r.result),
    },
  };
};

export default Transaction;
