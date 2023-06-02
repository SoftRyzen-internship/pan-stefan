import Layout from '@/components/Layout/Layout';

import HeroSection from '@/sections/HeroSection/HeroSection';
import AboutUsSection from '@/sections/AboutUsSection/AboutUsSection';
import VacancySection from '@/sections/VacancySection/VacancySection';
import Photogallery from '@/sections/PhotogallerySection/PhotogallerySection';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <AboutUsSection />
        <VacancySection />
        <Photogallery />
      </>
    </Layout>
  );
}
