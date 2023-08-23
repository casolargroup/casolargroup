import React from 'react';
import './teamPage.scss';
import { ourTeam } from './mock';
import team from '../../assets/images/team/0.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeamPage = () => {
  return (
    <div className="inner-page">
      <div className="container">
        <div className="text-center">
          <h2>Meet Our Sustainable Dream Team: California Solar Group Innovators!</h2>
          <p>
            At California Solar Group, our team thrives on diversity. We come from various
            backgrounds and cultures, united by our passion for renewable energy. Embracing our
            differences drives innovation and propels us toward a brighter, sustainable future,
            together.
          </p>
          <LazyLoadImage
            src={team}
            className="img-fluid"
            alt="img"
            width={'100%'}
            height={'auto'}
          />
        </div>
        <div className="row mt-5">
          {ourTeam.map(item => {
            return (
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={item.id}>
                <div
                  className="member aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="member-img">
                    <LazyLoadImage
                      src={item.imgUrl}
                      className="img-fluid"
                      alt="img"
                      width={'100%'}
                      height={'auto'}
                    />
                  </div>
                  <div className="member-info">
                    <p>{item.name}</p>
                    <span>{item.profession}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
