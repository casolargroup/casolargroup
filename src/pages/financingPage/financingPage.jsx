import React from 'react';
import './financingPage.scss';
import { chooseList, featuresList } from './mock';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const FinancingPage = () => {
  return (
    <div className="financingPage">
      <div className="container">
        <h3 className="fw-bold mb-3">Financing</h3>
        <p className="page-description mb-4">
          We at California Solar Group understand that investing in solar energy can be a
          significant decision for homeowners and businesses. That's why we offer a range of
          flexible and affordable solar financing options to help you go solar without breaking the
          bank. Our solar and battery financing services are designed to make the transition to
          clean, renewable energy as seamless as possible. Whether you're looking to install a solar
          system for your home or commercial property, we have the right financing solution to meet
          your needs.
        </p>
        <h4 className="fw-bold mb-4">Key Features of Our Solar Financing Services</h4>
        <ul className="financingList">
          {featuresList.map(item => {
            return (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="fw-bold mt-4 mb-4">
          Why Choose California Solar Group for Solar Financing?
        </h4>
        <p className="financing-description">
          As a leading solar energy company in California, we have years of experience in helping
          homeowners and businesses harness the power of the sun. When you choose our solar
          financing services, you benefit from:
        </p>
        <ul className="financingList">
          {chooseList.map(item => {
            return (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
        <p className="financing-description">
          Ready to make the switch to solar? Contact California Solar Group today to learn more
          about our solar financing services and start your journey towards clean, affordable, and
          sustainable energy.
        </p>
        <NavLink to="/get-started" className="d-flex mx-auto justify-content-center">
          <Button className={'get-started-btn'}>Get Started</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default FinancingPage;
