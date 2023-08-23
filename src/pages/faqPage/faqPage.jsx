import React, { useContext } from 'react';
import './faqPage.scss';

import Accordion from 'react-bootstrap/Accordion';
import { accordionItems } from './mock';
import { AccordionContext, useAccordionButton } from 'react-bootstrap';

const FaqPage = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Accordion.Header onClick={decoratedOnClick}>
        {!isCurrentEventKey ? (
          <i className="bi bi-plus-circle me-2"></i>
        ) : (
          <i className="bi bi-dash-circle me-2"></i>
        )}
        {children}
      </Accordion.Header>
    );
  }

  return (
    <div className="faqPage">
      <div className="container">
        <Accordion defaultActiveKey={accordionItems[0].id} flush>
          {accordionItems.map(accItem => {
            return (
              <Accordion.Item eventKey={accItem.id} key={accItem.id}>
                <ContextAwareToggle eventKey={accItem.id}>{accItem.title}</ContextAwareToggle>
                <Accordion.Body>
                  <p>{accItem.description}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqPage;
