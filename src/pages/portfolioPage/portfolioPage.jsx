import React from 'react';
import './portfolioPage.scss';
import ControlledTabs from '../../components/controlledTabs';
import { portfolioTabs } from './mock';

const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <div className="container">
        <h4 className="fw-bold mb-4">Our Portfolio</h4>
        <ControlledTabs content={portfolioTabs} />
      </div>
    </div>
  );
};

export default PortfolioPage;
