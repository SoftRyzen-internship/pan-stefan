import { FC } from 'react';
import NextLink from 'next/link';

import Logo from '@/public/assets/icon/logo.svg';

const CompanyLogo: FC = () => (
  <NextLink
    href="/"
    className="block mx-auto hover:scale-125 md:hover:scale-100 text-center max-w-[56px] md:max-w-[85px] cursor-pointer text-purple-80 hover:text-purple-30 focus:text-purple-30 fill-purple-80 hover:fill-purple-30 focus:fill-purple-30"
  >
    <Logo
      aria-label="Логотип компанії"
      className="mx-auto fill-inherit hover:inherit focus:inherit"
    />
    <p
      className={`mx-auto font-tanPearl text-lg leading-[0.8] md:text-[26px] uppercase max-w-[85px]`}
    >
      Pan Stefan
    </p>
  </NextLink>
);

export default CompanyLogo;
