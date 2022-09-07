import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
  autor,
  onClick,
  modalImg,
}) {
  const handlesClick = () => {
    onClick();
    modalImg(largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handlesClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>{tags ? tags : 'No name'}</h2>
        <p className={styles.text}>{autor}</p>
      </div>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  modalImg: PropTypes.func.isRequired,
};
