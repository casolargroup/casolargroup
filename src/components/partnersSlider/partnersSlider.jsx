import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './partnersSlider.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { sliderList } from './mock';

const PartnersSlider = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="partnerSwiper"
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 5,
        },
      }}
    >
      {sliderList.map(item => {
        return (
          <SwiperSlide key={item.id}>
            <div className="slide-item-grid">
              {item.slide.map(slideItem => {
                return (
                  <a
                    href={slideItem.link}
                    name="partner"
                    className="partnersLink"
                    key={slideItem.id}
                  >
                    <LazyLoadImage
                      src={slideItem.img}
                      alt="img"
                      className={`img-fluid ${slideItem.class}`}
                      effect="blur"
                      width={'auto'}
                      height={'100%'}
                    />
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PartnersSlider;
