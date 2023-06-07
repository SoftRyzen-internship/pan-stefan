import Slider from 'components/Slider/Slider';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import photoGallerySectionTextContent from './gallery-section-text-content';

function PhotoGallerySection() {
  const { headerText } = photoGallerySectionTextContent;
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

export default PhotoGallerySection;
