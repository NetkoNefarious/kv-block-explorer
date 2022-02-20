import Link from "next/link";
import { Table } from "semantic-ui-react";
import { RecentTransaction } from "../model/RecentTransaction";

export type RecentTransactionProps = {
  recentTransactions: RecentTransaction[];
};

const RecentTransactionTable = ({
  recentTransactions,
}: RecentTransactionProps) => {
  return (
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Txid</Table.HeaderCell>
          <Table.HeaderCell>Fee</Table.HeaderCell>
          <Table.HeaderCell>Vsize</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {recentTransactions.map((tx) => (
          <Table.Row key={tx.txid}>
            <Table.Cell>
              <Link href={`/transaction/${tx.txid}`}>{tx.txid}</Link>
            </Table.Cell>
            <Table.Cell>{tx.fee}</Table.Cell>
            <Table.Cell>{tx.vsize}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default RecentTransactionTable;
