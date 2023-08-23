import React, { useState } from 'react';
import './controlledTabs.scss';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PortfolioSlider from '../portfolioSlider';

const ControlledTabs = ({ content }) => {
  const [key, setKey] = useState(content[0].title);
  const [modalShow, setModalShow] = useState(false);
  const [imgid, setImgid] = useState(1);
  const handleClick = id => {
    setModalShow(true);
    setImgid(id);
  };
  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)} className="mb-3">
      {content.map(contentItem => {
        return (
          <Tab eventKey={contentItem.title} title={contentItem.title} key={contentItem.id}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter={'10px'}>
                {contentItem.images.map(imgItem => {
                  return (
                    <LazyLoadImage
                      key={imgItem.id}
                      onClick={() => handleClick(imgItem.id)}
                      src={imgItem.imgUrl}
                      alt="img"
                      effect="opacity"
                      width={'100%'}
                      height={'100%'}
                      style={{ objectFit: 'cover' }}
                    />
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
            <PortfolioSlider
              modalShow={modalShow}
              setModalShow={setModalShow}
              imgid={imgid}
              tabKey={key}
            />
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default ControlledTabs;
