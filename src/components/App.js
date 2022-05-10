import styles from "./App.module.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import { useState } from "react";
import Links from "./Links";
import LightBox from "./LightBox";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);

  const element = <Page itemCount={itemCount} setItemCount={setItemCount} />;

  return (
    <div className={styles.container}>
      {showMenu && (
        <Links
          device="mobile"
          hideMenu={() => setShowMenu(false)}
          setShowMenu={setShowMenu}
        />
      )}
      {showLightBox && (
        <LightBox
          device="desktop"
          hideLightBox={() => setShowLightBox(false)}
        />
      )}
      <Nav
        itemCount={itemCount}
        showMenu={() => setShowMenu(true)}
        clearCart={() => setItemCount(0)}
      ></Nav>
      <Routes>
        <Route path="/" element={element} />
        <Route path="/collections" element={element} />
        <Route path="/men" element={element} />
        <Route path="/women" element={element} />
        <Route path="/about" element={element} />
        <Route path="/contact" element={element} />
        <Route path="/checkout" element={element} />
        <Route path="/user" element={element} />
      </Routes>
    </div>
  );
};

export default App;
