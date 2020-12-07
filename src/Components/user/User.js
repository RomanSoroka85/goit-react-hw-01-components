import React from 'react';
import Stats from './stats/Stats';
import s from "./user.module.css"




const User = ({user}) => {
       return (
       <>
<div className={s.profile}>
  <div className={s.description}>
    <img
      src={user.avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{user.name}</p>
    <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <Stats stats={user.stats}/>

</div>

       </> 
    );
}

export default User;