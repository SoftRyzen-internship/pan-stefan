import SectionHeader from 'components/SectionHeader/SectionHeader';
import LinkButton from 'components/LinkButton/LinkButton';
import ProductCard from 'components/ProductCard/ProductCard';

import useBreakpoints from 'services/hooks/useBreakpoints';

import productTextContent from './product-text-content';

function ProductSection() {
  const { titleText, buttonText, products, link } = productTextContent;
  const { bigger768px } = useBreakpoints();

  return (
    <section
      id="products"
      className={`section  ${bigger768px && 'product-bg'} bg-center bg-no-repeat bg-cover`}
    >
      <div className="container text-center">
        <SectionHeader text={titleText} colored centered />
        <ul className="mt-[68px] mb-[32px] md:mt-[80px] md:mb-[60px] md:flex md:flex-wrap md:items-center md:justify-center gap-x-8 xl:gap-x-8 gap-y-[72px] xl:gap-y-[80px]">
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
        <LinkButton download text={buttonText} long link={{ target: link }} centered />
      </div>
    </section>
  );
}

export default ProductSection;
