import React from "react";
import styles from "./ProductOptions.module.css";

const ProductOptions = ({ products, selectedProduct, setSelectedProduct }) => {
  return (
    <>
      {products.map((option) => (
        <button
          className={styles.optionButton}
          key={option.id}
          style={
            selectedProduct === option.id
              ? { borderBottomColor: "seagreen" }
              : {}
          }
          onClick={() => setSelectedProduct(option.id)}
        >
          <img src={option.imageThumb} alt={option.name} />{" "}
        </button>
      ))}
    </>
  );
};

export default ProductOptions;
