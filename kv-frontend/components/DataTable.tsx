import { JsonTable } from "react-json-to-html";

const DataTable = (object: any) => {
  return <JsonTable json={object} />;
};

export default DataTable;
