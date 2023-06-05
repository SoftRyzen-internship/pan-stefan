import IProduct from './IProduct';

function ProductCard(props: IProduct) {
  const { product } = props;
  const { id, category, productDescription, imageSrc } = product;
  return (
    <div className="bg-lightWite text-center pt-[214px] pb-11 px-5 rounded-t-[200px] border border-purple-80 mb-[72px]">
      <h3 className="font-cormorant text-purple-80 font-semibold text-[32px]">{category}</h3>
      <p className="text-black">{productDescription}</p>
    </div>
  );
}

export default ProductCard;
