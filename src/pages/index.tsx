import DropDown from '@/components/DropDown/DropDown';
import Layout from '@/components/Layout/Layout';
import WorkForm from '@/components/WorkForm/WorkForm';
import Button from '@/components/Button/Button';

import HeroSection from '@/sections/HeroSection/HeroSection';
import AboutUsSection from '@/sections/AboutUsSection/AboutUsSection';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <AboutUsSection />
        <section className="section">
          <div className="container bg-slate-700 font-display font-bold">
            <DropDown>
              <WorkForm />
            </DropDown>
          </div>
        </section>
        <AboutUsSection />
      </>
    </Layout>
  );
}
