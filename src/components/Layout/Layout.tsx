import { FC, ReactNode } from 'react';
import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pan Stefan</title>
        <meta name="description" content="Cake-shop Pan Stefan"></meta>
        <meta name="og:title" content="Cake-shop"></meta>
        <meta name="og:description" content="Cake-shop Pan Stefan"></meta>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
