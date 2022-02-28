import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default Home;
