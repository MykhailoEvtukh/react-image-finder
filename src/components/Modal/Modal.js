import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ bigUrl, closeModal }) => {
  return (
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <img src={bigUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  bigUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};
