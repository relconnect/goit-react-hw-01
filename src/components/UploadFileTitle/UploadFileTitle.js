import React from 'react';
import styles from './UploadFileTitle.module.css'

const UploadFileTitle = ({title = "Upload Files"}) => (
<h2 className={styles.title}>{title}</h2>
)

export default UploadFileTitle;