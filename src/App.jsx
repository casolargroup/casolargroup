import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './global.scss';

import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/homePage';
import TeamPage from './pages/teamPage';
import ContactUsPage from './pages/contactUsPage';
import GetStartedPage from './pages/getStartedPage';
import Residential from './pages/residential';
import Commercial from './pages/commercial';
import BatteryStoragePage from './pages/batteryStoragePage';
import FinancingPage from './pages/financingPage';
import PortfolioPage from './pages/portfolioPage';
import FaqPage from './pages/faqPage';
import BlogPage from './pages/blogPage';
import AccessabilityPage from './pages/accessabilityPage';
import PartnerPage from './pages/partnerPage';

import MetPixel from './metPixel/metPixel';
import ScrollToTop from './utils/scrollToTop';
import CareersPage from './pages/careersPage';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import FbChat from './utils/fbChat';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

function App() {
  const TRACKING_ID = 'G-SZHBQBLLF7';
  const [myRef, setMyRef] = useState();
  let location = useLocation();

  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <MetPixel />
      <FbChat />
      <Header setMyRef={setMyRef} />
      <div className='myBody'>
        <Routes>
          <Route path={'/'} element={<HomePage myRef={myRef} />} />
          <Route path={'/team'} element={<TeamPage />} />
          <Route path={'/contact-us'} element={<ContactUsPage />} />
          <Route path={'/residential'} element={<Residential />} />
          <Route path={'/commercial'} element={<Commercial />} />
          <Route path={'/battery-storage'} element={<BatteryStoragePage />} />
          <Route path={'/financing'} element={<FinancingPage />} />
          <Route path={'/portfolio'} element={<PortfolioPage />} />
          <Route path={'/accessibility'} element={<AccessabilityPage />} />
          <Route path={'/become-partner'} element={<PartnerPage />} />
          <Route path={'/get-started'} element={<GetStartedPage />} />
          <Route path={'/faq'} element={<FaqPage />} />
          <Route path={'/blog'} element={<BlogPage />} />
          <Route path={'/careers'} element={<CareersPage />} />
          <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
