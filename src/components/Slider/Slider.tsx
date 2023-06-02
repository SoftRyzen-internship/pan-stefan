import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Image from 'next/image';

import NextIcon from '../../../public/assets/icon/Right.svg';
import PrevIcon from '../../../public/assets/icon/Left.svg';

import useBreakpoints from '@/services/hooks/useBreakpoints';
import css from './Slider.module.css';

const images = [
  { id: '1', src: '/assets/images/slider/photo1.jpg', name: 'cake' },
  { id: '2', src: '/assets/images/slider/photo2.jpg', name: 'cake' },
  { id: '3', src: '/assets/images/slider/photo3.jpg', name: 'cake' },
  { id: '4', src: '/assets/images/slider/photo4.jpg', name: 'cake' },
  { id: '5', src: '/assets/images/slider/photo5.jpg', name: 'cake' },
  { id: '6', src: '/assets/images/slider/photo6.jpg', name: 'cake' },
  { id: '7', src: '/assets/images/slider/photo7.jpg', name: 'cake' },
];

const Slider = () => {
  const { less768px, bigger1280px } = useBreakpoints();
  return (
    <ul className="relative h-[280px] md:h-[336px] xl:h-[384px]">
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
            <SwiperSlide className="w-[280px] md:w-[336px] xl:w-[384px]" key={path.id}>
              <div className="swiper-slide-content overflow-hidden">
                <Image
                  src={path.src}
                  alt={path.name}
                  width={less768px ? 280 : bigger1280px ? 384 : 336}
                  height={less768px ? 280 : bigger1280px ? 384 : 336}
                  loading="lazy"
                  className="object-cover w-full cursor-move"
                />
              </div>
            </SwiperSlide>
          </li>
        ))}
      </Swiper>
      <div className="relative flex items-center justify-center mt-8 md:mt-10 xl:mt-10">
        <div
          className={`swiper-button-next  swiper-button-next-custom ${css['swiper-button-next-custom']} ${css['swiper-button-next']}`}
        >
          <NextIcon width={48} height={32} className="py-[7px] px-[5px]" aria-label="next button" />
        </div>
        <div
          className={`swiper-button-prev swiper-button-prev-custom ${css['swiper-button-prev-custom']} ${css['swiper-button-prev']}`}
        >
          <PrevIcon width={48} height={32} className="py-[7px] px-[5px]" aria-label="prev button" />
        </div>
      </div>
    </ul>
  );
};

export default Slider;
