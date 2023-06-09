import IProduct from './IProduct';
import Image from 'next/image';

function ProductCard(props: IProduct) {
  const { product } = props;
  const { category, productDescription, src } = product;

  return (
    <li className="md:place-self-stretch max-md:mx-auto max-md:mb-[72px] max-md:last:mb-[32px] relative px-5 md:px-8 bg-lightWite text-center pt-[214px] pb-5 md:pb-8 xl:pb-10 min-h-[508px] s:min-h-[462px] md:min-h-[472px] xl:min-h-[456px] w-[100%] max-md:max-w-[336px] md:w-[336px] xl:w-[384px] rounded-t-[200px] border border-purple-80">
      <div className="absolute left-0 right-0 w-[100%] top-[-5%] xl:top-[-8%]">
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

      <h3 className="relative block font-cormorant text-purple-80 font-semibold text-[32px] mb-[22px] leading-9	w-[100%] after:absolute  after:bg-cardGradient after:w-[162px] after:h-[1px] after:bottom-[-10px] after:left-[50%] after:translate-x-[-50%] after:block">
        {category}
      </h3>
      <p className="text-base text-black">{productDescription}</p>
    </li>
  );
}

export default ProductCard;
