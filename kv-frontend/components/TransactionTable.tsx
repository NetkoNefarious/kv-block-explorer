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
  const time = new Date(transaction.time * 1000);

  const totalInput =
    inputTransactions
      .flatMap((v) => (v ? v.vout?.map((vo) => vo.value) : []))
      .reduce((prev, curr) => prev ?? 0 + (curr ?? 0), 0) ?? 0;

  const totalOutput =
    transaction.vout
      ?.map((v) => v.value)
      .reduce((prev, curr) => prev + curr, 0) ?? 0;

  return (
    <Table basic="very" className={tableStyles.table}>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>Hash</Table.HeaderCell>
          <Table.Cell>{transaction.txid}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.Cell>{time.toLocaleString("hr-HR")}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Block height</Table.HeaderCell>
          <Table.Cell>{totalInput - totalOutput} BTC</Table.Cell>
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
          <Table.Cell>{transaction.confirmations > 0} BTC</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TransactionTable;
