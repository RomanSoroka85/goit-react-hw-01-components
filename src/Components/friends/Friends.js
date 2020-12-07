import React from "react";
import s from "./friends.module.css"
import FriendsItem from "./friendsItem/FriendsItem";


const Friends = ({ friends }) => {
  return (
    <div className={s.box}>
    <ul className={s.list}>
      {friends.map((friend) => {
        return (
         <FriendsItem {...friend} key={friend.id}/>
        );
      })}
    </ul></div>
  );
};

export default Friends;
