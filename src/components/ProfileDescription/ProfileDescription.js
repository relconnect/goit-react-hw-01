import React from "react";
import styles from "./ProfileDescription.module.css";
import PropType from "prop-types";

const ProfileDescription = ({ name, tag, location, avatar, alt}) => (
  <div className={styles.description}>
    <img className={styles.avatar} src={avatar} alt={alt} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

ProfileDescription.defaultProps ={
    alt: "photo",
    };

ProfileDescription.propTypes = {
  name: PropType.string.isRequired,
  tag: PropType.string.isRequired,
  location: PropType.string.isRequired,
  avatar: PropType.string.isRequired
};

export default ProfileDescription;
