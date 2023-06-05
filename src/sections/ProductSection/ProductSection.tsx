import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';

import useBreakpoints from '../../services/hooks/useBreakpoints';
import heroTextContent from './product-text-content';

function ProductSection() {
  const { less768px, bigger1280px } = useBreakpoints();
  const { titleText, buttonText, products } = heroTextContent;
  return (
    <section id="productSection" className="section hero-bg bg-center">
      <div className="container flex flex-col items-center md:flex-row md:justify-between xl:justify-start">
        <div className="mb-[60px] md:mb-0 xl:mr-[134px]">
          <SectionHeader text={titleText} colored centered />
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
          <Button type="button" text={buttonText} link={{ target: '' }} centered />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
