import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import ProductOptions from "@/components/ProductOptions/ProductOptions";
import { useState } from "react";

const RemoteButton = dynamic(() => import("checkout/Button"), {
  ssr: false,
});

const CartButton = dynamic(() => import("checkout/CartButton"), {
  ssr: false,
});

const RelatedProducts = dynamic(() => import("related/Recommendations"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

const products = [
  {
    id: "tractor-red",
    name: "Porshe",
    image: "/images/tractor-red.jpg",
    imageThumb: "/images/tractor-red-thumb.jpg",
    related: [
      {
        id: "reco-3",
        name: "Reco 3",
        image: "/images/reco_1.jpg",
      },
      {
        id: "reco-1",
        name: "Reco 1",
        image: "/images/reco_2.jpg",
      },
      {
        id: "reco-5",
        name: "Reco 5",
        image: "/images/reco_3.jpg",
      },
    ],
  },
  {
    id: "tractor-green",
    name: "Mercedes",
    image: "/images/tractor-green.jpg",
    imageThumb: "/images/tractor-green-thumb.jpg",
    related: [
      {
        id: "reco-4",
        name: "Reco 4",
        image: "/images/reco_4.jpg",
      },
      {
        id: "reco-2",
        name: "Reco 2",
        image: "/images/reco_5.jpg",
      },
      {
        id: "reco-5",
        name: "Reco 5",
        image: "/images/reco_6.jpg",
      },
    ],
  },
  {
    id: "tractor-blue",
    name: "Bentley",
    image: "/images/tractor-blue.jpg",
    imageThumb: "/images/tractor-blue-thumb.jpg",
    related: [
      {
        id: "reco-1",
        name: "Reco 1",
        image: "/images/reco_7.jpg",
      },
      {
        id: "reco-3",
        name: "Reco 3",
        image: "/images/reco_8.jpg",
      },
      {
        id: "reco-2",
        name: "Reco 2",
        image: "/images/reco_9.jpg",
      },
    ],
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);

  const getProduct = () => {
    return products.find((product) => product.id === selectedProduct);
  };

  return (
    <>
      <Head>
        <title>Ecommerce App</title>
        <meta name="description" content="Next host with module federation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>The Tractor Store</h1>

        <div className={styles.productImage}>
          <Image
            src={getProduct().image}
            alt="tractor-red"
            width="417"
            height="417"
          />
        </div>

        <div className={styles.cartArea}>
          {/* <button>Cart: 0</button> */}
          <CartButton />
        </div>

        <h2 className={styles.productName}>
          Tractor <span className={styles.small}>{getProduct().name}</span>
        </h2>

        <div className={styles.productOptions}>
          <ProductOptions
            products={products}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>

        <div className={styles.checkout}>
          <RemoteButton text="Props from host" />
        </div>

        <div className={styles.related}>
          <RelatedProducts products={getProduct().related} />
        </div>
      </main>
    </>
  );
}
