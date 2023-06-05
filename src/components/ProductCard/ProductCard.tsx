import IProduct from './IProduct';

function ProductCard(props: IProduct) {
  const { product } = props;
  const { id, category, productDescription, imageSrc } = product;
  console.log(imageSrc);
  const beforeBgStyle = `before:${imageSrc} before:top-[-4.2rem] xl:before:top-[-2rem] xl:before:left-[calc(50%_+_286px)] before:left-[calc(50%_+_140px)] after:before='' before:absolute before:w-[392px] before:h-[300px] before:block max-xl:before:scale-[0.63]`;

  return (
    <div
      className={`relative bg-lightWite text-center pt-[214px] pb-11 px-5 rounded-t-[200px] border border-purple-80 mb-[72px] ${beforeBgStyle}`}
    >
      <h3 className="font-cormorant text-purple-80 font-semibold text-[32px]">{category}</h3>
      <p className="text-black">{productDescription}</p>
    </div>
  );
}

export default ProductCard;
