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
      </Head>
      <Header />
      <main>
        {children}
        <OrderButton onClick={handleClick} />
      </main>
      <Footer />

      <DropDown isOpen={open} setIsOpen={setOpen}>
        <RegisterForm />
      </DropDown>
    </>
  );
};

export default Layout;
