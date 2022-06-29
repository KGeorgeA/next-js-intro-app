import Head from "next/head";
import type { ReactNode } from "react";
import type { NextPage } from "next";

import styles from './Core.module.css';
import Box from '@mui/material/Box';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CoreLayout: NextPage<{ children: ReactNode, title: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.page}>
        <Header />

        <main className={styles.main_body}>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default CoreLayout;