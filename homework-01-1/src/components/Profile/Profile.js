import React, { Fragment } from "react";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import Stats from "../Stats/Stats";
import styles from "./Profile.module.css";
import PropType from 'prop-types';

const Profile = ({ items }) => (
  <Fragment>
    {items.map(item => (
      <div key={item.id} className={styles.profile}>
        <ProfileDescription {...item} />
        <Stats {...item.stats} />
      </div>
    ))}
  </Fragment>
);

Profile.propTypes = {
    items: PropType.arrayOf(PropType.shape({ id: PropType.number.isRequired }))
    .isRequired,
}

export default Profile;
