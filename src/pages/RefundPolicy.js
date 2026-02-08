import React from 'react';
import './RefundPolicy.css';

function RefundPolicy() {
  return (
    <div className="refund-policy-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Refund & Cancellation Policy</h1>
          <p>Last Updated: February 9, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section policy-content">
        <div className="container">
          <div className="policy-inner">
            
            <div className="policy-section">
              <h2>1. Overview</h2>
              <p>
                At Future Labs, we strive to ensure complete satisfaction with our services. This Refund and 
                Cancellation Policy outlines the terms and conditions for cancellations, refunds, and related 
                matters for services purchased from Future Labs.
              </p>
              <p>
                By engaging our services, you acknowledge that you have read, understood, and agree to be bound 
                by this policy.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Service Categories</h2>
              <p>
                Our refund policy varies based on the type of service:
              </p>

              <h3>2.1 Custom Development Services</h3>
              <p>
                For custom software development, web development, mobile app development, and other bespoke 
                technology solutions.
              </p>

              <h3>2.2 Consulting Services</h3>
              <p>
                For technology consulting, digital strategy, and advisory services.
              </p>

              <h3>2.3 Subscription Services</h3>
              <p>
                For ongoing maintenance, support, and subscription-based services.
              </p>

              <h3>2.4 Fixed-Price Projects</h3>
              <p>
                For projects with predetermined scope, deliverables, and pricing.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. Cancellation Policy</h2>
              
              <h3>3.1 Client-Initiated Cancellations</h3>
              <p>
                You may cancel your service agreement under the following conditions:
              </p>
              <ul>
                <li>
                  <strong>Before Project Commencement:</strong> Full refund of any advance payment, minus a 
                  10% administrative fee if project planning has begun.
                </li>
                <li>
                  <strong>During Project Execution:</strong> Cancellation will be subject to payment for work 
                  completed up to the cancellation date, plus any non-refundable third-party costs incurred.
                </li>
                <li>
                  <strong>After Milestone Completion:</strong> Payment for completed milestones is non-refundable. 
                  Refund may be available for incomplete milestones subject to review.
                </li>
              </ul>

              <h3>3.2 Future Labs-Initiated Cancellations</h3>
              <p>
                We reserve the right to cancel a service agreement if:
              </p>
              <ul>
                <li>Client fails to provide necessary information or resources</li>
                <li>Client violates our Terms of Service</li>
                <li>Project scope changes significantly from original agreement</li>
                <li>Non-payment or payment disputes occur</li>
              </ul>
              <p>
                In such cases, you will be charged only for work completed up to the cancellation date.
              </p>

              <h3>3.3 Notice Period</h3>
              <p>
                Cancellations must be submitted in writing via email to billing@futurelabs.com with at least 
                7 business days' notice for ongoing services and 14 business days' notice for large projects.
              </p>
            </div>

            <div className="policy-section">
              <h2>4. Refund Policy</h2>
              
              <h3>4.1 Eligibility for Refunds</h3>
              <p>
                Refunds may be issued under the following circumstances:
              </p>
              <ul>
                <li>Service was not delivered as described in the agreement</li>
                <li>Major deliverables were not met despite reasonable efforts</li>
                <li>Technical issues on our end prevented service delivery</li>
                <li>Billing errors or duplicate charges occurred</li>
              </ul>

              <h3>4.2 Non-Refundable Items</h3>
              <p>
                The following are generally non-refundable:
              </p>
              <ul>
                <li>Completed project milestones and deliverables</li>
                <li>Consulting hours already rendered</li>
                <li>Third-party licenses, tools, or services purchased on your behalf</li>
                <li>Domain registrations and hosting services</li>
                <li>Time spent on research, planning, and strategy development</li>
                <li>Custom designs and code that have been delivered and accepted</li>
              </ul>

              <h3>4.3 Partial Refunds</h3>
              <p>
                Partial refunds may be issued based on:
              </p>
              <ul>
                <li>Percentage of project completion</li>
                <li>Deliverables successfully provided</li>
                <li>Time and resources invested</li>
                <li>Third-party costs incurred</li>
              </ul>

              <h3>4.4 Refund Request Process</h3>
              <p>
                To request a refund:
              </p>
              <ol>
                <li>Submit a written refund request to billing@futurelabs.com</li>
                <li>Include your project details, invoice number, and reason for refund</li>
                <li>Provide supporting documentation if applicable</li>
                <li>Allow 10-15 business days for review and processing</li>
              </ol>
            </div>

            <div className="policy-section">
              <h2>5. Subscription Services</h2>
              
              <h3>5.1 Monthly Subscriptions</h3>
              <ul>
                <li>Can be cancelled at any time</li>
                <li>No refunds for partial months</li>
                <li>Service continues until the end of the current billing cycle</li>
                <li>30-day notice required for cancellation</li>
              </ul>

              <h3>5.2 Annual Subscriptions</h3>
              <ul>
                <li>Refund available within first 30 days, minus any usage fees</li>
                <li>After 30 days, pro-rated refunds may be considered on a case-by-case basis</li>
                <li>Early termination may incur a cancellation fee of up to 25% of remaining value</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>6. Payment Disputes</h2>
              <p>
                If you dispute a charge:
              </p>
              <ul>
                <li>Contact us immediately before initiating a chargeback with your bank</li>
                <li>We will work with you to resolve the issue amicably</li>
                <li>Chargebacks may result in suspension of services and legal action</li>
                <li>Additional fees may apply for payment disputes</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>7. Force Majeure</h2>
              <p>
                Future Labs shall not be liable for delays or inability to perform services due to circumstances 
                beyond our reasonable control, including but not limited to:
              </p>
              <ul>
                <li>Natural disasters</li>
                <li>Government actions or regulations</li>
                <li>Pandemics or health emergencies</li>
                <li>War, terrorism, or civil unrest</li>
                <li>Internet or telecommunications failures</li>
                <li>Third-party service provider failures</li>
              </ul>
              <p>
                In such cases, we will work with you to reschedule or adjust the project timeline without 
                penalty to either party.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Refund Processing</h2>
              
              <h3>8.1 Processing Time</h3>
              <p>
                Approved refunds will be processed within:
              </p>
              <ul>
                <li>Credit Card: 5-10 business days</li>
                <li>Bank Transfer: 7-14 business days</li>
                <li>PayPal: 3-5 business days</li>
              </ul>

              <h3>8.2 Refund Method</h3>
              <p>
                Refunds will be issued to the original payment method used for the purchase. If this is not 
                possible, we will arrange an alternative refund method with you.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Changes to Scope</h2>
              <p>
                If project scope changes significantly after work has commenced:
              </p>
              <ul>
                <li>Additional charges may apply for expanded scope</li>
                <li>Refunds may not be available if scope decreases</li>
                <li>A new agreement or amendment may be required</li>
                <li>Timeline and deliverables may be adjusted accordingly</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>10. Quality Guarantee</h2>
              <p>
                We stand behind the quality of our work. If you are unsatisfied with delivered work:
              </p>
              <ul>
                <li>Report issues within 14 days of delivery</li>
                <li>We will review and address legitimate concerns</li>
                <li>Reasonable revisions will be provided at no additional cost</li>
                <li>If issues cannot be resolved, a partial refund may be considered</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>11. Termination for Convenience</h2>
              <p>
                Either party may terminate the agreement for convenience with written notice, subject to:
              </p>
              <ul>
                <li>Payment for all work completed to date</li>
                <li>Reimbursement of any non-refundable expenses</li>
                <li>Transfer of completed deliverables and source code</li>
                <li>Settlement of any outstanding invoices</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>12. Contact Information</h2>
              <p>
                For questions about cancellations, refunds, or to initiate a refund request, please contact:
              </p>
              <ul className="contact-info">
                <li><strong>Email:</strong> billing@futurelabs.com</li>
                <li><strong>Phone:</strong> +91 80 1234 5678</li>
                <li><strong>Address:</strong> Future Labs, Bangalore, Karnataka, India</li>
                <li><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>13. Policy Updates</h2>
              <p>
                We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will 
                be effective upon posting to our website. Your continued use of our services after changes 
                constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default RefundPolicy;
