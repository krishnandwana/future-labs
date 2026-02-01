import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import './Home.css';

function Home() {
  const services = [
    {
      icon: <FaRocket />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Digital Strategy',
      description: 'Strategic planning and consulting to transform your digital presence.'
    },
    {
      icon: <FaUsers />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences.'
    },
    {
      icon: <FaChartLine />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for business growth.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '30+', label: 'Team Members' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Solutions Inc.',
      text: 'Future Labs transformed our digital infrastructure. Their expertise and professionalism are unmatched.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Innovative Startups',
      text: 'Working with Future Labs was a game-changer for our business. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Innovating Tomorrow's <span className="gradient-text">Solutions Today</span>
            </h1>
            <p className="hero-subtitle">
              Future Labs delivers cutting-edge technology solutions from the heart of Bangalore,
              empowering businesses to thrive in the digital age.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">About Future Labs</h2>
              <p>
                Based in Bangalore, India's tech capital, Future Labs is a leading service-based 
                company specializing in innovative technology solutions. We combine technical 
                expertise with creative thinking to deliver exceptional results.
              </p>
              <p>
                Our mission is to empower businesses through digital transformation, providing 
                tailored solutions that drive growth and success in an ever-evolving digital landscape.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h4>Expert Team</h4>
                  <p>Skilled professionals dedicated to excellence</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h4>Proven Results</h4>
                  <p>Track record of successful project delivery</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h4>Client-Focused</h4>
                  <p>Your success is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="card service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
          <div className="grid grid-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your goals</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
