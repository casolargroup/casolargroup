import React from 'react';
import './taxCreditWorkModal.scss';
import Modal from 'react-bootstrap/Modal';

const TaxCreditWorkModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={'taxCreditWorkModal'}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tax Credit Work</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="title">Welcome to California Solar Group</p>
        <p className="desc mb-3">Your Gateway to the 30% ITC Solar Tax Credit in California!</p>
        <p className="title">
          Take Advantage of the 30% Tax Credit with Solar and Battery Installations
        </p>
        <p className="desc mb-3">
          Are you a homeowner or business owner in California looking to harness the power of solar
          energy while saving money? Look no further! At California Solar Group, we offer
          state-of-the-art solar and battery storage installations. Solar and Battery Storage
          Projects will help you reduce your electricity costs significantly and may also enable you
          to take advantage of the lucrative 2023 30% ITC tax credit offered by the federal
          government.
        </p>
        <p className="title">How Does the 30% Tax Credit Work?</p>
        <p className="desc mb-3">
          The federal government provides a 30% Investment Tax Credit for qualified solar energy and
          battery storage systems installed in residential and commercial properties. Please consult
          your CPA or Tax Professional to see if you can take advantage of this substantial
          incentive that makes solar and battery installations in California more affordable than
          ever before.
        </p>
        <p className="title">Why Choose California Solar Group for Your Solar Installation?</p>
        <p className="desc mb-3">
          At California Solar Group, we have a proven track record of helping homeowners and
          businesses in California go solar while maximizing their financial benefits. By partnering
          with us, you'll not only receive expert guidance throughout the installation process but
          also gain access to our extensive knowledge of tax credits and incentives, ensuring you
          take full advantage of the 30% tax credit and all available battery rebates for your solar
          investment.
        </p>
        <p className="title">Contact Us Today to Unlock the 30% Tax Credit!</p>
        <p className="desc">
          Ready to take advantage of the 30% tax credit for solar installations in California?
          Contact California Solar Group today for a free consultation. Our team of experts will
          guide you through the entire process, from system design and installation to maximizing
          your tax credit benefits. Join the solar revolution and start saving with California Solar
          Group now!
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default TaxCreditWorkModal;
