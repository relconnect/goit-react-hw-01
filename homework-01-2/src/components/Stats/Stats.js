import React from "react";
import styles from './Stats.module.css';
import PropType from "prop-types";

const Stats = ({ followers, likes, views }) => (
  <ul className={styles.stats}>
    <li className={styles.stat}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.stat}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.stat}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
);

Stats.propTypes = {
    followers: PropType.number.isRequired,
    likes: PropType.number.isRequired,
    views: PropType.number.isRequired,    
  };

export default Stats;
