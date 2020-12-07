import React from "react";
import s from "./transaction.module.css"

const TransactionThead = () => {
  return (
    <thead className={s.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

export default TransactionThead;
