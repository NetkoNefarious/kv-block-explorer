import Link from "next/link";
import React from "react";
import { Table } from "semantic-ui-react";
import Transaction from "../model/Transaction";
import tableStyles from "../styles/Table.module.scss";

export type TransactionTableProps = {
  transaction: Transaction;
  inputTransactions: Transaction[];
};

const TransactionTable = ({
  transaction,
  inputTransactions,
}: TransactionTableProps) => {
  const time = transaction.time ? new Date(transaction.time * 1000) : undefined;

  const totalInput = inputTransactions
    .flatMap((v) => v.vout?.map((vo) => vo.value))
    .filter((v) => typeof v !== "undefined")
    .reduce((prev, curr) => prev + curr, 0);

  const totalOutput = transaction.vout
    ?.map((v) => v.value)
    .filter((v) => typeof v !== "undefined")
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Table inverted className={tableStyles.table}>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.Cell>{transaction.txid}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Hash</Table.HeaderCell>
          <Table.Cell>{transaction.hash}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.Cell>
            {time?.toLocaleString("hr-HR") ?? "No time set"}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Block hash</Table.HeaderCell>
          <Table.Cell>
            {transaction.blockhash ? (
              <Link href={transaction.blockhash}>{transaction.blockhash}</Link>
            ) : (
              "None"
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Input</Table.HeaderCell>
          <Table.Cell>{totalInput} BTC</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Output</Table.HeaderCell>
          <Table.Cell>{totalOutput} BTC</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Fee</Table.HeaderCell>
          <Table.Cell>{totalInput - totalOutput} BTC</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.Cell>
            {transaction.confirmations > 0 ? "Confirmed" : "Not confirmed"}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TransactionTable;
