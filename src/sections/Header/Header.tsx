import { Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, scroller } from 'react-scroll';

import Image from 'next/image';
import useBreakpoints from 'services/hooks/useBreakpoints';
import mainImage from '@/public/assets/images/hero/main-image.png';
import CompanyLogo from 'components/Logo/Logo';
import navigation from './navigation';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { less768px } = useBreakpoints();

  const handleClick = (element: string) => {
    if (element) {
      setMobileMenuOpen(false);
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
    }
  };
  mobileMenuOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  return (
    <header>
      <div className="border-b border-lightBrown-30 relative ">
        <Disclosure as="nav" className="container  px-5 md:px-8 xl:px-8">
          {({ open }) => (
            <>
              <div className=" flex items-center justify-between py-5">
                <div className="flex items-center">
                  <CompanyLogo />
                  <div className="hidden xl:block">
                    <ul className="ml-[123px] flex items-baseline space-x-[60px]">
                      {navigation.map(item => (
                        <li key={item.id}>
                          <Link
                            to={item.href}
                            smooth={true}
                            duration={500}
                            key={item.name}
                            className="text-black leading-7 hover:text-purple-80 focus:text-purple-80 py-2 cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="-mr-2 flex xl:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    onClick={() => {
                      if (open) {
                        setMobileMenuOpen(false);
                      } else {
                        setMobileMenuOpen(true);
                      }
                    }}
                    className="inline-flex items-center justify-center p-2 text-purple-80 hover:text-purple-30 focus:text-purple-30"
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        width={16}
                        hanging={16}
                        className="block h-8 w-8 md:h-10 md:w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3BottomLeftIcon
                        width={24}
                        hanging={16}
                        className="block h-8 w-8 md:h-10 md:w-10"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel
                className={`pb-[41px] pt-[60px] md:py-[100px] absolute hero-bg bg-center xl:hidden bg-lightWite left-0 right-0 top-full z-10 mt-[1px] w-screen ${
                  open ? '' : 'hidden'
                }`}
              >
                {({ open, close }) => (
                  <div className="container flex flex-col items-center md:flex-row md:flex md:justify-between">
                    <ul className="space-y-5 md:space-y-[20px] flex flex-col items-center md:items-start md:justify-center mb-[60px] ">
                      {navigation.map(item => (
                        <li key={item.id}>
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => {
                              handleClick(item.href);
                              if (open) {
                                setMobileMenuOpen(false);
                                setTimeout(() => {
                                  close();
                                }, 0);
                              } else {
                                setMobileMenuOpen(true);
                              }
                            }}
                            className="text-black hover:text-purple-80 focus:text-purple-80 block font-cormorant text-[20px]/[28px] md:text-[28px]/[32px] font-[600] cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Image
                        src={mainImage}
                        alt="Святковий пиріг зі свечами"
                        width={less768px ? 280 : 336}
                        height={less768px ? 307 : 368}
                      />
                    </div>
                  </div>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}

export default Header;