import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useState } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
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
        <meta property="og:title" content="PAN STEFAN" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content=""/>
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
