import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: February 9, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section policy-content">
        <div className="container">
          <div className="policy-inner">
            
            <div className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Future Labs. We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site or use our services.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Register on the website</li>
                <li>Express an interest in obtaining information about us or our products and services</li>
                <li>Participate in activities on the website</li>
                <li>Contact us via email, phone, or contact forms</li>
              </ul>
              <p>
                The personal information we collect may include: name, email address, phone number, company name, 
                job title, and any other information you choose to provide.
              </p>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and links clicked</li>
                <li>Date and time of your visit</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect or receive to:
              </p>
              <ul>
                <li>Facilitate account creation and authentication</li>
                <li>Send administrative information, updates, and notifications</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Deliver targeted advertising and content</li>
                <li>Analyze usage trends and improve our website and services</li>
                <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Sharing Your Information</h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers 
                who perform services on our behalf, such as hosting, analytics, email delivery, and customer service.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, 
                or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required to comply with 
                applicable laws, regulations, legal processes, or governmental requests.</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Tracking technologies include beacons, tags, and scripts to collect and track information and to improve and 
                analyze our service.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security 
                of any personal information we process. However, please note that no electronic transmission over the internet 
                or information storage technology can be guaranteed to be 100% secure.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in 
                this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update inaccurate personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact information provided below.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these third-party sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </div>

            <div className="policy-section">
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you become aware that a child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>

            <div className="policy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated 
                "Last Updated" date. We encourage you to review this privacy policy periodically to stay informed about 
                how we are protecting your information.
              </p>
            </div>

            <div className="policy-section">
              <h2>12. Contact Us</h2>
              <p>
                If you have questions or comments about this privacy policy, please contact us at:
              </p>
              <ul className="contact-info">
                <li><strong>Email:</strong> privacy@futurelabs.com</li>
                <li><strong>Phone:</strong> +91 80 1234 5678</li>
                <li><strong>Address:</strong> Future Labs, Bangalore, Karnataka, India</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
