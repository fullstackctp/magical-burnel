import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Card from "../components/Card";
import List from "../components/List";
import { ItemInterface } from "../interfaces/item";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: data,
  };
};

function Home({ products }: { products: ItemInterface[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{ marginBottom: "30px", color: "#fff", fontSize: "30px" }}>
          <h1>Product Listings</h1>
        </div>
        <List products={products} />
      </main>
    </>
  );
}

export default Home;
