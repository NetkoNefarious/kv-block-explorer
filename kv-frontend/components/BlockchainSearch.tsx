import React from "react";
import { Button, Select, Input } from "semantic-ui-react";

import styles from "../styles/BlockchainSearch.module.scss";

const options = [
  { key: "transactions", text: "Transactions", value: "transactions" },
  { key: "blocks", text: "Blocks", value: "blocks" },
  { key: "addresses", text: "Addresses", value: "addresses" },
];

const BlockchainSearch = () => (
  <div className={styles.searchBar}>
    <Input type="text" placeholder="Search..." action>
      <input />
      <Select options={options} defaultValue="transactions" />
      <Button type="submit">Search</Button>
    </Input>
  </div>
);

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.BACKEND_URL);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default BlockchainSearch;