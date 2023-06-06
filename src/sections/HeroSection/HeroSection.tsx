import Image from 'next/image';
import { Element } from 'react-scroll';

import SectionHeader from 'components/SectionHeader/SectionHeader';
import Button from 'components/Button/Button';

import heroTextContent from './hero-text-content';
import mainImage from '@/public/assets/images/hero/main-image.png';

function HeroSection() {
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
            <p className="max-w-[280px] md:max-w-[336px] xl:max-w-[488px] mb-[28px] md:mb-[40px] xl:mb-[57px] text-black leading-[1.5] md:leading-[1.4] text-[18px]/[28px] md:text-[20px]/[28px]">
              {descriptionText}
            </p>
            <Button type="button" text={buttonText} link={{ target: '' }} />
          </div>
          <Image
            className="w-[280px] h-[307px] md:w-[336px] md:h-[368px] xl:w-[488px] xl:h-[543px]"
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
