import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export default function ImageGallery({ options, onClick, modalImg }) {
  return (
    <ul className={styles.ImageGallery}>
      {options.map(
        ({ id, urls: { small, regular }, alt_description, user: { name } }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={small}
            largeImageURL={regular}
            tags={alt_description}
            autor={name}
            onClick={onClick}
            modalImg={modalImg}
          />
        )
      )}
    </ul>
  );
}

ImageGallery.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }),
      alt_description: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })
  ),
  onClick: PropTypes.func.isRequired,
  modalImg: PropTypes.func.isRequired,
};
