import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import "../../main.css";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function openModal(image) {
    setCurrentImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentImage(null);
  }

  const handleSearch = async (newImages) => {
    if (!newImages) {
      toast.error("The field is empty");
      return;
    }
    setImages([]);
    setPage(1)
    setTopic(newImages);
  };

  const handleMoreLoad = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!topic) {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=NWtvR9g2JWTU8TKM2eK0QDiSLfPs-HdKfZ7vM-JlSvU&query=${topic}&page=${page}&per_page=${10}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(true);
        toast.error("The field is empty");
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [page, topic]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleMoreLoad} />}
      <ImageModal
        onClose={closeModal}
        isOpen={modalIsOpen}
        image={currentImage}
      />
      <Toaster />
    </div>
  );
};

export default App;
