import React from 'react';
import { Helmet } from 'react-helmet';

const MetPixel = () => {
  return (
    <Helmet>
      <script id="facebook-pixel-script">
        {`
          if(typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '300170502374306');
        fbq('track', 'PageView');
      }
        else {
      }
        `}
      </script>
      <noscript id="facebook-pixel-image">
        {`
        <img
          height="1"
          width="1"
          style="display:none"
          alt="img"
          src="https://www.facebook.com/tr?id=300170502374306&ev=PageView&noscript=1"
        />`}
      </noscript>
    </Helmet>
  );
};

export default MetPixel;
