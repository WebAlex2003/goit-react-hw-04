import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGellery.module.css"

const ImageGellery = ({ images, onImageClick}) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li key={image.id} className={css.imageItem}>
          <ImageCard image={image} onImageClick={onImageClick}/>
        </li>
      ))}
    </ul>
  );
};

export default ImageGellery;
