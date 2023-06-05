import Layout from 'components/Layout/Layout';

import HeroSection from 'sections/HeroSection/HeroSection';
import AboutUsSection from 'sections/AboutUsSection/AboutUsSection';
import ProductSection from 'sections/ProductSection/ProductSection';
import VacancySection from 'sections/VacancySection/VacancySection';
import PhotoGallery from 'sections/PhotoGallerySection/PhotoGallerySection';
import ContactSection from 'sections/ContactSection/ContactSection';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <AboutUsSection />
        <ProductSection />
        <VacancySection />
        <PhotoGallery />
        <ContactSection />
      </>
    </Layout>
  );
}
