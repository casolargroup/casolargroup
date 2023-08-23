import React, { useEffect, useState } from 'react';
import './getStartedForm.scss';
import Form from 'react-bootstrap/Form';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import { E_MAIL, LETTERS, PHONENUMBER, ZIPCODE } from '../../validation/regex';
import MultiRangeSlider from '../multiRangeSlider';
import postData from '../../utils/api';
import { v4 as uuid } from 'uuid';

const GetStartedForm = ({ setValid, isOwner, setIsOwner, calculate, setCalculate }) => {
  const [validated, setValidated] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [validReferredPhone, setValidReferredPhone] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validReferredEmail, setValidReferredEmail] = useState(true);
  const [validZip, setValidZip] = useState(true);
  const [validCity, setValidCity] = useState(true);

  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('CA');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [callOrEmail, setCallOrEmail] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [referredName, setReferredName] = useState('');
  const [referredEmail, setReferredEmail] = useState('');
  const [referredPhone, setReferredPhone] = useState('');

  const [roofType, setRoofType] = useState('');
  const [roofAge, setRoofAge] = useState('');

  const [minVal, setMinVal] = useState('');
  const [maxVal, setMaxVal] = useState('');
  const [fileId, setFileId] = useState('');

  const [isFileOk, setIsFileOk] = useState(true);
  const [selectedFile, setSelectedFile] = useState({ fileName: '' });

  let formBody = [];

  useEffect(() => {
    setFileId(uuid());
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() !== false) {
      const details = {
        apiAction: 'addQuote',
        customer_name: `${name} ${surName}`,
        email: email,
        phone_number: phoneNumber,
        installation_address: `${state} ${city} ${zip}`,
        roof_type: `${!!roofType ? roofType : ''}, ${!!roofAge ? `Age:${roofAge}` : 'Age:'}`,
        energy_usage: 0,
        additional_message: `IsOwner: ${!!isOwner ? isOwner : ''}, Call or Email: ${
          !!callOrEmail ? callOrEmail : ''
        } Monthly payment: $${!!minVal ? minVal : ''} - ${
          !!maxVal ? maxVal : ''
        } client_request_key=${fileId}, referredBy=${referredBy}, referredName=${referredName}, referredEmail=${referredEmail}, referredPhone=${referredPhone}`,
      };
      for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

      //upload file
      const formData = new FormData();

      if (!!selectedFile.length) {
        formData.append('client_request_key', fileId);
        formData.append('image_type', selectedFile?.type?.split('/')[1]);
        formData.append('image_file', selectedFile, selectedFile?.name);
        if (selectedFile.size < 1048576) {
          setIsFileOk(true);
          setValid(true);
          await fetch('https://homerenovationnation.com/api/fileupload.jsp', {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
          });
          postData('https://casolargroup.com/hrn.jsp', formBody).then(data => {
            setValid(true);
          });
        } else {
          setValid(false);
          setIsFileOk(false);
        }
      } else {
        postData('https://casolargroup.com/hrn.jsp', formBody).then(data => {
          setValid(true);
        });
      }
    }
    setValidated(true);
  };

  const handlePhone = event => {
    setPhoneNumber(event.target.value);
    if (PHONENUMBER.test(event.target.value)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const handleReferredPhone = event => {
    setReferredPhone(event.target.value);
    if (PHONENUMBER.test(event.target.value)) {
      setValidReferredPhone(true);
    } else {
      setValidReferredPhone(false);
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

  const handleReferredEmail = event => {
    setReferredEmail(event.target.value);
    if (E_MAIL.test(event.target.value)) {
      setValidReferredEmail(true);
    } else {
      setValidReferredEmail(false);
    }
  };

  const handleZip = event => {
    setZip(event.target.value);
    if (ZIPCODE.test(event.target.value)) {
      setValidZip(true);
    } else {
      setValidZip(false);
    }
  };

  const handleCity = event => {
    setCity(event.target.value);
    if (LETTERS.test(event.target.value)) {
      setValidCity(true);
    } else {
      setValidCity(false);
    }
  };

  return (
    <div className={`getStartedForm ${!calculate ? 'col-md-6' : 'col-12'}`}>
      <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className={!!calculate ? 'col-md-6' : 'col-12'}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>* First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    title="name"
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
                  <Form.Label>* Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    title="surname"
                    required
                    value={surName}
                    pattern="^[A-Za-z\s]*$"
                    onChange={e => setSurName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Surname.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
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
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>* Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    title="email"
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
            </div>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                  <Form.Label>* State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="California"
                    title="state"
                    className="stateInput"
                    disabled
                    required
                    value={state}
                    onChange={e => setState(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid State.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                  <Form.Label>* City</Form.Label>
                  <Form.Control
                    type="text"
                    title="city"
                    required
                    isInvalid={!validCity}
                    value={city}
                    onChange={e => handleCity(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid City.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                  <Form.Label>* Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="12345"
                    title="zip"
                    maxLength="5"
                    isInvalid={!validZip}
                    required
                    value={zip}
                    onChange={e => handleZip(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid ZIP.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Form.Check type={'checkbox'} id={`default-checkbox`}>
                <Form.Check.Input
                  type={'checkbox'}
                  checked={true}
                  disabled
                  onChange={() => setIsOwner(true)}
                />
                <Form.Check.Label className="fw-bold">Home/Business Owner</Form.Check.Label>
              </Form.Check>
              <div onChange={event => setCallOrEmail(event.target.value)}>
                <Form.Check
                  inline
                  required
                  isValid={validated}
                  label="Call Me"
                  name="group1"
                  type="radio"
                  value={'call'}
                />
                <Form.Check
                  inline
                  required
                  isValid={validated}
                  label="Email Me"
                  name="group1"
                  type="radio"
                  value={'email'}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <p>* How did you hear about us?</p>
                <Form.Select
                  required
                  value={referredBy}
                  onChange={event => setReferredBy(event.target.value)}
                  aria-label="Default select example 3"
                  className="mb-3"
                >
                  <option>Choose</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="brochure">Brochure</option>
                  <option value="search">Search</option>
                  <option value="billboard">Billboard</option>
                  <option value="sticker">Car Sticker</option>
                  <option value="tv">TV</option>
                  <option value="radio">Radio</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </Form.Select>
              </div>
              <div>
                <Form.Check type={'checkbox'} id={`default-checkbox2`} className="me-2">
                  <Form.Check.Input
                    type={'checkbox'}
                    value={calculate}
                    onChange={event => setCalculate(event.target.checked)}
                  />
                  <Form.Check.Label>Get Your Solar Calculation</Form.Check.Label>
                </Form.Check>
              </div>
            </div>
            {referredBy && referredBy === 'friend' && (
              <div className="refereedBy-section">
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                      <Form.Label>* Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        title="referredName"
                        required
                        value={referredName}
                        onChange={e => setReferredName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        title="referredEmail"
                        isInvalid={!validReferredEmail}
                        value={referredEmail}
                        onChange={e => handleReferredEmail(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                      <Form.Label>* Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter phone number"
                        title="referredPhone"
                        isInvalid={!validReferredPhone}
                        required
                        value={referredPhone}
                        onChange={e => handleReferredPhone(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
              </div>
            )}

            <p className="agree">
              By clicking "Get Started", I consent to California Solar Group sharing my information
              with its authorized dealers to provide me information on California Solar Group
              products. California Solar Group or its authorized dealers can call or text me
              (including SMS or MMS) (including via prerecorded messages and/or automated technology
              belonging to or hosted by third parties) at the telephone number provided above even
              if it is on a state or Federal Do Not Call List. Message and data rates may apply,
              Message frequency varies, Text STOP to cancel, text HELP for help at (747) 286-2828.
              My consent is not a condition of purchase. Please see our{' '}
              <NavLink to="/">Privacy Statement</NavLink> and &nbsp;
              <NavLink to="/">Terms of Use</NavLink>.
            </p>
          </div>
          {!!calculate && (
            <div className="col-md-6">
              <div className="calculator-content">
                <p>What is your current monthly electric bill (approximately)</p>
                <div className="multi-range-slider mb-3">
                  <MultiRangeSlider
                    min={50}
                    max={400}
                    onChange={({ min, max }) => {
                      setMinVal(min);
                      setMaxVal(max);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    value={roofType}
                    required
                    onChange={event => setRoofType(event.target.value)}
                  >
                    <option>Roof type</option>
                    <option value="single">Shingle</option>
                    <option value="tile">Tile</option>
                    <option value="metal">Metal</option>
                    <option value="flat">Flat</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </div>
                <div className="col-md-6">
                  <Form.Select
                    required
                    value={roofAge}
                    onChange={event => setRoofAge(event.target.value)}
                    aria-label="Default select example 2"
                    className="mb-3"
                  >
                    <option>Roof age</option>
                    <option value="Under 10 years">Under 10 years</option>
                    <option value="20-30 years">10-20 years</option>
                    <option value="More than 20 years">More than 20 years</option>
                    <option value="not-sure">Not Sure</option>
                  </Form.Select>
                </div>
              </div>
              <div className="upload">
                <div className="d-flex align-items-end mb-3">
                  <Form.Group controlId="formFile">
                    <Form.Label>
                      For quick response please upload your last utility bill (Max 1Mb)
                    </Form.Label>
                    <Form.Control
                      type="file"
                      value={selectedFile.fileName}
                      onChange={event => {
                        setSelectedFile(event.target.files[0]);
                      }}
                    />
                    {!isFileOk ? (
                      <Form.Control.Feedback>File size must be max 1 Mb.</Form.Control.Feedback>
                    ) : (
                      ''
                    )}
                  </Form.Group>
                </div>
                <Button type="submit" className="d-flex mx-auto submit-button mt-4 mb-4">
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
        {!calculate ? (
          <Button type="submit" className="d-flex mx-auto submit-button mt-4 mb-4">
            Submit
          </Button>
        ) : (
          ''
        )}
      </Form>
    </div>
  );
};

export default GetStartedForm;
