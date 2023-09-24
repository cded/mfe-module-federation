// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./RelatedProducts.module.css";
import Image from "next/image";

const RelatedProducts = ({ products }) => {
  return (
    <div className={styles.products}>
      <h3>Related Products</h3>
      {products.map((product) => (
        <Image
          key={product.id}
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
        />
      ))}
    </div>
  );
};

export default RelatedProducts;
