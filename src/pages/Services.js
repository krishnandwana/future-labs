import React from 'react';
import { FaCode, FaMobile, FaCloud, FaDatabase, FaPaintBrush, FaChartLine, FaShieldAlt, FaRobot } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js. We create scalable, performant, and user-friendly solutions.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences on all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure design, migration, and management services. Helping businesses leverage the power of cloud computing.',
      features: ['AWS Solutions', 'Azure Services', 'Cloud Migration', 'DevOps Implementation']
    },
    {
      icon: <FaDatabase />,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and warehouses. Transform raw data into actionable insights for your business.',
      features: ['Data Warehousing', 'ETL Processes', 'Big Data Solutions', 'Data Migration']
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging, intuitive, and beautiful digital experiences for your customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices implementation.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Training']
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbot Development']
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Technology Solutions for Modern Businesses</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From concept to deployment, we provide end-to-end technology solutions 
              tailored to your business needs. Our expert team delivers innovative, 
              scalable, and reliable services.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="card service-detail-card">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A proven methodology to deliver exceptional results
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Discovery</h4>
              <p>Understanding your business goals, challenges, and requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Planning</h4>
              <p>Creating detailed roadmaps and technical specifications</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Development</h4>
              <p>Building solutions using agile methodologies and best practices</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Testing</h4>
              <p>Rigorous quality assurance and user acceptance testing</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h4>Deployment</h4>
              <p>Smooth rollout with minimal disruption to your operations</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h4>Support</h4>
              <p>Ongoing maintenance, updates, and technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and how we can help</p>
            <a href="/contact" className="btn btn-primary">Request a Quote</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
