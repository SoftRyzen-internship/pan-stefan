import Slider from 'components/Slider/Slider';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import photogallarySectionTextContent from './vacancy-section-text-content';

function Photogallery() {
  const { headerText } = photogallarySectionTextContent;
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center">
          <SectionHeader text={headerText} colored />
        </div>
        <Slider />
      </div>
    </section>
  );
}

export default Photogallery;
