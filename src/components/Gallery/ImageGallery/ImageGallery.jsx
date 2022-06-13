import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export default function ImageGallery({ options, onClick, modalImg }) {
  const largeUrlImage = e => {
    modalImg(e.target.dataset.large);
  };

  return (
    <ul className={styles.ImageGallery} onClick={largeUrlImage}>
      {options.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
