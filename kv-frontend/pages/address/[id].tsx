import { GetServerSideProps } from "next";
import AddressTable, { AddressTableProps } from "../../components/AddressTable";
import Address from "../../model/Address";
import Result from "../../model/Result";
import styles from "../../styles/Container.module.scss";

const Address = ({ address }: AddressTableProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Address search results</h1>
        <AddressTable address={address} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const addressId: string = typeof params?.id === "string" ? params.id : "";
  const res = await fetch(
    process.env.BACKEND_URL + `getaddressinfo?address=${addressId}`
  );
  const addressResult = (await res.json()) as Result<Address>;

  return {
    props: {
      address: addressResult.result,
    },
  };
};

export default Address;
