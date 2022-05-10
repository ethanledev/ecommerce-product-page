import { useRef } from "react";
import styles from "./LightBox.module.css";
import ProductDisplay from "./ProductDisplay";

const LightBox = ({ hideLightBox }) => {
  const displayRef = useRef();

  const handleOnClick = (e) => {
    if (displayRef.current && !displayRef.current.contains(e.target)) {
      hideLightBox();
    }
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <ProductDisplay
        isLightBox={true}
        hideLightBox={hideLightBox}
        ref={displayRef}
      />
    </div>
  );
};

export default LightBox;
