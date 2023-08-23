import React from 'react';
import './batteryInstallModal.scss';
import Modal from 'react-bootstrap/Modal';

const BatteryInstallModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={'batteryInstallModal'}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Premium Battery Installer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="title">Unparalleled Expertise</p>
        <p className="desc mb-3">
          When you choose California Solar Group as your premium battery installer, you can expect
          nothing less than the highest level of expertise and professionalism. Our team of
          experienced technicians is well-versed in the installation and maintenance of cutting-edge
          battery systems. With years of industry knowledge and a deep understanding of renewable
          energy technology, we ensure seamless integration of battery solutions into your existing
          solar power system.
        </p>
        <p className="title">High-End Equipment and Innovative Solutions</p>
        <p className="desc mb-3">
          We believe that every client deserves the very best, which is why we exclusively work with
          top-of-the-line, high-end equipment. Our partnership with industry-leading manufacturers
          allows us to offer state-of-the-art battery solutions that are reliable, efficient, and
          designed to meet your specific energy needs. Whether you require a battery for residential
          or commercial purposes, our premium installations will provide you with an uninterrupted
          power supply and optimal energy management.
        </p>
        <p className="title">Seamless Integration and Customization</p>
        <p className="desc mb-3">
          At California Solar Group, we understand that every home or business is unique, and your
          energy requirements are no exception. That's why we offer customized battery solutions
          tailored to your individual needs. Our team will assess your energy consumption patterns,
          solar system capacity, and future goals to design a battery installation that maximizes
          efficiency and savings. By seamlessly integrating the battery system into your existing
          infrastructure, we ensure a hassle-free transition to clean, renewable energy.
        </p>
        <p className="title">Reliable Support and Maintenance</p>
        <p className="desc mb-3">
          Our commitment to customer satisfaction extends beyond the installation process. We
          provide comprehensive support and maintenance services to keep your premium battery system
          operating at its best. Our technicians are readily available to address any concerns,
          provide system updates, and perform regular maintenance to prolong the lifespan of your
          battery investment. With California Solar Group, you can enjoy peace of mind, knowing that
          our team is dedicated to the long-term success of your renewable energy solution.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default BatteryInstallModal;
