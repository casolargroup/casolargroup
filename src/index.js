import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize('G-SZHBQBLLF7');
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
const SendAnalytics = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
  });
};
reportWebVitals(SendAnalytics);
