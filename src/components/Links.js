import { Link, useLocation } from "react-router-dom";
import styles from "./Links.module.css";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { useRef } from "react";

const ROUTES = [
  "/ecommerce-product-page/collections",
  "/ecommerce-product-page/men",
  "/ecommerce-product-page/women",
  "/ecommerce-product-page/about",
  "/ecommerce-product-page/contact",
];

const Links = ({ device, hideMenu }) => {
  const { pathname } = useLocation();
  const menuRef = useRef();

  const handleContainerClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      hideMenu();
    }
  };

  const renderLinks = () => {
    return ROUTES.map((route) => (
      <div
        key={route}
        className={`${styles.link} ${pathname === route && styles.active}`}
        onClick={hideMenu}
      >
        <Link to={route}>{route.split("/ecommerce-product-page/")[1]}</Link>
      </div>
    ));
  };

  return (
    <div
      className={`${styles.container} ${styles[device]}`}
      onClick={(e) => handleContainerClick(e)}
    >
      <div className={`${styles.links}`} ref={menuRef}>
        {device === "mobile" && (
          <div className={styles.closeIcon}>
            <CloseIcon onClick={hideMenu} />
          </div>
        )}
        {renderLinks()}
      </div>
    </div>
  );
};

export default Links;
