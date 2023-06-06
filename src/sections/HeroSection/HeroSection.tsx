import Image from 'next/image';
import { Element } from 'react-scroll';

import SectionHeader from 'components/SectionHeader/SectionHeader';
import LinkButton from 'components/LinkButton/LinkButton';

import useBreakpoints from 'services/hooks/useBreakpoints';

import heroTextContent from './hero-text-content';
import mainImage from '@/public/assets/images/hero/main-image.png';

function HeroSection() {
  const { less768px, bigger1280px } = useBreakpoints();
  const { logoText, buttonText, descriptionText, imageAltText } = heroTextContent;
  return (
    <section
      id="hero"
      className="section pt-[60px] md:pt-[102px] md:pb-[100px] xl:pt-[60px] xl:pb-[65px] hero-bg bg-center"
    >
      <Element name="main">
        <div className="container flex flex-col items-center md:flex-row md:justify-between xl:justify-start">
          <div className="mb-[60px] md:mb-0 xl:mr-[134px]">
            <SectionHeader text={logoText} hero />
            <p className="max-w-[280px] md:max-w-[336px] xl:max-w-[488px] mb-[28px] md:mb-[40px] xl:mb-[57px] text-black text-[18px]/[28px] md:text-[20px]/[28px]">
              {descriptionText}
            </p>
            <LinkButton text={buttonText} link={{ target: 'products' }} />
          </div>
          <Image
            src={mainImage}
            alt={imageAltText}
            width={less768px ? 280 : bigger1280px ? 488 : 330}
            height={less768px ? 307 : bigger1280px ? 543 : 368}
          />
        </div>
      </Element>
    </section>
  );
}

export default HeroSection;
