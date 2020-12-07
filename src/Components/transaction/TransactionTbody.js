import React from "react";
import s from "./transaction.module.css";

const TransactionTbody = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 === 1 ? s.gray : s.white;
  return (
    <tbody className={s.tbody}>
      <tr key={id} className={trClassName}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

export default TransactionTbody;
