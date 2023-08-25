import React from 'react';
import './privacyPolicyPage.scss';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacyPolicyPage">
        <div className="container">
            <h1 className="mt-5 mb-4">Privacy Policy</h1>

            <p>At California Solar Group, we value your privacy and are committed to protecting your personal information. This
                Privacy Policy outlines how we collect, use, disclose, and safeguard the information you provide to us through our
                website, applications, and services. Please read this policy carefully to understand our practices regarding your
                personal information and how we handle it.</p>

            <h3 className="mt-4">1. Information We Collect</h3>
            <p>We may collect various types of information from you, including:</p>
            <ul>
                <li>Personal Information: Name, address, email address, phone number, and other contact details.</li>
                <li>Financial Information: Credit card or payment details necessary for billing purposes.</li>
                <li>Usage Information: Information about your interactions with our website, including IP addresses, browser type,
                    referring URLs, pages viewed, and other browsing data.</li>
                <li>Device Information: Information about the device(s) you use to access our website, such as device type,
                    operating system, and unique device identifiers.</li>
                <li>Location Information: Geographical location information when you use certain features of our services.</li>
                <li>Communication Information: Information you provide when contacting us or participating in surveys, contests, or
                    promotions.</li>
            </ul>

            <h3 className="mt-4">2. How We Use Your Information</h3>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
                <li>Providing and improving our services: To fulfill your requests, provide customer support, enhance user
                    experience, and develop new features.</li>
                <li>Personalization: To customize our services, content, and offers based on your preferences and interests.</li>
                <li>Communication: To send you important updates, newsletters, marketing materials, and respond to your
                    inquiries.</li>
                <li>Legal Compliance: To comply with applicable laws, regulations, and legal processes.</li>
            </ul>
            <h3 className="mt-4">3. Information Sharing and Disclosure</h3>
            <p>We may share your personal information with third parties in the following circumstances:</p>
            <ul>
                <li>Service Providers: We may engage trusted third-party service providers to assist us in delivering and improving
                    our services, such as website hosting, payment processing, data analysis, and customer support.</li>
                <li>Legal Obligations: We may disclose your information if required by law, legal process, or governmental request.</li>
                <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred
                    to the acquiring entity.</li>
                <li>Consent: With your consent, we may share your information with third parties for marketing or promotional purposes.</li>
            </ul>

            <h3 className="mt-4">4. Data Security</h3>
            <p>We employ industry-standard security measures to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. However, no data transmission or storage system is completely secure, and we
                cannot guarantee absolute security.</p>

            <h3 className="mt-4">5. Your Choices</h3>
            <ul>
                <li>Opt-Out: You may opt out of receiving marketing communications from us by following the unsubscribe instructions
                    provided in the email.</li>
                <li>Cookies: You can modify your browser settings to disable or delete cookies. However, certain features of our
                    website may not function properly without cookies.</li>
            </ul>

            <h3 className="mt-4">6. Children's Privacy</h3>
            <p>Our services are not intended for children under the age of 16. We do not knowingly collect personal information from
                children without parental consent. If you believe we may have inadvertently collected personal information from a
                child, please contact us immediately.</p>

            <h3 className="mt-4">7. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites or services. We have no control over their privacy practices and
                are not responsible for the content or practices of these websites. We encourage you to review the privacy policies of
                those third parties before providing any personal information.</p>

            <h3 className="mt-4">8. Updates to this Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. The revised policy will be posted on our website with the updated
                effective date. We encourage you to review this Privacy Policy periodically.</p>

            <h3 class="mt-4">9. Contact Us</h3>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please
                contact us at info@casolargroup.com email.</p>

        </div>
    </div>
  );
};

export default PrivacyPolicyPage;
