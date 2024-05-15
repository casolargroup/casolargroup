import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import location from '../../assets/icons/location.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-md-3">
              <div className="footer-info">
                <p className="contact-info">
                  <a
                    href="https://maps.app.goo.gl/6uXjAaEq9g42wW9s6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LazyLoadImage src={location} alt="img" width={'20px'} height={'auto'} />
                    <span>
                      1620 S Central Avenue, <br /> Glendale, CA
                    </span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="tel:7475005050">
                    <LazyLoadImage src={phone} alt="img" width={'20px'} height={'auto'} />
                    <span>+1-(747)-500-5050</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="mailto:info@casolargroup.com">
                    <LazyLoadImage src={mail} alt="img" width={'20px'} height={'auto'} />
                    <span>info@casolgroup.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <LazyLoadImage
                src={logo}
                alt="img"
                className="img-fluid footer-logo"
                width={'100%'}
                height={'auto'}
              />
              <div className="social-links">
                <a href="https://www.facebook.com/casolargroup" className="facebook">
                  <div>
                    <i className="bx bxl-facebook" />
                  </div>
                </a>
                <a href="https://twitter.com/CA_SolarGroup" className="twitter">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
                    >
                      <g>
                        <path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0" />
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/californiasolargroup/?igshid=MzRlODBiNWFlZA%3D%3D"
                  className="instagram"
                >
                  <div>
                    <i className="bx bxl-instagram" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/ca-solar-group/" className="linkedin">
                  <div>
                    <i className="bx bxl-linkedin" />
                  </div>
                </a>
                <a href="https://www.youtube.com/@CaliforniaSolarGroup" className="youtube">
                  <div>
                    <i className="bx bxl-youtube" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-info">
                <p className="contact-info">
                  <a
                    href="https://www.google.com/maps/place/208+S+Grand+Ave,+Santa+Ana,+CA+92701/@33.7439351,-117.8541627,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcd9727d0dde9b:0xbb5f5f842b50c11c!8m2!3d33.7439307!4d-117.8515878!16s%2Fg%2F11j0tb1g7s?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LazyLoadImage src={location} alt="img" width={'20px'} height={'auto'} />
                    <span>
                      208 S Grand Ave,
                      <br /> Santa Ana, CA 92701
                    </span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="tel:8186582362">
                    <LazyLoadImage src={phone} alt="img" width={'20px'} height={'auto'} />
                    <span>+1-(818)-658-2362</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="mailto:info@casolargroup.com">
                    <LazyLoadImage src={mail} alt="img" width={'20px'} height={'auto'} />
                    <span>info@casolgroup.com</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <NavLink to={'/faq'}>FAQ</NavLink>
              </li>
              |
              <li>
                <NavLink to={'/blog'}>Blog</NavLink>
              </li>
              |
              <li>
                <NavLink to={'/accessibility'}>Accessibility Statement</NavLink>
              </li>
              |
              <li>
                <NavLink to={'/become-partner'}>Become a Partner</NavLink>
              </li>
              |
              <li>
                <NavLink to={'/careers'}>Careers</NavLink>
              </li>
              |
              <li>
                <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
              </li>
            </ul>
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
