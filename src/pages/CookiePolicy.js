import React from 'react';
import './CookiePolicy.css';

function CookiePolicy() {
  return (
    <div className="cookie-policy-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p>Last Updated: February 9, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section policy-content">
        <div className="container">
          <div className="policy-inner">
            
            <div className="policy-section">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the site owners.
              </p>
              <p>
                Cookies help us understand how visitors interact with our website, remember your preferences, and provide 
                you with a better browsing experience.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. How We Use Cookies</h2>
              <p>
                Future Labs uses cookies for several purposes:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your online activity to help deliver relevant advertising</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Types of Cookies We Use</h2>
              
              <h3>3.1 Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for you to navigate our website and use its features. Without these cookies, 
                certain services cannot be provided.
              </p>
              <div className="cookie-table">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>session_id</td>
                      <td>Maintains your session state</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td>cookie_consent</td>
                      <td>Stores your cookie preferences</td>
                      <td>1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Performance and Analytics Cookies</h3>
              <p>
                These cookies collect information about how you use our website, such as which pages you visit most often. 
                All information collected is aggregated and anonymous.
              </p>
              <div className="cookie-table">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_ga</td>
                      <td>Google Analytics - distinguish users</td>
                      <td>2 years</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Google Analytics - distinguish users</td>
                      <td>24 hours</td>
                    </tr>
                    <tr>
                      <td>_gat</td>
                      <td>Google Analytics - throttle request rate</td>
                      <td>1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.3 Functionality Cookies</h3>
              <p>
                These cookies allow our website to remember choices you make (such as your language or region) and 
                provide enhanced, personalized features.
              </p>
              <div className="cookie-table">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>language</td>
                      <td>Stores your language preference</td>
                      <td>1 year</td>
                    </tr>
                    <tr>
                      <td>theme</td>
                      <td>Remembers your theme preference</td>
                      <td>1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.4 Targeting and Advertising Cookies</h3>
              <p>
                These cookies are used to deliver advertisements more relevant to you and your interests. They may be 
                set by our advertising partners through our website.
              </p>
              <div className="cookie-table">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_fbp</td>
                      <td>Facebook Pixel - track conversions</td>
                      <td>3 months</td>
                    </tr>
                    <tr>
                      <td>IDE</td>
                      <td>Google DoubleClick - advertising</td>
                      <td>1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="policy-section">
              <h2>4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may use various third-party cookies to report usage statistics, 
                deliver advertisements, and enhance functionality. These cookies are governed by the respective 
                third parties' privacy policies.
              </p>
              <p>
                Third-party services we use include:
              </p>
              <ul>
                <li>Google Analytics for website analytics</li>
                <li>Google Ads for advertising</li>
                <li>Facebook Pixel for conversion tracking</li>
                <li>LinkedIn Insights for business analytics</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Managing Cookies</h2>
              <h3>5.1 Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul>
                <li>Block all cookies</li>
                <li>Accept all cookies</li>
                <li>Notify you when a cookie is set</li>
                <li>Delete cookies after you close your browser</li>
              </ul>

              <h3>5.2 How to Disable Cookies</h3>
              <p>
                Here's how to manage cookies in popular browsers:
              </p>
              <ul>
                <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
              </ul>

              <h3>5.3 Impact of Disabling Cookies</h3>
              <p>
                Please note that blocking or deleting cookies may impact your experience on our website, and some 
                features may not function properly. Certain services may become unavailable if you disable cookies.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Cookie Consent</h2>
              <p>
                When you first visit our website, we will ask for your consent to use non-essential cookies. You can 
                change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of 
                our website.
              </p>
              <p>
                Your consent applies to the following domain: futurelabs.com
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Web Beacons and Tracking Technologies</h2>
              <p>
                In addition to cookies, we may use other tracking technologies such as:
              </p>
              <ul>
                <li><strong>Web Beacons:</strong> Small graphic images embedded in web pages or emails</li>
                <li><strong>Pixel Tags:</strong> Invisible tags placed on web pages to track user behavior</li>
                <li><strong>Local Storage:</strong> Data storage in your browser for enhanced functionality</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>8. Do Not Track Signals</h2>
              <p>
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do 
                not want your online activity tracked. Currently, there is no industry standard for how to respond 
                to DNT signals, and we do not currently respond to DNT signals on our website.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or 
                our business practices. We encourage you to review this policy periodically for the latest information 
                on our cookie practices.
              </p>
            </div>

            <div className="policy-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;
