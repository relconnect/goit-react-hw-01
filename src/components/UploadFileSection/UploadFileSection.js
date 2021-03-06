import React from "react";
import UploadFileStats from '../UploadFileStats/UploadFileStats';
import UploadFileTitle from '../UploadFileTitle/UploadFileTitle';
import styles from './UploadFileSection.module.css';
import PropType from 'prop-types';

const UploadFileSection = ({prop}) => (
    <section className={styles['stats-section']}>
        <UploadFileTitle  title="Upload Files"/>
        <UploadFileStats stats= {prop}/>
    </section>
)


UploadFileSection.propTypes = {
    prop: PropType.array.isRequired
}


export default UploadFileSection ;