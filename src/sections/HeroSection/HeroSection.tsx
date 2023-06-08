import Image from 'next/image';
import { Element } from 'react-scroll';

import SectionHeader from 'components/SectionHeader/SectionHeader';
import LinkButton from 'components/LinkButton/LinkButton';

import heroTextContent from './hero-text-content';
import mainImage from '@/public/assets/images/hero/Hero@2x.png';

function HeroSection() {
  const { logoText, buttonText, descriptionText, imageAltText } = heroTextContent;
  return (
    <section
      id="hero"
      className="section pt-[60px] md:pt-[111px] md:pb-[91px] xl:pt-[60px] xl:pb-[65px] hero-bg bg-center bg-no-repeat xl:bg-cover"
    >
      <Element name="main">
        <div className="container flex flex-col  md:flex-row md:justify-between xl:justify-start">
          <div className="mb-[60px] md:mb-0 xl:mr-[162px] xl:mt-[80px]">
            <SectionHeader text={logoText} hero />
            <p className=" md:max-w-[336px] xl:max-w-[488px] mb-[28px] md:mb-[40px] xl:mb-[57px] text-black leading-[1.5] md:leading-[1.4] text-lg md:text-xl">
              {descriptionText}
            </p>
            <LinkButton text={buttonText} link={{ target: 'products' }} />
          </div>
          <Image
            className="w-auto h-auto max-md:mx-auto md:w-[336px] md:h-[368px] xl:w-[488px] xl:h-[543px]"
            src={mainImage}
            alt={imageAltText}
            width={488}
            height={543}
          />
        </div>
      </Element>
    </section>
  );
}

export default HeroSection;
