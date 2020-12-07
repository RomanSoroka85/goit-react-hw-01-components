import React from "react";
import TransactionTbody from "./TransactionTbody";
import TransactionThead from "./TransactionThead";
import s from "./transaction.module.css";

const Transaction = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <TransactionThead />
      {transactions.map((transaction) => {
        return <TransactionTbody {...transaction} key={transactions.id} />;
      })}
    </table>
  );
};

export default Transaction;
