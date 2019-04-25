import React from "react";
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from "./PricingPlan.module.css";


const PricingPlan = ({plans}) => (
    <ul className={styles['pricing-plan']}>
    {plans.map(item => (
        <li key={item.id} className={styles['item']}>
          <PricingItem {...item}/>
        </li>
      ))}
      </ul>
)

PricingPlan.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
  .isRequired,
}

export default PricingPlan;