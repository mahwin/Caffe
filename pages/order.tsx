import type { NextPage } from "next";
import Header from "../components/Header";
import { useState, useMemo, Fragment } from "react";
import Head from "next/head";
const data = [
  { name: "에스프레소", price: 2800 },
  { name: "아메리카노", price: 3000 },
  { name: "카페라떼", price: 3200 },
  { name: "바닐라 라떼", price: 3500 },
];

//상태 state
const formatter = Intl.NumberFormat("ko-KR");

const Order: NextPage = () => {
  const [hasEspresso, setEspresso] = useState(false);
  const [selected, setSelected] = useState<object[]>([]);

  const sum = useMemo(() => {
    return selected.reduce((pre, cur: any) => pre + cur.price, 0);
  }, [selected]);

  return (
    <div className="container">
      <Head>
        <title>주문하기 - Caffe : 온라인 커피 주문</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold mb-2">Order</h1>
      <dl>
        {data.map((item) => {
          return (
            <Fragment key={item.name}>
              <dt>{item.name}</dt>
              <dd className="mb-2">
                {formatter.format(item.price)} 원
                <small>
                  <button
                    onClick={() => {
                      if (selected.includes(item)) {
                        return setSelected(
                          selected.filter((el) => el !== item)
                        );
                      } else {
                        return setSelected([...selected, item]);
                      }
                    }}
                  >
                    [{selected.includes(item) ? "선택 해제" : "선택"}]
                  </button>
                </small>
              </dd>
            </Fragment>
          );
        })}
      </dl>
      <hr className="my-3" />
      <h2 className="font-bold text-2xl mb-1">주문서</h2>
      <ul className="list-unstyled">
        {selected.map((select: any) => {
          return (
            <Fragment key={select.name}>
              <li>{select.name}</li>
            </Fragment>
          );
        })}
      </ul>
      합계 : {formatter.format(sum)}원
      <div>
        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            alert(`${formatter.format(sum)} 원 입니다. 주문하시겠습니까?`);
          }}
        >
          {" "}
          주문하기{" "}
        </button>
      </div>
    </div>
  );
};

export default Order;
