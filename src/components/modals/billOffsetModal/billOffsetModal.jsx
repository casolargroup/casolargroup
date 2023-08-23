import React from 'react';
import './billOffsetModal.scss';
import Modal from 'react-bootstrap/Modal';

const BillOffsetModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={'billOffsetModal'}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Electricity Bill Offset</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className={'text-center'}>100% Electricity Bill Offset with Solar Power</h4>
        <p className="title">Achieving 100% Electricity Bill Offset</p>
        <ul>
          <li>Assessing your energy needs and determining the optimal solar system size</li>
          <li>Choosing the right solar panels and equipment for maximum efficiency</li>
          <li>Understanding net metering and its role in achieving bill offset</li>
          <li>Exploring battery storage solutions for uninterrupted power supply</li>
        </ul>
        <p className="title">Maximizing Solar Efficiency</p>
        <ul>
          <li>Implementing energy-saving practices in conjunction with solar power</li>
          <li>Exploring smart home technologies and their integration with solar systems</li>
          <li>Monitoring and optimizing your solar energy production</li>
        </ul>
        <p className="title">Financial Incentives and Return on Investment</p>
        <ul>
          <li>Federal and state-level solar incentives and tax credits</li>
          <li>Financing options for solar installations</li>
          <li>Calculating the return on investment (ROI) for your solar power system</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default BillOffsetModal;
