import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";

const Introduce: NextPage = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="text-3xl">Introduce</h1>
    </div>
  );
};

export default Introduce;
