import OrderButtonProps from './OrderButtonTypes';

function OrderButton({ onClick }: OrderButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="fixed z-10 top-[75%] md:top-[55%] xl:top-[55%] right-[6%] md:right-[4%] xl:right-[2%] w-[73px] md:w-[127px] h-[73px] md:h-[127px] flex justify-center items-center border border-purple-80 hover:border-purple-30 focus:border-purple-30 bg-purple-80 hover:bg-lightWite focus:bg-lightWite ring-[1px] ring-offset-[3px] ring-purple-80 hover:ring-purple-30 focus:ring-purple-30 transition-all rounded-full text-white hover:text-purple-80 focus:text-purple-80 text-[12px]/[28px] md:text-[18px]/[28px]"
    >
      Замовити
    </button>
  );
}

export default OrderButton;
