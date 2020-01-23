import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items, onOpenModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(el => (
        <ImageGalleryItem onOpenModal={onOpenModal} key={el.id} dataObj={el} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired
};
