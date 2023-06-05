import IProduct from './IProduct';
import Image from 'next/image';

function ProductCard(props: IProduct) {
  const { product } = props;
  const { category, productDescription, src } = product;

  return (
    <li
      className={`relative bg-lightWite text-center pt-[214px] h-[508px] md:h-[472px] xl:h-[456px] w-[280px] md:w-[336px] xl:w-[384px] px-5 rounded-t-[200px] border border-purple-80 `}
    >
      <div className="absolute left-0 right-0 w-[100%] top-[-5%]">
        {
          <Image
            width={240}
            height={224}
            src={src}
            alt={category}
            className="mx-auto w-[217px] h-[178px] md:w-[240px] md:h-[224px]"
          />
        }
      </div>

      <h3 className="font-cormorant text-purple-80 font-semibold text-[32px] mb-[22px] leading-9	">
        {category}
      </h3>
      <p className="text-black leading-6">{productDescription}</p>
    </li>
  );
}

export default ProductCard;
