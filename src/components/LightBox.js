import styles from "./LightBox.module.css";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";

const LightBox = ({ device, hideLightBox }) => {
  return (
    <div className={styles.container}>
      <div className={styles.lightBox}>
        <div className={styles.closeIcon}></div>
      </div>
    </div>
  );
};

export default LightBox;
