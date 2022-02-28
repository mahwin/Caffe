import type { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";
const Hiring: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>고용 - Caffe : 온라인 커피 주문</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">Hiring</h1>
      <p>Caffe에서는 언제나 새로운 직원을 뽑고 있습니다!</p>
    </div>
  );
};

export default Hiring;
