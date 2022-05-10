import styles from "./Page.module.css";
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";

const Page = ({ itemCount, setItemCount }) => {
  return (
    <main className={styles.main}>
      <h1 className="srOnly">Page</h1>
      <ProductDisplay />
      <ProductInfo itemCount={itemCount} setItemCount={setItemCount} />
    </main>
  );
};

export default Page;
