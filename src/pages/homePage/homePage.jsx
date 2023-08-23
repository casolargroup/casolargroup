import React, { useEffect, useState } from 'react';
import './homePage.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import BillOffsetModal from '../../components/modals/billOffsetModal';
import TaxCreditWorkModal from '../../components/modals/taxCreditWorkModal';
import BatteryInstallModal from '../../components/modals/batteryInstallModal';
import HomeValueIncreaseModal from '../../components/modals/homeValueIncreaseModal';
import MadeInUsaModal from '../../components/modals/madeInUsaModal';
import ScrollTopButton from '../../components/scrollTopButton/scrollTopButton';

import aboutImg from '../../assets/images/about.jpg';
import PartnersSlider from '../../components/partnersSlider';
import ReviewSlider from '../../components/reviewSlider';
import { NavLink } from 'react-router-dom';
import { ourTeam } from '../teamPage/mock';

import CountUp from 'react-countup';
import { servicesData, warrantiesData } from './mock';
import { scrollToSection } from '../../utils/scrollToSection';

const HomePage = ({ myRef }) => {
  const [offsetModalShow, setOffsetModalShow] = useState(false);
  const [taxCreditWorkModal, setTaxCreditWorkModal] = useState(false);
  const [batteryInstallModal, setBatteryInstallModal] = useState(false);
  const [homeValueIncreaseModal, setHomeValueIncreaseModal] = useState(false);
  const [madeInUsaModal, setMadeInUsaModal] = useState(false);

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage">
      <section className="section1">
        <div className="container section1-info" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1 className="title">Powering Change with Solar Solutions</h1>
              <h2 className="desc">
                Harness the Power of the Sun for Your Home or Business With Our Solar Panels, While
                Saving Money and the Environment
              </h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4">
              <BillOffsetModal show={offsetModalShow} onHide={() => setOffsetModalShow(false)} />
              <div className="card-wrapper" onClick={() => setOffsetModalShow(true)}>
                <div className="icon-box">
                  <i className="ri-store-line" />
                  <h3>100% Bill Offset See if You Qualify</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <TaxCreditWorkModal
                show={taxCreditWorkModal}
                onHide={() => setTaxCreditWorkModal(false)}
              />
              <div className="card-wrapper" onClick={() => setTaxCreditWorkModal(true)}>
                <div className="icon-box">
                  <i className="ri-bar-chart-box-line" />
                  <h3>30% ITC Federal Tax Credit</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4">
              <BatteryInstallModal
                show={batteryInstallModal}
                onHide={() => setBatteryInstallModal(false)}
              />
              <div className="card-wrapper" onClick={() => setBatteryInstallModal(true)}>
                <div className="icon-box">
                  <i className="ri-sun-line" />
                  <h3>Premium Solar and Battery Installer</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <HomeValueIncreaseModal
                show={homeValueIncreaseModal}
                onHide={() => setHomeValueIncreaseModal(false)}
              />
              <div className="card-wrapper" onClick={() => setHomeValueIncreaseModal(true)}>
                <div className="icon-box">
                  <i className="ri-money-dollar-circle-line" />
                  <h3>Up to 20% Home Value Increase</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4">
              <MadeInUsaModal show={madeInUsaModal} onHide={() => setMadeInUsaModal(false)} />
              <div className="card-wrapper" onClick={() => setMadeInUsaModal(true)}>
                <div className="icon-box">
                  <i className="ri-flag-line" />
                  <h3>100% Made in the USA Solar Panels</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2" id="ourCompany">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <LazyLoadImage
                src={aboutImg}
                className="img-fluid"
                alt="img"
                effect="opacity"
                width={'100%'}
                height={'auto'}
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>
                Every hour, the Earth receives enough energy from the Sun, capable of fueling our
                society for an entire year.
              </h3>
              <p className="fst-italic">
                We’ll help you transition to solar energy seamlessly with expert installation,
                maintenance, storage, and financing options.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" />
                  We offer a range of customizable solar solutions tailored to your unique energy
                  needs and goals, including solar panel installation, solar battery storage, EV
                  charging stations, and more!
                </li>
                <li>
                  <i className="ri-check-double-line" />
                  We are committed to using only the highest quality solar equipment and
                  technologies, sourced from reputable manufacturers and backed by comprehensive
                  warranties and guarantees.
                </li>
                <li>
                  <i className="ri-check-double-line" />
                  We are dedicated to customer satisfaction with personalized consultations,
                  transparent pricing, and ongoing support for optimal solar system performance.
                </li>
              </ul>
              <p>
                Join us on this exciting journey towards a brighter and sustainable future. Explore
                our website to discover the power of solar energy, learn about our innovative
                solutions, and see how you can become part of the solar revolution. Together, let's
                unlock the immense potential of the sun and create a world powered by clean,
                renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="image col-lg-6" data-aos="fade-right" />
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-receipt" />
                <h4>Experience and Expertise</h4>
                <p>
                  Our Customers chose California Solar Group because of our experience and expertise
                  in the Solar industry. California Solar Group has hundreds of projects installed
                  and producing throughout Southern California. We have a proven track record of
                  successful Solar PV and Battery Storage installations.We take pride in our ability
                  to deliver quality service to our customers.
                </p>
              </div>
              <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-cube-alt" />
                <h4>High-Quality Equipment</h4>
                <p>
                  The quality of the solar panels, inverters, battery storage systems and other
                  equipment used in a Solar installation can have a significant impact on the
                  system's performance and durability. California Solar Group is a company that uses
                  high-quality Tier 1 equipment from reputable manufacturers and distributors to
                  ensure the longevity and efficiency of their solar system.This is why we feel
                  confident offering some of the best warranties in the industry.
                </p>
              </div>
              <div className="icon-box mt-5 " data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-images" />
                <h4>Financing Options</h4>
                <p>
                  Solar installations can be a significant investment for a homeowner. 80% of Solar
                  and Battery Storage projects are financed.California Solar Group offers a variety
                  of competitive financing options to make the cost more manageable for our
                  customers. Each Solar / Battery project is uniquely tailored for the homeowner’s
                  needs. Accordingly, California Solar Group offers financing options to suit
                  different budgets and preferences.
                </p>
              </div>
              <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-shield" />
                <h4>Customer Service</h4>
                <p>
                  Good customer service is essential when choosing a solar company. At California
                  Solar Group Customer Service is the backbone of our business model.We seek to
                  provide clear and transparent communication throughout the installation process
                  and beyond. California Solar Group considers each and every customer we work with
                  to be a member of our Green Energy Family. We look forward to providing ongoing
                  support and maintenance services for the lifespan of the system which can easily
                  extend past 25 years. In a market saturated with promises and sales pitches,
                  California Solar Group distinguishes itself by striving to give the best customer
                  experience possible. Our motto is a bit old fashioned “The Customer is Always
                  Right” this is our core belief. We are here for our customers, we would not exist
                  without them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicesSection" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="row">
            {servicesData.map(item => {
              return (
                <div className="col-lg-3 col-md-6" key={item.id}>
                  <div className="service-cart">
                    <div className="service-image">
                      <LazyLoadImage
                        src={item.imgUrl}
                        alt="img"
                        effect="opacity"
                        width={'100%'}
                        height={'100%'}
                      />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="warrantiesSection" id="warranties">
        <div className="container">
          <div className="section-title">
            <h2>Warranties</h2>
          </div>
          <div className="row">
            {warrantiesData.map(item => {
              return (
                <div key={item.id} className="col-md-4 col-6 col-xl-2">
                  <LazyLoadImage src={item.imgUrl} alt={'img'} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section5 mb-5">
        <div className="container">
          <ReviewSlider />
        </div>
      </section>
      <section className="section3">
        <div className="container">
          <div className="section-title">
            <h2>Partners</h2>
          </div>
          <PartnersSlider />
        </div>
      </section>
      <section className="section6" id="team">
        <div className="our-team">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Team</h2>
            </div>
            <div className="row">
              {ourTeam.slice(0, 4).map(item => {
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={item.id}>
                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                      <div className="member-img">
                        <LazyLoadImage
                          src={item.imgUrl}
                          id="image_1"
                          className="img-fluid"
                          alt="img"
                          effect="blur"
                          width={'100%'}
                          height={'auto'}
                        />
                      </div>
                      <div className="member-info">
                        <h4>{item.name}</h4>
                        <span>{item.profession}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <NavLink to="/team" className="btn btn-warning btn-lg">
                      More&nbsp;Info
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section7">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div
              className="imageCount col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
              data-aos="fade-right"
              data-aos-delay="100"
            />
            <div
              className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="content d-flex flex-column justify-content-center">
                <h3>
                  Experience the California Solar Group Difference: Countless Happy Clients and
                  Completed Projects!
                </h3>
                <p>
                  California Solar Group is the trusted choice for solar panel installation and
                  service. With a proven track record of delighted clients and numerous successful
                  projects under our belt, you can rely on us for unparalleled expertise and
                  exceptional customer care.
                </p>
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile" />
                      <CountUp end={2500} />
                      <p>
                        <strong>Happy Clients </strong>
                        We have worked with a wide range of clients over the years, and we are proud
                        to have received positive feedback from all of them.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext" />
                      <CountUp end={720} />
                      <p>
                        <strong>Projects </strong>
                        From small residential jobs to large commercial projects, we have completed
                        a diverse range of projects.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock" />
                      <CountUp end={20} duration={4} />
                      <p>
                        <strong>Years of experience </strong>
                        Our team has been providing top-quality solar services for over a decade,
                        giving us the skills and expertise to handle any project.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award" />
                      <CountUp end={5} duration={6} />
                      <p>
                        <strong>Awards </strong>
                        We have been recognized for our outstanding work with various awards and
                        accolades in our field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTopButton />
    </div>
  );
};

export default HomePage;
