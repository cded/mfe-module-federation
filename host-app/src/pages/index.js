import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const RemoteButton = dynamic(() => import("checkout/Button"), {
  ssr: false,
});

const RelatedProducts = dynamic(
  () => import("recommendations/RelatedProducts"),
  {
    ssr: false,
  }
);

console.log(RemoteButton);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce App</title>
        <meta name="description" content="Next host with module federation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>Hello</div>
        <RemoteButton text="Props from host" />

        <RelatedProducts />
      </main>
    </>
  );
}
