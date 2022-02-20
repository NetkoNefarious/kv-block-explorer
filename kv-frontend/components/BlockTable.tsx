import Link from "next/link";
import React from "react";
import { Table, TableCell } from "semantic-ui-react";
import { BlockProps } from "../pages/block/[id]";
import tableStyles from "../styles/Table.module.scss";

const BlockTable = ({ blockStats, block }: BlockProps) => {
  const time = new Date(blockStats.time * 1000);

  return (
    <Table inverted className={tableStyles.table}>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>Hash</Table.HeaderCell>
          <Table.Cell>{blockStats.blockhash}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Block height</Table.HeaderCell>
          <Table.Cell>{blockStats.height}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.Cell>{time.toLocaleString("hr-HR")}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Transactions</Table.HeaderCell>
          <Table.Cell>
            {block.tx.map((tx) => (
              <>
                <Link href={`/transaction/${tx}`}>{tx}</Link>
                <br />
              </>
            ))}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default BlockTable;
