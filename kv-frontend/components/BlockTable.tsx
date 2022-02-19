import React from "react";
import { Table } from "semantic-ui-react";
import { BlockProps } from "../pages/block/[id]";
import tableStyles from "../styles/Table.module.scss";

const BlockTable = ({ blockStats }: BlockProps) => {
  const time = new Date(blockStats.time * 1000);

  return (
    <Table basic="very" className={tableStyles.table}>
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
      </Table.Body>
    </Table>
  );
};

export default BlockTable;
