import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';

import productTextContent from './product-text-content';

function ProductSection() {
  const { titleText, buttonText, products } = productTextContent;
  return (
    <section id="productSection" className="section hero-bg bg-center">
      <div className="container ">
        <SectionHeader text={titleText} colored centered />
        <ul className="mt-[68px] mb-[32px] md:mt-[80px] md:mb-[60px] flex flex-wrap items-center md:justify-center gap-x-8 xl:gap-x-8 gap-y-[72px] xl:gap-y-[80px]">
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
        <Button type="button" text={buttonText} link={{ target: '' }} centered />
      </div>
    </section>
  );
}

export default ProductSection;
