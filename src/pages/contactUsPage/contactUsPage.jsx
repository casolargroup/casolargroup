import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contactUsPage.scss';

const ContactUsPage = () => {
  const [validated, setValidated] = useState(false);
  const [valid, setValid] = useState(false);
  const [name, setName] = useState('');
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

  return (
    <div className="contact-us">
      <div className="container">
        <h1 className="mb-4">Contact Us</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.792716269525!2d-118.25844109999998!3d34.126056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e0aca586d3%3A0xd891b670f7b46d5a!2s1620%20S%20Central%20Ave%2C%20Glendale%2C%20CA%2091204!5e0!3m2!1sen!2sus!4v1708485557770!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="firstMap"
              className="mb-4"
            />
            <a
              href="https://maps.app.goo.gl/61xJFtbTEyRBQuHP9"
              target="_blank"
              rel="noreferrer"
              className="contact-cart mb-3"
            >
              <i className="bi bi-geo-alt" />
              <div className="text">
                <h4>Los Angeles Headquarters</h4>
                <p>1620 S Central Ave, Glendale, CA 91204</p>
              </div>
            </a>
            <a href="tel:7475005050" className="contact-cart mb-3">
              <i className="bi bi-phone" />
              <div className="text">
                <h4>Phone Number</h4>
                <p>+1-(747)-500-5050</p>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6474797838146!2d-117.85416272429669!3d33.74393067327466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9727d0dde9b%3A0xbb5f5f842b50c11c!2s208%20S%20Grand%20Ave%2C%20Santa%20Ana%2C%20CA%2092701!5e0!3m2!1sen!2sus!4v1691166349040!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="secondMap"
              className="mb-4"
            />
            <a
              href="https://www.google.com/maps/search/7647+Hayvenhurst+Ave,+Unit+26,+Van+Nuys,+CA+91406"
              target="_blank"
              rel="noreferrer"
              className="contact-cart mb-3"
            >
              <i className="bi bi-geo-alt" />
              <div className="text">
                <h4>Orange County Branch Office</h4>
                <p>208 S Grand Ave, Santa Ana, CA 92701</p>
              </div>
            </a>
            <a href="tel:+17475005050" className="contact-cart mb-3">
              <i className="bi bi-phone" />
              <div className="text">
                <h4>Phone Number</h4>
                <p>+1-(747)-500-5050</p>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="mailto:info@casolargroup.com" className="contact-cart mb-3">
              <i className="bi bi-phone" />
              <div className="text">
                <h4>Email</h4>
                <p>info@casolargroup.com</p>
              </div>
            </a>
          </div>
          <div className="col-md-8">
            {!valid ? (
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>* Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        pattern="^[A-Za-z\s]*$"
                        onChange={e => setName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>* Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
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
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
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

export default ContactUsPage;
