import React from "react";
import PropTypes from "prop-types";

const Transaction = ({transaction}) => (
  <tr key={transaction.id}>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>
);
Transaction.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Transaction;
