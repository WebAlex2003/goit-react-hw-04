import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  console.log(image);
  return (
    <div onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
