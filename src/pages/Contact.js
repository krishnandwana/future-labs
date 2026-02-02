import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  // Generate 30-minute interval time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute of [0, 30]) {
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const period = hour < 12 ? 'AM' : 'PM';
        const minuteStr = minute.toString().padStart(2, '0');
        const displayTime = `${hour12}:${minuteStr} ${period}`;
        const valueTime = `${hour.toString().padStart(2, '0')}:${minuteStr}`;
        slots.push({ display: displayTime, value: valueTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const [formData, setFormData] = useState({
    contactMethod: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    service: '',
    problem: '',
    solution: '',
    consultDate: '',
    consultTime: '',
    notes: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPhoneField, setShowPhoneField] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Show/hide phone field based on contact method
    if (name === 'contactMethod') {
      setShowPhoneField(value === 'phone');
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Consultation booked:', formData);
    alert('Success! Your consultation is booked. We\'ll contact you soon to confirm.');
    
    // Reset form
    setFormData({
      contactMethod: '',
      countryCode: '+91',
      phoneNumber: '',
      email: '',
      service: '',
      problem: '',
      solution: '',
      consultDate: '',
      consultTime: '',
      notes: ''
    });
    setShowPhoneField(false);
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      {/* Premium Consultation Section */}
      <section className="consultation-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="hero-heading">
              Let's Build Something <span className="neon-text">Amazing</span> Together
            </h1>
            <p className="hero-description">
              Harness the power of AI-driven digital transformation with our expert team. 
              Get a <strong>free consultation</strong> to explore cutting-edge solutions in AR/VR, 
              AI/ML, and custom web & mobile applications tailored to your vision.
            </p>
          </div>

          {/* Premium Glass Form Card */}
          <div className="consultation-form-card">
            <div className="form-glow"></div>
            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Book Your Free Consultation</h2>
                <p>Let's transform your ideas into reality</p>
              </div>

              {/* Preferred Contact Method */}
              <div className={`input-group ${focusedField === 'contactMethod' || formData.contactMethod ? 'active' : ''}`}>
                <label htmlFor="contactMethod" className="input-label">Preferred Contact Method *</label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  className="premium-select"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  onFocus={() => handleFocus('contactMethod')}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Choose your preferred method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                </select>
                <div className="input-highlight"></div>
              </div>

              {/* Phone Number (Conditional) */}
              {showPhoneField && (
                <div className="phone-input-row">
                  <div className={`input-group country-code-group ${focusedField === 'countryCode' || formData.countryCode ? 'active' : ''}`}>
                    <label htmlFor="countryCode" className="input-label">Code</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="premium-select"
                      value={formData.countryCode}
                      onChange={handleChange}
                      onFocus={() => handleFocus('countryCode')}
                      onBlur={handleBlur}
                    >
                      <option value="+91">+91 (India)</option>
                      <option value="+1">+1 (US/Canada)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (Australia)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+65">+65 (Singapore)</option>
                      <option value="+81">+81 (Japan)</option>
                      <option value="+86">+86 (China)</option>
                    </select>
                    <div className="input-highlight"></div>
                  </div>

                  <div className={`input-group phone-number-group ${focusedField === 'phoneNumber' || formData.phoneNumber ? 'active' : ''}`}>
                    <label htmlFor="phoneNumber" className="input-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="premium-input"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phoneNumber')}
                      onBlur={handleBlur}
                      required={showPhoneField}
                    />
                    <div className="input-highlight"></div>
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div className={`input-group ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                <label htmlFor="email" className="input-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="premium-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
                <div className="input-highlight"></div>
              </div>

              {/* Service Category */}
              <div className={`input-group ${focusedField === 'service' || formData.service ? 'active' : ''}`}>
                <label htmlFor="service" className="input-label">Service Category *</label>
                <select
                  id="service"
                  name="service"
                  className="premium-select"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => handleFocus('service')}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select the service you're interested in</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="ar-vr">AR/VR Solutions</option>
                  <option value="web-dev">Web Application Development</option>
                  <option value="mobile-dev">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="data">Data Engineering & Analytics</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
                <div className="input-highlight"></div>
              </div>

              {/* Problem Description */}
              <div className={`input-group ${focusedField === 'problem' || formData.problem ? 'active' : ''}`}>
                <label htmlFor="problem" className="input-label">Describe Your Challenge *</label>
                <textarea
                  id="problem"
                  name="problem"
                  className="premium-textarea"
                  placeholder="What problem are you trying to solve? What challenges is your business facing?"
                  value={formData.problem}
                  onChange={handleChange}
                  onFocus={() => handleFocus('problem')}
                  onBlur={handleBlur}
                  rows="4"
                  required
                ></textarea>
                <div className="input-highlight"></div>
              </div>

              {/* Expected Solution */}
              <div className={`input-group ${focusedField === 'solution' || formData.solution ? 'active' : ''}`}>
                <label htmlFor="solution" className="input-label">Your Vision / Expected Solution</label>
                <textarea
                  id="solution"
                  name="solution"
                  className="premium-textarea"
                  placeholder="What's your ideal outcome? Share your vision for the solution..."
                  value={formData.solution}
                  onChange={handleChange}
                  onFocus={() => handleFocus('solution')}
                  onBlur={handleBlur}
                  rows="4"
                ></textarea>
                <div className="input-highlight"></div>
              </div>

              {/* Date & Time Picker Row - Custom Reactbits Style */}
              <div className="datetime-row">
                <div className={`input-group ${focusedField === 'consultDate' || formData.consultDate ? 'active' : ''}`}>
                  <label htmlFor="consultDate" className="input-label">Preferred Date *</label>
                  <div className="custom-date-wrapper">
                    <input
                      type="date"
                      id="consultDate"
                      name="consultDate"
                      className="premium-input datetime-input custom-date-input"
                      value={formData.consultDate}
                      onChange={handleChange}
                      onFocus={() => handleFocus('consultDate')}
                      onBlur={handleBlur}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                    <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="input-highlight"></div>
                </div>

                <div className={`input-group ${focusedField === 'consultTime' || formData.consultTime ? 'active' : ''}`}>
                  <label htmlFor="consultTime" className="input-label">Preferred Time *</label>
                  <div className="custom-time-wrapper">
                    <select
                      id="consultTime"
                      name="consultTime"
                      className="premium-select custom-time-select"
                      value={formData.consultTime}
                      onChange={handleChange}
                      onFocus={() => handleFocus('consultTime')}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot.value}>
                          {slot.display}
                        </option>
                      ))}
                    </select>
                    <svg className="clock-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="input-highlight"></div>
                </div>
              </div>

              {/* Notes / Preparation */}
              <div className={`input-group ${focusedField === 'notes' || formData.notes ? 'active' : ''}`}>
                <label htmlFor="notes" className="input-label">Additional Notes / Preparation</label>
                <textarea
                  id="notes"
                  name="notes"
                  className="premium-textarea"
                  placeholder="Anything else we should know? Any specific questions or requirements?"
                  value={formData.notes}
                  onChange={handleChange}
                  onFocus={() => handleFocus('notes')}
                  onBlur={handleBlur}
                  rows="3"
                ></textarea>
                <div className="input-highlight"></div>
              </div>

              {/* Premium CTA Button */}
              <button 
                type="submit" 
                className={`cta-button ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="button-spinner"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="button-text">Get Free Consultation</span>
                    <span className="button-arrow">→</span>
                  </>
                )}
              </button>

              <p className="form-footer-text">
                No commitment required • 100% free consultation • Expert advice guaranteed
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Info - Minimal Footer */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-info-grid">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Visit Us</h4>
                <p>Venkatadri Layout, Bangalore, Karnataka 560076</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Call Us</h4>
                <p>+91 7354943002</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email Us</h4>
                <p>info@futurelabs.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
