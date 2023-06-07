import Layout from 'sections/Layout/Layout';

import HeroSection from 'sections/HeroSection/HeroSection';
import AboutUsSection from 'sections/AboutUsSection/AboutUsSection';
import ProductSection from 'sections/ProductSection/ProductSection';
import VacancySection from 'sections/VacancySection/VacancySection';
import PhotoGallerySection from 'sections/PhotogallerySection/PhotogallerySection';
import ContactSection from 'sections/ContactSection/ContactSection';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <AboutUsSection />
        <ProductSection />
        <VacancySection />
        <PhotoGallerySection />
        <ContactSection />
      </>
    </Layout>
  );
}
