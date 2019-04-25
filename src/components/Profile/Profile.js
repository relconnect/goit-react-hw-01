import React, { Fragment } from "react";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import SocialStats from "../SocialStats/SocialStats";
import styles from "./Profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({ items }) => (
  <Fragment>
    {items.map(item => (
      <div key={item.id} className={styles.profile}>
        <ProfileDescription {...item} />
        <SocialStats {...item.stats} />
      </div>
    ))}
  </Fragment>
);

Profile.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
}

export default Profile;
