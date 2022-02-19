import { useRouter } from "next/router";
import React, { Component, useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import BlockchainSearch from "./BlockchainSearch";
import styles from "../styles/MenuHeader.module.scss";

const MenuHeader = () => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Menu pointing inverted>
        <Menu.Item name="home" onClick={() => router.push("/")}>
          <h3>Home</h3>
        </Menu.Item>
        <Menu.Menu position="right" className={styles.searchBar}>
          <Menu.Item>
            <BlockchainSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuHeader;
