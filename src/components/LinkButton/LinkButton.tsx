import { Link as ScrollLink } from 'react-scroll';

import LinkButtonProps from './LinkButtonTypes';

function LinkButton(props: LinkButtonProps) {
  const { link, text, centered, long, lightHover, xwide, download } = props;

  return download ? (
    <a
      className={`  ${centered ? 'mx-auto' : ''} ${long ? 'w-[240px]' : ''} ${
        lightHover
          ? 'hover:bg-lightWite hover:text-purple-80 focus:bg-lightWite focus:text-purple-80'
          : 'hover:bg-purple-30 focus:bg-purple-30'
      } min-w-[178px] border-0 inline-flex justify-center items-center py-[14px] bg-purple-80 transition-all rounded-full font-normal text-white text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] ${
        xwide ? 'w-[100%]' : ''
      }`}
      href={link.target}
      target="_blank"
    >
      {text}
    </a>
  ) : (
    <ScrollLink
      to={link.target}
      smooth={true}
      duration={500}
      className={`  ${centered ? 'mx-auto' : ''} ${long ? 'w-[240px]' : ''} ${
        lightHover
          ? 'hover:bg-lightWite hover:text-purple-80 focus:bg-lightWite focus:text-purple-80'
          : 'hover:bg-purple-30 focus:bg-purple-30'
      } min-w-[178px] border-0 inline-flex justify-center items-center py-[14px] bg-purple-80 transition-all rounded-full font-normal text-white text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] ${
        xwide ? 'w-[100%]' : ''
      }`}
    >
      {text}
    </ScrollLink>
  );
}

export default LinkButton;
