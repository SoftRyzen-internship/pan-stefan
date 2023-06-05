import Slider from 'components/Slider/Slider';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import photoGallarySectionTextContent from './gallery-section-text-content';

function PhotoGallery() {
  const { headerText } = photoGallarySectionTextContent;
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

export default PhotoGallery;
