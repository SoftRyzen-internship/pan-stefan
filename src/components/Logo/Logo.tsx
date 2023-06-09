import NextLink from 'next/link';

import Logo from '@/public/assets/icon/logo.svg';
import useBreakpoints from 'services/hooks/useBreakpoints';
import LogoM from '@/public/assets/icon/logoM.svg';

function CompanyLogo() {
  const { less768px } = useBreakpoints();

  return (
    <NextLink
      href="/"
      className="md:h-[85px] block mx-auto hover:scale-125 md:hover:scale-100 text-center max-w-[56px] md:max-w-[85px] cursor-pointer text-purple-80 hover:text-purple-30 focus:text-purple-30 fill-purple-80 hover:fill-purple-30 focus:fill-purple-30"
    >
      {less768px ? (
        <LogoM
          aria-label="Логотип компанії"
          className="mx-auto fill-inherit hover:inherit focus:inherit"
        />
      ) : (
        <Logo
          aria-label="Логотип компанії"
          className="mx-auto fill-inherit hover:inherit focus:inherit"
        />
      )}
      <p
        className={`mx-auto font-tanPearl text-[12px] md:text-[24px] md:leading-8 uppercase max-w-[44px] md:max-w-[85px]`}
      >
        Pan Stefan
      </p>
    </NextLink>
  );
}

export default CompanyLogo;
