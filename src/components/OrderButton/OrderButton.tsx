import OrderButtonProps from './OrderButtonTypes';

function OrderButton({ onClick }: OrderButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="fixed z-10 bottom-[5%] md:bottom-[2%] xl:bottom-[10%] right-[6%] md:right-[4%] xl:right-[4%] w-[73px] s:w-[100px] md:w-[127px] h-[73px] s:h-[100px] md:h-[127px] flex justify-center items-center border border-purple-80 hover:border-purple-30 focus:border-purple-30 bg-purple-80 hover:bg-lightWite focus:bg-lightWite ring-[1px] ring-offset-[3px] ring-purple-80 hover:ring-purple-30 focus:ring-purple-30 transition-all rounded-full text-white hover:text-purple-80 focus:text-purple-80 text-xs leading-[2.3] md:text-lg md:leading-[1.5]"
    >
      Замовити
    </button>
  );
}

export default OrderButton;
