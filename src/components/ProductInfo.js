import styles from "./ProductInfo.module.css";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { useState } from "react";

const ProductInfo = ({ itemCount, setItemCount }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className={styles.container}>
      <div className={styles.brand}>SNEAKER COMPANY</div>
      <h2 className={styles.productName}>Fall Limited Edition Sneakers</h2>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual swear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.currentPrice}>
        $125.00 <span className={styles.discount}>50%</span>
      </div>
      <div className={styles.originalPrice}>$250.00</div>
      <div className={styles.buttons}>
        <div className={styles.quantity}>
          <button
            onClick={() => {
              if (quantity > 0) setQuantity(quantity - 1);
            }}
          >
            <MinusIcon />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <PlusIcon />
          </button>
        </div>
        <button
          className={styles.addToCartButton}
          onClick={() => {
            setItemCount(itemCount + quantity);
            setQuantity(0);
          }}
        >
          <CartIcon /> <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductInfo;
