import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@components/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Class-based Blog Library</title>
        <meta name="description" content="Created by Howey Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>A Class-based React List and Display Library</p>
          <div>
            <p>by Matt Howey Design</p>
          </div>
        </div>

        <div className={styles.center}>
          <h2>Generic Listing and Display Library</h2>
        </div>

        <div className={styles.grid}>
          <Link href="docs" className={styles.card}>
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="blog" className={styles.card}>
            <h2 className={inter.className}>
              Example Usage <span>-&gt;</span>
            </h2>
            <p>
              Implements the abstract Lister class to into an ArticleLister
              class.
            </p>
          </Link>

          <Link href="#" className={styles.card}>
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="#" className={styles.card}>
            <h2 className={inter.className}>
              {/* Deploy <span>-&gt;</span> */}
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
