import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useState } from 'react';

import Header from 'sections/Header/Header';
import Footer from 'sections/Footer/Footer';
import OrderButton from 'components/OrderButton/OrderButton';
import DropDown from 'components/DropDown/DropDown';
import RegisterForm from 'components/RegisterForm/RegisterForm';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Head>
        <title>Pan Stefan</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9c89b3"/>
        <meta name="msapplication-TileColor" content="#9c89b3"/>
        <meta name="theme-color" content="#fcf8ff" />
        <meta property="og:title" content="PAN STEFAN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={'/assets/images/slider/photo6.jpg'} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Стакан капучіно та тістечко" />
        <meta property="og:description" content="Наші смаколики  - то любов" />
        <meta property="og:locale" content="uk_UA" />
      </Head>
      <Header />
      <main>{children}</main>
      <OrderButton onClick={handleClick} />
      <Footer />

      <DropDown isOpen={open} setIsOpen={setOpen}>
        <RegisterForm />
      </DropDown>
    </>
  );
};

export default Layout;
