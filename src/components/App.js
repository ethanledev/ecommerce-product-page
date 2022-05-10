import styles from "./App.module.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import { useState } from "react";
import Links from "./Links";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      {showMenu && (
        <Links
          device="mobile"
          hideMenu={() => setShowMenu(false)}
          setShowMenu={setShowMenu}
        />
      )}
      <Nav itemCount={itemCount} showMenu={() => setShowMenu(true)}></Nav>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/collections" element={<Page />} />
        <Route path="/men" element={<Page />} />
        <Route path="/women" element={<Page />} />
        <Route path="/about" element={<Page />} />
        <Route path="/contact" element={<Page />} />
        <Route path="/checkout" element={<Page />} />
        <Route path="/user" element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;
