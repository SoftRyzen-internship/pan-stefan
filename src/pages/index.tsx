import Layout from '@/components/Layout/Layout';

import HeroSection from '@/sections/HeroSection/HeroSection';
import AboutUsSection from '@/sections/AboutUsSection/AboutUsSection';
import VacancySection from '@/sections/VacancySection/VacancySection';
import ContactSection from '@/sections/ContactSection/ContactSection';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <AboutUsSection />
        <VacancySection />
        <ContactSection />
      </>
    </Layout>
  );
}
