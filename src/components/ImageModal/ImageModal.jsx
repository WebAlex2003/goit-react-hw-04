import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ onClose, isOpen, image }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {image && (
        <div>
          <img
            className={css.modalImg}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
