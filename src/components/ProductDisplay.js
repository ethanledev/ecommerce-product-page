import { forwardRef, useState } from "react";
import styles from "./ProductDisplay.module.css";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";

const IMAGE_LIST = {
  full: [
    require("../images/image-product-1.jpg"),
    require("../images/image-product-2.jpg"),
    require("../images/image-product-3.jpg"),
    require("../images/image-product-4.jpg"),
  ],
  thumbnail: [
    require("../images/image-product-1-thumbnail.jpg"),
    require("../images/image-product-2-thumbnail.jpg"),
    require("../images/image-product-3-thumbnail.jpg"),
    require("../images/image-product-4-thumbnail.jpg"),
  ],
};

const ProductDisplay = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const { isLightBox, hideLightBox, showLightBox } = props;

  const renderThumbnails = () => {
    return IMAGE_LIST.thumbnail.map((img, i) => (
      <div
        key={i}
        className={`${i === index && styles.active}`}
        onClick={() => setIndex(i)}
      >
        <img src={img} alt="sneaker thumbnail" />
      </div>
    ));
  };

  const renderArrows = (forLightBox) => (
    <div
      className={`${styles.arrows} ${forLightBox && styles.lightBoxButtons}`}
    >
      <div
        className={styles.previousArrow}
        onClick={() => {
          if (index > 0) setIndex(index - 1);
        }}
      >
        <PreviousIcon />
      </div>
      <div
        className={styles.nextArrow}
        onClick={() => {
          if (index < IMAGE_LIST.full.length - 1) setIndex(index + 1);
        }}
      >
        <NextIcon />
      </div>
    </div>
  );

  return (
    <div className={styles.container} ref={ref}>
      {isLightBox && (
        <div className={styles.closeButton} onClick={hideLightBox}>
          <CloseIcon />
        </div>
      )}
      <div className={styles.mainImageContainer}>
        <img
          src={IMAGE_LIST.full[index]}
          alt="sneaker"
          className={styles.mainImage}
          onClick={showLightBox}
        />
        {renderArrows(isLightBox)}
      </div>
      <div className={styles.thumbnails}>{renderThumbnails()}</div>
    </div>
  );
});

export default ProductDisplay;
