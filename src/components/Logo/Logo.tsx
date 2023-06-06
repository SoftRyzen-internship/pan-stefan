import { FC } from 'react';
import NextLink from 'next/link';

import Logo from '@/public/assets/icon/LogoPan.svg';

const CompanyLogo: FC = () => (
  <NextLink
    href="/"
    className="block mx-auto hover:scale-125 md:hover:scale-100 text-center h-[40px] md:h-[60px] max-w-[56px] md:max-w-[85px] cursor-pointer text-purple-80 hover:text-purple-30"
  >
    <Logo aria-label="Company logo" className="mx-auto" />
    <p
      className={`mx-auto font-tanPearl text-[18px]/[16px] md:text-[26px]/[22px] uppercase max-w-[85px]`}
    >
      Pan Stefan
    </p>
  </NextLink>
);

export default CompanyLogo;
