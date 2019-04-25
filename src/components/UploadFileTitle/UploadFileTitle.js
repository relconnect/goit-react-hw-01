import React from 'react';
import styles from './UploadFileTitle.module.css'
import PropTypes from "prop-types";

const UploadFileTitle = ({title}) => (
<h2 className={styles.title}>{title}</h2>
);

UploadFileTitle.defaultProps = {
    title: "Upload Files"
  };

UploadFileTitle.propTypes = {
title: PropTypes.string.isRequired,
}


export default UploadFileTitle;