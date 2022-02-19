import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  Select,
  Input,
  InputOnChangeData,
  DropdownProps,
} from "semantic-ui-react";

import styles from "../styles/BlockchainSearch.module.scss";

const options = [
  { key: "transactions", text: "Transactions", value: "transaction" },
  { key: "blocks", text: "Blocks", value: "block" },
  { key: "addresses", text: "Addresses", value: "address" },
];

const BlockchainSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<string>("transaction");

  const handleDropdownChange = (
    _event: React.SyntheticEvent<HTMLElement, Event>,
    { value }: DropdownProps
  ) => (typeof value === "string" ? setType(value) : "");

  const handleTextChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => setQuery(value);

  const handleClick = () => {
    router.push(`${type}/${query}`);
  };

  return (
    <div className={styles.searchBar}>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleTextChange}
        defaultValue={query}
      >
        <input />
        <Select
          options={options}
          defaultValue={type}
          onChange={handleDropdownChange}
        />
        <Button type="submit" onClick={handleClick}>
          Search
        </Button>
      </Input>
    </div>
  );
};

export default BlockchainSearch;
