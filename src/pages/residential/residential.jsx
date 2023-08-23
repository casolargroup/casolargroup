import React from 'react';
import './residential.scss';
import residential1 from '../../assets/images/residential/Residential 4-min.jpg';
import residential2 from '../../assets/images/residential/Residential 6-min.jpg';
import residential3 from '../../assets/images/residential/Residential 8-min.jpg';
import { residentialBenefits, residentiallList } from './mock';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Residential = () => {
  return (
    <div className="residential">
      <div className="container">
        <h2 className="page-title fw-bold">Residential Solar Panels</h2>
        <p className="page-description">
          Residential solar panels, also known as photovoltaic (PV) panels, are devices that convert
          sunlight into electricity. They are designed for installation on residential buildings,
          such as houses and apartment complexes, to harness the energy from the sun and provide a
          clean and renewable source of electricity. <br /> Here's some information about
          residential solar panels:
        </p>
        <div className="row mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <LazyLoadImage
              src={residential1}
              alt="img"
              className="img-fluid"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            <ul className="list">
              {residentiallList.slice(0, 4).map(item => {
                return (
                  <li key={item.id}>
                    <h4 className="list-title">{item.title}</h4>
                    <p className="list-description">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row mb-5 flex-row-reverse">
          <div className="col-md-6 mb-3 mb-md-0">
            <LazyLoadImage
              src={residential2}
              alt="img"
              className="img-fluid"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            <h4 className="benefits-title ps-4 fw-bold">Benefits:</h4>
            <ul className="mt-4">
              {residentialBenefits.map(item => {
                return (
                  <li key={item.id}>
                    <h5 className="benefits-list-title">{item.title}</h5>
                    <p className="benefits-list-description">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <LazyLoadImage
              src={residential3}
              alt="img"
              className="img-fluid"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            <ul className="list">
              {residentiallList.slice(4).map(item => {
                return (
                  <li key={item.id}>
                    <h4 className="list-title">{item.title}</h4>
                    <p className="list-description">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <NavLink to="/get-started" className="d-flex mx-auto justify-content-center mt-5">
          <Button className={'get-started-btn'}>Get Started</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Residential;
