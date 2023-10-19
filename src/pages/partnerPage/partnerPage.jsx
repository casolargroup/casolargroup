import React, { useState } from 'react';
import './partnerPage.scss';
import partner from '../../assets/images/services/Consultation 1.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { E_MAIL, PHONENUMBER } from '../../validation/regex';

const PartnerPage = () => {
  const [validated, setValidated] = useState(false);
  const [valid, setValid] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formId = 'yWHYM1qnYU2Etd/3t+moZw==';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValid(false);
    }
    setValidated(true);
    if (form.checkValidity() !== false) {
      const formData = new FormData();
      formData.append('formId', formId);
      formData.append('FirstName', name);
      formData.append('Organization', companyName);
      formData.append('phones[0].Label', 'Work');
      formData.append('phones[0].Value', phoneNumber);
      formData.append('EmailAddress', email);
      formData.append('Role', subject);
      formData.append('background', message);

      fetch('https://crm.na1.insightly.com/WebToContact/Create', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }).then(res => setValid(true));
    }
  };

  const handlePhone = event => {
    setPhoneNumber(event.target.value);
    if (PHONENUMBER.test(event.target.value)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const handleEmail = event => {
    setEmail(event.target.value);
    if (E_MAIL.test(event.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <div className="becomePartner">
      <div className="container">
        <h2> Become a Partner</h2>
        <div className="row">
          <div className="col-md-6">
            <LazyLoadImage
              src={partner}
              alt="img"
              effect="opacity"
              className="img-fluid mt-4 mb-4"
              width={'100%'}
              height={'auto'}
            />
          </div>
          <div className="col-md-6">
            {!valid ? (
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>* Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        required
                        value={name}
                        pattern="^[A-Za-z\s]*$"
                        onChange={e => setName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please write a Full Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        pattern="^[A-Za-z\s]*$"
                        onChange={e => setCompanyName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please write a Company Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>* Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        required
                        isInvalid={!validEmail}
                        value={email}
                        onChange={e => handleEmail(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                      <Form.Label>* Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        title="phone"
                        required
                        isInvalid={!validPhone}
                        value={phoneNumber}
                        onChange={e => handlePhone(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone Number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>* Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      required
                      value={subject}
                      pattern="^[a-zA-Z0-9\s]*$"
                      onChange={e => setSubject(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Subject.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea6">
                    <Form.Label>* Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Message.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <Button type="submit" className="d-flex mx-auto submit-button">
                  Send Message
                </Button>
              </Form>
            ) : (
              <div className="thank-you-message">
                <h1>Thank You for Contacting Us!</h1>
                <p>
                  Our dedicated team is currently reviewing your message, and we promise to respond
                  as promptly as possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
