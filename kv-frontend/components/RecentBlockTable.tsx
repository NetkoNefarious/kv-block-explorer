import Link from "next/link";
import { Table } from "semantic-ui-react";
import { RecentBlock } from "../model/RecentBlock";

export type RecentBlocksProps = {
  recentBlocks: RecentBlock[];
};

const LastBlockTable = ({ recentBlocks }: RecentBlocksProps) => {
  return (
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Height</Table.HeaderCell>
          <Table.HeaderCell>Timestamp</Table.HeaderCell>
          <Table.HeaderCell>Tx. count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {recentBlocks.map((b) => (
          <Table.Row key={b.height}>
            <Table.Cell>
              <Link href={`/block/${b.height}`}>{b.height.toString()}</Link>
            </Table.Cell>
            <Table.Cell>
              {new Date(b.timestamp).toLocaleString("hr-HR")}
            </Table.Cell>
            <Table.Cell>{b.tx_count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default LastBlockTable;
