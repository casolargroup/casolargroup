import React from 'react';

import Modal from 'react-bootstrap/Modal';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './portfolioSlider.scss';
import { portfolioTabs } from '../../pages/portfolioPage/mock';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PortfolioSlider = ({ modalShow, setModalShow, imgid, tabKey }) => {
  return (
    <div className="portfolioSlider">
      <Modal
        show={modalShow}
        imgid={imgid}
        onHide={() => setModalShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="portfolioSlideModal"
      >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <h4>{tabKey}</h4>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            className="portfolioSlide"
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={imgid - 1}
            navigation
            // onSwiper={swiper => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {portfolioTabs
              .filter(item => item.title === tabKey)[0]
              .images.map(imgItem => {
                return (
                  <SwiperSlide key={imgItem.id}>
                    <LazyLoadImage
                      key={imgItem.id}
                      src={imgItem.imgUrl}
                      alt="img"
                      effect="opacity"
                      width={'100%'}
                      height={'100%'}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PortfolioSlider;
