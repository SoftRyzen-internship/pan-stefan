import DropDown from '@/components/DropDown/DropDown';
import Layout from '@/components/Layout/Layout';
import WorkForm from '@/components/WorkForm/WorkForm';
import Button from '@/components/Button/Button';
export default function Home() {
  return (
    <Layout>
      <>
        <section className="section">
          <div className="container bg-slate-700 font-display font-bold">
            <DropDown>
              <WorkForm />
            </DropDown>
          </div>
        </section>
      </>
    </Layout>
  );
}
