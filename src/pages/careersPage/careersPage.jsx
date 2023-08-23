import React, { useEffect, useState } from 'react';
import './careersPage.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import team from '../../assets/images/team/0.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';
import postData from '../../utils/api';

const CareersPage = () => {
  const [validated, setValidated] = useState(false);
  const [selectedFile, setSelectedFile] = useState({ fileName: '' });
  const [fileId, setFileId] = useState('');
  const [isDone, setIsDone] = useState(false);
  let formBody = [];

  useEffect(() => {
    setFileId(uuid());
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() !== false) {
      //upload file
      const formData2 = new FormData();

      if (!!selectedFile.name) {
        const details = {
          apiAction: 'addApplicant',
          client_request_key: fileId,
        };
        for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        formData2.append('client_request_key', fileId);
        formData2.append('image_type', selectedFile?.type?.split('/')[1]);
        formData2.append('image_file', selectedFile, selectedFile?.name);
        if (selectedFile.size < 1048576) {
          await fetch('https://homerenovationnation.com/api/fileupload.jsp', {
            method: 'POST',
            body: formData2,
            mode: 'no-cors',
          });
          await postData('https://casolargroup.com/hrn.jsp', formBody);
          setIsDone(true);
        }
      }
    }
    setValidated(true);
  };

  const handleUpload = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="careersPage">
      <div className="container">
        <div className="row flex-wrap-reverse">
          <div className="col-md-6">
            <h5>Dear Visitor,</h5>
            <p>
              We appreciate your interest in joining our team at California Solar Group. Currently,
              there are no vacancy announcements available on our Careers page. We are grateful for
              your consideration and encourage you to keep an eye on our website for future
              opportunities. We understand that your skills and expertise may align with our future
              needs, and we encourage you to periodically check our website for updates. As we
              continue to grow, new positions may become available that match your background. We
              value the enthusiasm of applicants like you and hope to have the opportunity to
              connect in the future. Thus you have the opportunity to upload your resume so that we
              can reach you out. Thank you again for considering California Solar Group as a
              potential employer. We wish you success in your job search and professional endeavors.
            </p>
            <p> Best regards, California Solar Group.</p>
            {!isDone ? (
              <div>
                {/*<Form noValidate validated={validated} onSubmit={handleSubmit}>*/}
                {/*  <Form.Group controlId="formFile" className="mb-3">*/}
                {/*    <Form.Label>Upload your resume (Max. 1Mb)(.psd)</Form.Label>*/}
                {/*    <Form.Control*/}
                {/*      type="file"*/}
                {/*      value={selectedFile.filename}*/}
                {/*      onChange={event => handleUpload(event)}*/}
                {/*    />*/}
                {/*  </Form.Group>*/}
                {/*  <Button type="submit" className="d-flex mx-auto submit-button mt-4 mb-4">*/}
                {/*    Send Resume*/}
                {/*  </Button>*/}
                {/*</Form>*/}
              </div>
            ) : (
              <div>
                We have successfully received your resume. <br /> Thank you for expressing interest
                in joining our team.
              </div>
            )}
          </div>
          <div className="col-md-6">
            <LazyLoadImage
              src={team}
              className="img-fluid"
              alt="img"
              width={'100%'}
              height={'auto'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
