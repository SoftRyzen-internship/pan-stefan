import ButtonProps from './ButtonTypes';

function Button(props: ButtonProps) {
  const { type, text, centered, long, lightHover, onClick, xwide } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${centered ? 'mx-auto' : ''} ${long ? 'w-[240px]' : 'max-w-[240px]'} ${
        lightHover
          ? 'hover:bg-lightWite hover:text-purple-80 focus:bg-lightWite focus:text-purple-80'
          : 'hover:bg-purple-30 focus:bg-purple-30'
      } min-w-[178px] border-0 flex justify-center items-center py-[14px] px-[12px] bg-purple-80 transition-all rounded-full font-normal text-white text-base leading-[1.5]  ${
        xwide ? 'w-[100%]' : ''
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
