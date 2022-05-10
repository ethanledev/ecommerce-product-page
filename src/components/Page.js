import styles from "./Page.module.css";
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";

const Page = ({ itemCount, setItemCount, showLightBox }) => {
  return (
    <main className={styles.main}>
      <h1 className="srOnly">Page</h1>
      <ProductDisplay isLightBox={false} showLightBox={showLightBox} />
      <ProductInfo itemCount={itemCount} setItemCount={setItemCount} />
    </main>
  );
};

export default Page;
