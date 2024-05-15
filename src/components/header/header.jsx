import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './header.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo.png';
import phone from '../../assets/icons/phone.png';

import { scrollToSection } from '../../utils/scrollToSection';

const Header = ({ setMyRef }) => {
  const ref = useRef();
  const sticky = useStickyHeader(76);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [navDropDownShow1, setNavDropDownShow1] = useState(false);
  const [navDropDownShow2, setNavDropDownShow2] = useState(false);
  const headerClasses = `header ${sticky ? 'sticky' : ''}`;

  useEffect(() => {
    if (expanded) {
      document.querySelector('.myBody').style.overflow = 'hidden';
      document.querySelector('.myBody').addEventListener('click', () => {
        setExpanded(false);
      });
      document.querySelector('.myBody').addEventListener('touchstart', () => {
        setExpanded(false);
      });
      document.querySelector('.myBody').addEventListener('scroll', () => {
        setExpanded(false);
      });
    } else {
      document.querySelector('.myBody').style.overflow = 'auto';
    }
  }, [expanded]);

  function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);

    const handleScroll = () => {
      setStick(window.scrollY > offset);
    };

    useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    return stick;
  }

  const clickOnLink = id => {
    setMyRef(id);
    scrollToSection(id);
    setExpanded(false);
    setNavDropDownShow1(false);
    setNavDropDownShow2(false);
  };
  const scrollToTop = () => {
    navigate('/');
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={ref} className={headerClasses}>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand onClick={scrollToTop}>
            <div className="logo">
              <LazyLoadImage src={logo} alt="img" effect="opacity" width={'auto'} height={'100%'} />
            </div>
          </Navbar.Brand>
          <div className="mobile-phone-call">
            <a href={'tel:+17475005050'} className="desc">
              <LazyLoadImage src={phone} alt="img" />
            </a>
          </div>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={'mobile-navbar-icon'}
            onClick={() => setExpanded(!expanded)}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="collapseLinks">
            <Nav className="mx-auto my-2 my-lg-0 d-lg-flex align-items-center d-block" navbarScroll>
              <NavDropdown
                title="About Us"
                id="navbarScrollingDropdown1"
                className={'navDropDown'}
                show={navDropDownShow1}
                onToggle={() => setNavDropDownShow1(!navDropDownShow1)}
              >
                <div className={'dropdown-link'}>
                  <NavLink to={'/'} onClick={() => clickOnLink('ourCompany')}>
                    Our Company
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/'} onClick={() => clickOnLink('team')}>
                    Team
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/'} onClick={() => clickOnLink('warranties')}>
                    Warranties
                  </NavLink>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Products"
                id="navbarScrollingDropdown2"
                className={'navDropDown'}
                show={navDropDownShow2}
                onToggle={() => setNavDropDownShow2(!navDropDownShow2)}
              >
                <div className={'dropdown-link'}>
                  <NavLink to={'/residential'} onClick={() => clickOnLink('')}>
                    Residential
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/commercial'} onClick={() => clickOnLink('')}>
                    Commercial
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/battery-storage'} onClick={() => clickOnLink('')}>
                    Battery Storage
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/financing'} onClick={() => clickOnLink('')}>
                    Financing
                  </NavLink>
                </div>
                <div className={'dropdown-link'}>
                  <NavLink to={'/portfolio'} onClick={() => clickOnLink('')}>
                    Portfolio
                  </NavLink>
                </div>
              </NavDropdown>

              <div className="links d-flex align-items-lg-center align-items-start flex-lg-row flex-column">
                <NavLink to="/" onClick={() => clickOnLink('services')}>
                  Services
                </NavLink>
                {/*<NavLink to="/calculator" onClick={() => setExpanded(false)}>*/}
                {/*  Solar Calculator*/}
                {/*</NavLink>*/}
                <NavLink to="/contact-us" onClick={() => setExpanded(false)}>
                  Contact us
                </NavLink>
                <a href={'tel:+17475005050'} className="desc">
                  +1 (747) 500-5050
                </a>
              </div>
            </Nav>
            <NavLink to="/get-started" onClick={() => setExpanded(false)}>
              <Button className={'get-started-btn'}>Get Started</Button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
