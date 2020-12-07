import React from "react";

import friends from "../data/friends.json";
import statisticalData from "../data/statisticalData.json";
import transactions from "../data/transactions.json";
import user from "../data/user.json";

import Friends from "./friends/Friends";
import User from "./user/User";
import Transaction from './transaction/Transaction';
import Statistical from "./statistical/Statistical";

const App = () => {
  return (
      <>
      <User user={user}/>
      <Statistical items={statisticalData}/>
      <Friends friends={friends} />
      <Transaction transactions={transactions}/>
  </>
  )};

export default App;
