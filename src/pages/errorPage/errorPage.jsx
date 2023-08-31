import React from 'react';
import './errorPage.scss';
import notFound from '../../assets/images/404.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="container">
        <LazyLoadImage
          src={notFound}
          className="img-fluid"
          alt="img"
          width={'100%'}
          height={'auto'}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
