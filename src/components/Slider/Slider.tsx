import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Image from 'next/image';

import NextIcon from '@/public/assets/icon/Right.svg';
import PrevIcon from '@/public/assets/icon/Left.svg';

import useBreakpoints from 'services/hooks/useBreakpoints';
import css from './Slider.module.css';
import images from './sliderImages';

const Slider = () => {
  const { less768px, bigger1280px } = useBreakpoints();
  return (
    <>
      <ul className="relative max-md:h-full md:h-[336px] xl:h-[384px]">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={32}
          slidesPerView={less768px ? 1 : bigger1280px ? 3 : 2}
          modules={[Navigation]}
          className="flex items-center justify-center"
        >
          {images.map(path => (
            <li key={path.id} className="">
              <SwiperSlide className="max-md:w-full md:w-[336px] xl:w-[384px]" key={path.id}>
                <div className="swiper-slide-content overflow-hidden">
                  <Image
                    src={path.src}
                    alt={path.name}
                    width={384}
                    height={384}
                    loading="lazy"
                    className="object-cover w-full cursor-move"
                  />
                </div>
              </SwiperSlide>
            </li>
          ))}
        </Swiper>
      </ul>
      <div className="relative h-8 flex items-center justify-center mt-8 md:mt-10 xl:mt-10">
        <div
          className={`swiper-button-next  swiper-button-next-custom ${css['swiper-button-next-custom']} ${css['swiper-button-next']}`}
        >
          <NextIcon
            width={48}
            height={32}
            className="py-[7px] px-[5px]"
            aria-label="Наступне зображення"
          />
        </div>
        <div
          className={`swiper-button-prev swiper-button-prev-custom ${css['swiper-button-prev-custom']} ${css['swiper-button-prev']}`}
        >
          <PrevIcon
            width={48}
            height={32}
            className="py-[7px] px-[5px]"
            aria-label="Попереднє зображення"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
