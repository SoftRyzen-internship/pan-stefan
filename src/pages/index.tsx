import DropDown from '@/components/DropDown/DropDown';
import Layout from '@/components/Layout/Layout';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
export default function Home() {
  return (
    <Layout>
      <>
        <section className="section">
          <div className="container bg-slate-700 font-display font-bold">
            <DropDown>
              <RegisterForm />
            </DropDown>
          </div>
        </section>
      </>
    </Layout>
  );
}
