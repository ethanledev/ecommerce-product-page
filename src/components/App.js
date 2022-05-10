import styles from "./App.module.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import { useState } from "react";
import Links from "./Links";
import LightBox from "./LightBox";
import CartPreview from "./CartPreview";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showCartPreview, setShowCartPreview] = useState(false);

  const element = (
    <Page
      itemCount={itemCount}
      setItemCount={setItemCount}
      showLightBox={() => setShowLightBox(true)}
    />
  );

  return (
    <div className={styles.container}>
      {showMenu && (
        <Links
          device="mobile"
          hideMenu={() => setShowMenu(false)}
          setShowMenu={setShowMenu}
        />
      )}
      {showLightBox && <LightBox hideLightBox={() => setShowLightBox(false)} />}
      {showCartPreview && (
        <CartPreview
          isMobile={true}
          itemCount={itemCount}
          clearCart={() => setItemCount(0)}
          closeCartPreview={() => setShowCartPreview(false)}
        />
      )}
      <Nav
        showMenu={() => setShowMenu(true)}
        itemCount={itemCount}
        showCartPreview={showCartPreview}
        clearCart={() => setItemCount(0)}
        closeCartPreview={() => setShowCartPreview(false)}
        setShowCartPreview={setShowCartPreview}
      ></Nav>
      <Routes>
        <Route path="/ecommerce-product-page" element={element} />
        <Route path="/ecommerce-product-page/collections" element={element} />
        <Route path="/ecommerce-product-page/men" element={element} />
        <Route path="/ecommerce-product-page/women" element={element} />
        <Route path="/ecommerce-product-page/about" element={element} />
        <Route path="/ecommerce-product-page/contact" element={element} />
        <Route path="/ecommerce-product-page/checkout" element={element} />
        <Route path="/ecommerce-product-page/user" element={element} />
      </Routes>
    </div>
  );
};

export default App;
