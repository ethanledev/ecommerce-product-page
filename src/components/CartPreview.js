import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import styles from "./CartPreview.module.css";

const CartPreview = ({ itemCount, clearCart, closeCartPreview, isMobile }) => {
  const formatTotal = () => {
    const total = itemCount * 125;
    return "$" + total + ".00";
  };

  return (
    <div
      className={`${styles.cartPreviewContainer} ${
        isMobile && styles.mobilePosition
      }`}
    >
      <div className={styles.cartPreview}>
        <div className={styles.title}>Cart</div>
        <div className={styles.body}>
          {itemCount > 0 ? (
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <img
                  src={require("../images/image-product-1-thumbnail.jpg")}
                  alt="product 1"
                />
                <div className={styles.description}>
                  <div>Fall limited Edition Sneakers</div>
                  <div>
                    $125.00 x {itemCount}
                    <strong>{formatTotal()}</strong>
                  </div>
                </div>
              </div>
              <div onClick={clearCart}>
                <DeleteIcon />
              </div>
            </div>
          ) : (
            <div className={`${styles.itemContainer} ${styles.emptyCart}`}>
              Your cart is empty.
            </div>
          )}
          <Link
            to="/checkout"
            className={styles.button}
            onClick={closeCartPreview}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
