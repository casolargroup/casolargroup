import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './reviewSlider.scss';

import { Pagination, Autoplay } from 'swiper/modules';

const ReviewSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="reviewSlider"
    >
      <SwiperSlide>
        <div className="testimonial-item">
          <h3>Andre M.</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            I'm extremely satisfied with my PV system that California Solar Group has installed for
            me which covers all of my electricity needs including two EVs. They don't cut any
            corners and the equipment is top-notch. The staff, everyone I worked with is highly
            knowledgeable and professional. It actually surprised me how smooth and quick the whole
            process was.
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <h3>Mikhail Y.</h3>
          <h4>Designer</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            Very professional service! The guys worked hard, professional ,very efficient. They
            installed solar panels in one day. High electricity bills gone and also we received
            large tax credit.I would recommend this business to everyone I know. I highly recommend
            California Solar Group for anyone looking to go solar. They provided excellent customer
            service from start to finish, answering all my questions and addressing any concerns.
            Their team of experts installed my panels quickly and efficiently, and now my energy
            bills are almost non-existent!
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <h3>Artur M.</h3>
          <h4>Marketing and Sales</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            Was great working with the company. First full circle bill came in at nearly zero.
            Estimated panel quantity was correct. Product is functioning properly. All city permits
            were processed by the company as well.
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <h3>Rick F.</h3>
          <h4>Customer Service Manager</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            Our salesperson, Pat, was very helpful explaining the system we needed ranging from our
            solar panels to our full battery backup system. Then, the installation team wowed us
            with the quality and the speed of their work. We are now net zero - meaning our electric
            bill is now at $0 each month and we don't have to worry when our neighborhood loses
            power (which happens often in this Malibu canyon) because we are now "off the grid" when
            it comes to electric service.
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <h3>Jack I.</h3>
          <h4>Los Angeles Resident</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />I spoke with a few different
            solar companies for roof and solar installation in Los Angeles. All quotes came in not
            too far from each other. However, California Solar Group was so much easier to work with
            than others. Also, I didn't feel pressured to sign anything or make any commitments.
            Peter was great. […] CA Solar Group obtained all permits and hosted all of the
            Inspections with the city. I didn't have to do a thing. Great product, warranty, and
            company!
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
