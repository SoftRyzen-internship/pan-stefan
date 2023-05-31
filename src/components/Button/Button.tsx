import { Link } from 'react-scroll';

import ButtonProps from './ButtonTypes';

function Button(props: ButtonProps) {
  const { type, link, text, centered, long, lightHover, onClick, xwide } = props;
  const core = (
    <button
      type={type}
      onClick={onClick}
      className={`${centered ? 'mx-auto' : ''} ${long ? 'w-[240px]' : ''} ${
        lightHover ? 'hover:bg-lightWite hover:text-purple-80' : 'hover:bg-purple-30'
      } min-w-[178px] border-0 flex justify-center items-center py-[14px] bg-purple-80 transition-all rounded-full font-normal text-white text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] ${
        xwide ? 'w-[100%]' : ''
      }`}
    >
      {text}
    </button>
  );
  return link ? (
    <Link to={link.target} smooth={true} duration={500}>
      {core}
    </Link>
  ) : (
    core
  );
}

export default Button;