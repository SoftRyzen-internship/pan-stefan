import { useState } from 'react';

import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import DropDown from '@/components/DropDown/DropDown';
import WorkForm from '@/components/WorkForm/WorkForm';

import useBreakpoints from '@/services/hooks/useBreakpoints';

import vacancySectionTextContent from './vacancy-section-text-content';
import s from './vacancy-after-style';

function VacancySection() {
  const {
    headerText,
    descriptionText1,
    descriptionText2,
    sloganText,
    timeText,
    payText,
    contactText,
    buttonText,
  } = vacancySectionTextContent;

  const { less768px, bigger768px, bigger1280px } = useBreakpoints();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <section
      id="Вакансії"
      className={`section overflow-hidden relative bg-purple-30 ${s.beforeBgStyle} ${s.afterBgStyle}`}
    >
      <div className={`container overflow-clip text-center md:text-xl xl:w-[864px] `}>
        <SectionHeader text={headerText} />
        <div
          className={`flex flex-col justify-center relative ${s.afterStyle} bg-white text-black rounded-[400px] py-[80px] px-[31px] mb-9 md:py-[48px] `}
        >
          {less768px ? (
            <p className="">
              {descriptionText1} {descriptionText2}
            </p>
          ) : (
            <>
              <p>{descriptionText1}</p>
              <p>{descriptionText2}</p>
            </>
          )}

          <p className="font-cormorant text-purple-80 text-xl md:text-[32px] font-bold uppercase py-8">
            {sloganText}
          </p>
          <p>{timeText}</p>
          <p>{payText}</p>
        </div>
        <p className="mb-9 md:w-[350px] xl:w-[400px] mx-auto">{contactText}</p>
        <Button type="button" text={buttonText} lightHover centered onClick={handleClick} />
      </div>

      <DropDown isOpen={open} setIsOpen={setOpen}>
        <WorkForm />
      </DropDown>
    </section>
  );
}

export default VacancySection;
