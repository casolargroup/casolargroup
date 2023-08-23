import React from 'react';
import './madeInUsaModal.scss';
import Modal from 'react-bootstrap/Modal';

const MadeInUsaModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={'madeInUsaModal'}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Made in USA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="title">Energy Independence and Added Home Value</p>
        <p className="desc mb-3">
          Investing in solar and battery storage for your home not only provides numerous
          environmental and financial benefits but also has a positive impact on the value of your
          home. Making your home energy independent will add energy cost savings while capitalizing
          on government incentives, and appealing to environmentally conscious buyers, you can
          expect up to 4% increase in your property value. So, why wait? Take the first step toward
          a brighter future with solar energy!
        </p>
        <p className="title">Benefits of "Made in USA"</p>
        <p className="title">Quality Assurance</p>
        <p className="desc mb-3">
          By selecting our "Made in USA" solar products, you can trust in their exceptional quality.
          Our Suppliers adhere to rigorous manufacturing processes, utilizing advanced technologies
          and the finest materials available. Our commitment to quality ensures that each solar
          panel and system meets and exceeds industry benchmarks, providing you with reliable and
          efficient energy solutions.
        </p>
        <p className="title">Sustainable American Jobs</p>
        <p className="desc mb-3">
          When you choose California Solar Group, you support the creation and preservation of
          sustainable American jobs. By manufacturing our products domestically, we contribute to
          the growth of local communities and the overall strength of the American economy. Your
          purchase not only helps you harness the power of solar energy but also supports the
          livelihoods of American workers.
        </p>
        <p className="title">Environmental Responsibility</p>
        <p className="desc mb-3">
          Opting for "Made in USA" solar products aligns with your commitment to environmental
          responsibility. Solar energy is clean, renewable, and reduces dependence on fossil fuels.
          By choosing our USA-made solar panels, you actively contribute to reducing carbon
          emissions, mitigating climate change, and creating a more sustainable future for
          generations to come.
        </p>
        <p className="title">Customer Support and Satisfaction</p>
        <p className="desc mb-3">
          Our commitment to providing excellent customer support ensures your satisfaction. We are
          here to assist you throughout your solar energy journey, from initial consultation to
          installation and beyond. Feel free to reach out to us with any questions or concerns you
          may have.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default MadeInUsaModal;
