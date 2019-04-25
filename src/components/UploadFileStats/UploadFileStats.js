import React from "react";
import styles from './UploadFileStats.module.css';
import PropTypes from 'prop-types';

const UploadFileStats = ({ stats }) => (
  <ul className={styles["stat-list"]}>
    {stats.map(item => (
      <li key={item.id} className={styles.item}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
);

UploadFileStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
  
};
export default UploadFileStats;
