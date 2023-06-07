import Image from 'next/image';
import { Element } from 'react-scroll';

import SectionHeader from 'components/SectionHeader/SectionHeader';

import useBreakpoints from 'services/hooks/useBreakpoints';

import aboutUsSectionTextContent from './aboutUs-section-text-content';
import mainImage from '@/public/assets/images/about-us/main-image.jpg';

function AboutUsSection() {
  const { headerText, descriptionText, imageAltText } = aboutUsSectionTextContent;
  const { less480px, less768px, bigger1280px } = useBreakpoints();
  return (
    <section
      id="aboutUs"
      className={`section relative bg-purple-30 md:py-[80px] xl:pb-[126px] ${
        less768px
          ? ''
          : bigger1280px
          ? 'about-us-bg bg-no-repeat bg-[length:626px_319px] bg-[right_calc(50%-315px)_bottom_5px]'
          : 'about-us-bg bg-no-repeat bg-[length:336px_171px] bg-[left_calc(50%-188px)_bottom_1px]'
      }`}
    >
      <div className="container">
        <Element name="aboutUs">
          <SectionHeader text={headerText} />
        </Element>
        <div className="md:flex md:justify-between md:items-start xl:justify-start xl:gap-x-[32px]">
          <p className="max-md:mb-[32px] max-w-[280px] md:order-2 s:max-w-[100%] md:max-w-[336px] xl:max-w-[563px] leading-[1.5] text-base">
            {descriptionText}
          </p>
          <Image
            className="md:order-1 w-[280px] h-[210px] s:w-[336px]  s:h-[252px] xl:w-[592px] xl:h-[444px] max-md:mx-auto"
            src={mainImage}
            alt={imageAltText}
            width={592}
            height={444}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
