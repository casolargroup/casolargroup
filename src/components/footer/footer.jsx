import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>California Solar Group</h3>
                <p className="contact-info">
                  <a
                    href="https://www.google.com/maps/search/7647+Hayvenhurst+Ave,+Unit+26,+Van+Nuys,+CA+91406"
                    target="_blank"
                    rel="noreferrer"
                  >
                    7647 Hayvenhurst Ave, Unit 26, <br /> Van Nuys, CA 91406
                  </a>
                </p>
                <p className="contact-info">
                  <strong>Phone: </strong> <a href="tel:7472862828"> (747) 286-2828</a>
                </p>
                <p className="contact-info">
                  <strong>Email:</strong>
                  <a href="mailto:info@casolargroup.com"> info@casolgroup.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="social-links-title">Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/casolargroup" className="facebook">
                  <div>
                    <i className="bx bxl-facebook" />
                  </div>
                  <span>Facebook</span>
                </a>
                <a href="https://twitter.com/CA_SolarGroup" className="twitter">
                  <div>
                    <i className="bx bxl-twitter" />
                  </div>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com/californiasolargroup/?igshid=MzRlODBiNWFlZA%3D%3D"
                  className="instagram"
                >
                  <div>
                    <i className="bx bxl-instagram" />
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/ca-solar-group/" className="linkedin">
                  <div>
                    <i className="bx bxl-linkedin" />
                  </div>
                  <span>Linkedin</span>
                </a>
                <a href="https://www.youtube.com/@CaliforniaSolarGroup" className="youtube">
                  <div>
                    <i className="bx bxl-youtube" />
                  </div>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Information</h4>
              <ul>
                <li>
                  <NavLink to={'/faq'}>FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={'/blog'}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={'/accessibility'}>Accessibility Statement</NavLink>
                </li>
                <li>
                  <NavLink to={'/become-partner'}>Become a Partner</NavLink>
                </li>
                <li>
                  <NavLink to={'/careers'}>Careers</NavLink>
                </li>
                <li>
                  <NavLink to={'/'}>Privacy Policy</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <LazyLoadImage
                src={logo}
                alt="img"
                className="img-fluid"
                width={'100%'}
                height={'auto'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="copyright">
            © Copyright{' '}
            <strong>
              <span>California Solar Group</span>
            </strong>
            . All Rights Reserved. CSLB #1067781
          </div>
          <div className="credits">
            Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
