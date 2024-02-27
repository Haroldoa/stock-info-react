import React from "react";
import Card from "../Cards/Card";

type Props = {};

const CardList = (props: Props) => {
  return (
    <>
    <Card companyName="Apple" ticker="AAPL" price={100}/>
    <Card companyName="Microsoft" ticker="MSFT" price={200}/>
    <Card companyName="Tesla" ticker="TSLA" price={300}/>
    </>
  );
}
export default CardList;