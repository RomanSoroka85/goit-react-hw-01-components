import React from 'react';
import s from '../user.module.css'



const Stats = ({stats}) => {
    return (
        <ul className={s.stats}>
        <li className={s.stats}>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={s.stats}>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={s.stats}>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul> 
    );
}

export default Stats;