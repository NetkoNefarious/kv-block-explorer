import { Table } from "semantic-ui-react";
import Address from "../model/Address";
import tableStyles from "../styles/Table.module.scss";

export type AddressTableProps = {
  address: Address;
};

const AddressTable = ({ address }: AddressTableProps) => {
  return (
    <Table inverted className={tableStyles.table}>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.Cell>{address.address}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>ScriptPubKey</Table.HeaderCell>
          <Table.Cell>{address.scriptPubKey}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Witness?</Table.HeaderCell>
          <Table.Cell>{address.iswitness ? "True" : "False"}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default AddressTable;
