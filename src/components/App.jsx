import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';

import { GalleryApi } from './Gallery/GalleryApi';
import Searchbar from './Gallery/Searchbar/Searchbar';
import ImageGallery from './Gallery/ImageGallery/ImageGallery';
import Loader from './Gallery/Loader/Loader';
import Button from './Gallery/Button/Button';
import Modal from './Gallery/Modal/Modal';

import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);

    GalleryApi(inputValue, page)
      .then(response => {
        setGallery(state => [...state, ...response.data.hits]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [inputValue, page]);

  const nextPage = () => {
    setPage(state => state + 1);
    scroll.scrollToBottom();
  };

  const handleFormSubmit = value => {
    setInputValue(value);
    setGallery([]);
    setPage(1);
  };

  const LargeImg = large => {
    setModalImg(large);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {gallery.length > 0 && (
        <ImageGallery
          options={gallery}
          onClick={toggleModal}
          modalImg={LargeImg}
        />
      )}
      {loading && <Loader />}
      {gallery.length > 0 && !loading && <Button nextPage={nextPage} />}
      {showModal && (
        <Modal onClick={toggleModal}>
          <img style={{ width: 1000 }} src={modalImg} alt="modal" />
        </Modal>
      )}

      <ToastContainer autoClose={3000} />
    </div>
  );
}
