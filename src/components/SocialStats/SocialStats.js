import React from "react";
import styles from './SocialStats.module.css';
import PropTypes from "prop-types";

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
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,    
  };

export default Stats;
