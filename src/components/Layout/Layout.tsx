import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OrderButton from '../OrderButton/OrderButton';
import DropDown from '../DropDown/DropDown';
import RegisterForm from '../RegisterForm/RegisterForm';

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
        <meta name="description" content="Cake-shop Pan Stefan"></meta>
        <meta name="og:title" content="Cake-shop"></meta>
        <meta name="og:description" content="Cake-shop Pan Stefan"></meta>
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
