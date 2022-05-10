/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import { useEffect, useRef, useState } from "react";
import Links from "./Links";

const Nav = ({ itemCount, showMenu }) => {
  const { pathname } = useLocation();
  const cartPreviewRef = useRef();
  const [showCartPreview, setShowCartPreview] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartPreviewRef.current &&
        !cartPreviewRef.current.contains(event.target)
      ) {
        setShowCartPreview(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.navGroup}>
        <div className={styles.menuIcon} onClick={showMenu}>
          <MenuIcon />
        </div>
        <Link to="/">
          <Logo />
        </Link>
        <Links device="desktop" />
      </div>
      <div className={styles.navGroup}>
        <div className={styles.cartIcon} ref={cartPreviewRef}>
          <CartIcon onClick={() => setShowCartPreview(!showCartPreview)} />
          <div
            className={styles.itemCount}
            style={{ display: itemCount === 0 ? "none" : "block" }}
          >
            {itemCount}
          </div>
          {showCartPreview && (
            <div className={styles.cartPreviewContainer}>
              <div className={styles.cartPreview}>
                <div className={styles.title}>Cart</div>
                <div className={styles.body}>
                  <div className={styles.itemContainer}>
                    <div className={styles.item}>
                      <img
                        src={require("../images/image-product-1-thumbnail.jpg")}
                        alt="product 1"
                      />
                      <div className={styles.description}>
                        <div>Fall limited Edition Sneakers</div>
                        <div>
                          $125.00 x 3<strong>$375.00</strong>
                        </div>
                      </div>
                    </div>
                    <div>
                      <DeleteIcon />
                    </div>
                  </div>
                  <Link to="/checkout" className={styles.button}>
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link to="/user">
          <img
            className={`${styles.avatar} ${
              pathname === "/user" && styles.avatarActive
            }`}
            src={require("../images/image-avatar.png")}
            alt="user"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
