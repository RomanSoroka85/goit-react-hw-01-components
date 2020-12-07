import React from "react";
import s from "./friendItem.module.css";

const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <li>
      <img className={s.avatar} src={avatar} alt={name} />{" "}
      <span className={isOnline ? s.online : s.offline}></span>
      <h2>{name}</h2>
    </li>
  );
};

export default FriendsItem;
