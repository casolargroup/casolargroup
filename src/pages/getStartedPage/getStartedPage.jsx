import React, { useState } from 'react';
import './getStartedPage.scss';

import img from '../../assets/images/Get Started-min.jpg';
import congrats from '../../assets/images/Congrats.png';

import GetStartedForm from '../../components/getStartedForm';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GetStartedPage = () => {
  const [valid, setValid] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [calculate, setCalculate] = useState(false);

  const renderSection = () => {
    if (!valid && !calculate) {
      return (
        <div className="col-md-6 mb-4 mb-md-0">
          <LazyLoadImage
            src={img}
            alt="img"
            className="getStartedImg img-fluid"
            width={'100%'}
            height={'auto'}
          />
        </div>
      );
    } else if (!valid && calculate) {
      return <></>;
    } else if (valid && calculate) {
      return (
        <div className="col-md-8 mb-4 mb-md-0">
          <LazyLoadImage
            src={congrats}
            alt="img"
            className="img-fluid"
            width={'100%'}
            height={'auto'}
          />
        </div>
      );
    } else if (valid && !calculate) {
      return (
        <div className="col-md-8 mb-4 mb-md-0">
          <LazyLoadImage
            src={congrats}
            alt="img"
            className="img-fluid"
            width={'100%'}
            height={'auto'}
          />
        </div>
      );
    }
  };

  return (
    <div className="getStartedPage">
      <div className="container">
        <div className={`row ${valid ? 'flex-row-reverse' : ''}`}>
          {!valid ? (
            <GetStartedForm
              valid={valid}
              setValid={setValid}
              isOwner={isOwner}
              setIsOwner={setIsOwner}
              calculate={calculate}
              setCalculate={setCalculate}
            />
          ) : (
            <div className="col-md-4">
              <div className="thank-you-message">
                <h1>
                  {isOwner ? (
                    'Thank you!'
                  ) : (
                    <span>
                      ...Apologies! <br /> California Solar Group is exclusively available to
                      home/business owners.
                    </span>
                  )}
                </h1>
                <p>
                  {isOwner
                    ? "We'll get in touch within one business day to set up your free consultation. Make sure you have access to your current utility bill."
                    : 'However, you have the opportunity to earn $1,000 for each friend you refer who decides to switch to solar energy.'}
                  <br /> <br />
                  {!!isOwner && (
                    <span>
                      * past utility bills are also helpful if you have access to historic usage
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
