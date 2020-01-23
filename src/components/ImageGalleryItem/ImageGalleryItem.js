import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ dataObj, onOpenModal }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={() => onOpenModal(dataObj.webformatURL)}
  >
    <img
      src={dataObj.webformatURL}
      alt=""
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  dataObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired
};
