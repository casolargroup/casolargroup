import React from 'react';
import './commercial.scss';
import { commercialList } from './mock';
import commecrcial2 from '../../assets/images/Commercial1.jpg';
import commecrcial1 from '../../assets/images/Commercial 2.jpg';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Commercial = () => {
  return (
    <div className="commercial">
      <div className="container">
        <h2 className="page-title fw-bold">Commercial Solar Panels</h2>
        <p className="page-description mb-5">
          Commercial solar panels are photovoltaic (PV) panels designed specifically for use in
          commercial and industrial settings to generate electricity from sunlight. They are similar
          to residential solar panels but are typically larger and more powerful to accommodate the
          higher energy demands of commercial facilities. <br /> Here are some key points about
          commercial solar panels:
        </p>
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <LazyLoadImage
              src={commecrcial1}
              alt="img"
              className="img-fluid"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            <ul className="list">
              {commercialList.slice(0, 4).map(item => {
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
        <div className="row mb-4 flex-row-reverse">
          <div className="col-md-6  mb-3 mb-md-0">
            <LazyLoadImage
              src={commecrcial2}
              alt="img"
              className="img-fluid mt-5"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            <ul className="list">
              {commercialList.slice(4).map(item => {
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
        <NavLink to="/get-started" className="d-flex mx-auto justify-content-center">
          <Button className={'get-started-btn'}>Get Started</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Commercial;
