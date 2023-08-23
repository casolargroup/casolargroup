import React from 'react';
import './homeValueIncreaseModal.scss';
import Modal from 'react-bootstrap/Modal';

const HomeValueIncreaseModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={'batteryInstallModal'}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Increased Home Value</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="title">How Solar Installations Can Add up to 20% Increase to Home Value</p>
        <p className="desc mb-3">
          Are you considering installing solar panels on your home? Apart from the obvious
          environmental benefits and long-term cost savings on energy bills, solar installations can
          also significantly increase the value of your home. Let's explore how going solar can give
          your property a valuable boost
        </p>
        <p className="title">1. Energy Cost Savings</p>
        <p className="desc mb-3">
          One of the primary advantages of solar energy is the potential for significant cost
          savings on your electricity bills. By generating your own clean and renewable energy, you
          become less reliant on traditional utility companies. This independence can shield you
          from rising energy costs and provide a sense of financial security. Potential buyers
          recognize the long-term savings associated with solar installations, making your property
          more attractive.
        </p>
        <p className="title">2. Increased Home Value</p>
        <p className="desc mb-3">
          Research has shown that solar installations can increase the value of a home by up to 4%.
          This percentage may vary depending on various factors such as the location of your
          property, the size of the solar system, and local market conditions. However, the overall
          trend indicates that homes equipped with solar panels tend to sell at a premium compared
          to homes without them.
        </p>
        <p className="title">3. Environmental Appeal</p>
        <p className="desc mb-3">
          In today's world, there is a growing emphasis on sustainable living and reducing carbon
          footprints. By incorporating solar panels into your home, you demonstrate your commitment
          to a greener future. Environmentally conscious buyers value properties with renewable
          energy systems, making your home stand out in the market and potentially increasing its
          desirability and value.
        </p>
        <p className="title">4. Government Incentives</p>
        <p className="desc mb-3">
          Many governments and local authorities offer incentives and rebates to encourage
          homeowners to adopt solar energy. These financial benefits can help offset the initial
          installation costs and make solar panels more affordable.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default HomeValueIncreaseModal;
