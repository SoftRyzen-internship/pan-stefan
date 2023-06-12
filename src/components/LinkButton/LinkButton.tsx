import { scroller, Link as ScrollLink } from 'react-scroll';

import LinkButtonProps from './LinkButtonTypes';

function LinkButton(props: LinkButtonProps) {
  const { link, text, centered, long, lightHover, xwide, download } = props;

  return download ? (
    <a
      className={`cursor-pointer  ${centered ? 'mx-auto' : ''} ${
        long ? 'w-[240px]' : 'max-w-[240px]'
      } ${
        lightHover
          ? 'hover:bg-lightWite hover:text-purple-80 focus:bg-lightWite focus:text-purple-80'
          : 'hover:bg-purple-30 focus:bg-purple-30'
      } min-w-[178px] border-0 inline-flex justify-center items-center py-3.5 px-3 bg-purple-80 transition-all rounded-full font-normal text-center text-white text-[16px] leading-[1.5] md:text-[16px] xl:text-[16px] ${
        xwide ? 'w-[100%]' : ''
      }`}
      href={link.target}
      rel="noopener noreferrer nofollow"
      target="_blank"
      tabIndex={0}
    >
      {text}
    </a>
  ) : (
    <ScrollLink
      to={link.target}
      smooth={true}
      duration={500}
      tabIndex={0}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          scroller.scrollTo(link.target, {
            duration: 500,
            smooth: true,
          });
        }
      }}
      className={`cursor-pointer  ${centered ? 'mx-auto' : ''} ${
        long ? 'w-[240px]' : 'max-w-[240px]'
      } ${
        lightHover
          ? 'hover:bg-lightWite hover:text-purple-80 focus:bg-lightWite focus:text-purple-80'
          : 'hover:bg-purple-30 focus:bg-purple-30'
      } min-w-[178px] border-0 inline-flex justify-center items-center py-3.5 px-3 bg-purple-80 transition-all rounded-full font-normal text-center text-white text-base leading-[1.5] ${
        xwide ? 'w-[100%]' : ''
      }`}
    >
      {text}
    </ScrollLink>
  );
}

export default LinkButton;
