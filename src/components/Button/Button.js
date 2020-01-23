import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onChangePage }) => (
  <>
    <button onClick={onChangePage} type="button" className={styles.Button}>
      Load more
    </button>
  </>
);
export default Button;

Button.propTypes = {
  onChangePage: PropTypes.func.isRequired
};
