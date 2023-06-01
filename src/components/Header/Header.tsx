import { Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import Image from 'next/image';
import useBreakpoints from '../../services/hooks/useBreakpoints';
import mainImage from '../../../public/assets/images/hero/main-image.png';

const navigation = [
  { name: 'Головна', href: 'Головна', id: 1 },
  { name: 'Про нас', href: 'Пронас', id: 2 },
  { name: 'Продукція', href: 'Продукція', id: 3 },
  { name: 'Вакансії', href: 'Вакансії', id: 4 },
  { name: 'Фотогалерея', href: 'Фотогалерея', id: 5 },
  { name: 'Контакти', href: 'Контакти', id: 6 },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { less768px, bigger1280px } = useBreakpoints();

  const handleClick = (event: any) => {
    const target = event.target;
    const scrollTo = target.getAttribute('data-scroll-to');

    if (scrollTo) {
      event.preventDefault();
      const element = document.getElementById(scrollTo);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className="">
        <div className="border-b border-[#CBB389]">
          <Disclosure as="nav" className="relative px-5 md:px-8 xl:px-8">
            {({ open, close }) => (
              <>
                <div className=" ">
                  <div className="flex items-center justify-between h-[100px]">
                    <div className="flex items-center">
                      <div className="text-blue-500">LOGO</div>
                      <div className="hidden xl:block">
                        <div className="ml-[123px] flex items-baseline space-x-[60px]">
                          {navigation.map(item => (
                            <a
                              onClick={handleClick}
                              key={item.name}
                              data-scroll-to={item.href}
                              className="text-black leading-7 hover:text-purple-80 py-2 cursor-pointer"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
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
                        className="inline-flex items-center justify-center p-2 text-purple-80 hover:text-purple-30"
                      >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                          <XMarkIcon
                            width={16}
                            hanging={16}
                            className="block h-8 w-8 md:h-10 md:w-10"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            width={24}
                            hanging={16}
                            className="block h-8 w-8 md:h-10 md:w-10"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel
                  className={`pb-[41px] pt-[60px] md:py-[100px] absolute hero-bg bg-center xl:hidden bg-lightWite left-0 top-full z-10 mt-[1px] w-screen ${
                    mobileMenuOpen ? '' : 'hidden'
                  }`}
                >
                  <div className="md:px-8 flex flex-col items-center md:flex-row md:flex md:justify-between">
                    <div className="space-y-5 md:space-y-7 flex flex-col items-center md:items-start md:justify-center mb-[60px] ">
                      {navigation.map(item => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          onClick={handleClick}
                          data-scroll-to={item.href}
                          className="text-black hover:text-purple-80 block font-cormorant text-[20px]/[28px] md:text-[28px]/[32px] font-[600] cursor-pointer"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>

                    <div>
                      <Image
                        src={mainImage}
                        alt="Святковий пиріг зі свечами"
                        width={less768px ? 280 : 336}
                        height={less768px ? 307 : 368}
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </header>
    </>
  );
}

export default Header;
