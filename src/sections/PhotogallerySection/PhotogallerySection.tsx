import Slider from '@/components/Slider/Slider';

import useBreakpoints from '../../services/hooks/useBreakpoints';

function Photogallery() {
  return (
    <section
      id="Фотогалерея"
      className="section pt-[60px] md:pt-[102px] md:pb-[100px] xl:pt-[60px] xl:pb-[65px]"
    >
      <div className="container">
        <Slider></Slider>
      </div>
    </section>
  );
}

export default Photogallery;
