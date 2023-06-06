import { FC } from 'react';
import NextLink from 'next/link';

import Logo from '@/public/assets/icon/LogoPan.svg';

const CompanyLogo: FC = () => (
  <NextLink
    href="/"
    tabIndex={0}
    className="block mx-auto hover:scale-125 md:hover:scale-100 text-center max-w-[56px] md:max-w-[85px] cursor-pointer text-purple-80 hover:text-purple-30 focus:text-purple-30 fill-purple-80 hover:fill-purple-30 focus:fill-purple-30"
  >
    <Logo aria-label="Company logo" className="mx-auto fill-inherit hover:inherit focus:inherit" />
    <p
      className={`mx-auto font-tanPearl text-[18px]/[16px] md:text-[26px]/[22px] uppercase max-w-[85px]`}
    >
      Pan Stefan
    </p>
  </NextLink>
);

export default CompanyLogo;
