import React from 'react';
import { FaUsers, FaAward, FaBullseye, FaHeart } from 'react-icons/fa';
import './About.css';

function About() {
  const values = [
    {
      icon: <FaBullseye />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: <FaHeart />,
      title: 'Excellence',
      description: 'Commitment to quality in everything we do.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results.'
    },
    {
      icon: <FaAward />,
      title: 'Integrity',
      description: 'Building trust through transparency and honesty.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About Future Labs</h1>
          <p>Pioneering Technology Solutions from Bangalore</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in the tech hub of Bangalore, Future Labs emerged from a vision to 
                transform businesses through innovative technology solutions. We started with 
                a small team of passionate developers and designers who believed in the power 
                of technology to create positive change.
              </p>
              <p>
                Today, we've grown into a full-service technology company, serving clients 
                across various industries. Our journey has been marked by continuous learning, 
                adaptation, and an unwavering commitment to excellence.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <span>Our Team at Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="grid grid-2">
            <div className="card mv-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. We strive to be the trusted partner 
                for companies seeking to leverage technology for competitive advantage.
              </p>
            </div>
            <div className="card mv-card">
              <h3>Our Vision</h3>
              <p>
                To be recognized as India's leading technology solutions provider, known for 
                innovation, excellence, and customer success. We envision a future where 
                technology seamlessly integrates with business goals to create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="card value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Future Labs?</h2>
          <div className="grid grid-3">
            <div className="card">
              <h4>Expert Team</h4>
              <p>
                Our team comprises experienced professionals with deep expertise in 
                cutting-edge technologies and industry best practices.
              </p>
            </div>
            <div className="card">
              <h4>Client-Centric Approach</h4>
              <p>
                We prioritize understanding your unique needs and delivering customized 
                solutions that align with your business objectives.
              </p>
            </div>
            <div className="card">
              <h4>Proven Track Record</h4>
              <p>
                With 100+ successful projects delivered, we have demonstrated our ability 
                to execute complex projects on time and within budget.
              </p>
            </div>
            <div className="card">
              <h4>Innovation Focus</h4>
              <p>
                We stay ahead of technology trends, ensuring our clients benefit from 
                the latest innovations and best practices.
              </p>
            </div>
            <div className="card">
              <h4>Quality Assurance</h4>
              <p>
                Rigorous testing and quality control processes ensure that every 
                deliverable meets the highest standards.
              </p>
            </div>
            <div className="card">
              <h4>Ongoing Support</h4>
              <p>
                Our commitment doesn't end at delivery. We provide continuous support 
                and maintenance to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section location-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">
            Based in Bangalore, India's Silicon Valley
          </p>
          <div className="location-content">
            <p>
              Located in the heart of Bangalore, Karnataka, Future Labs benefits from 
              being situated in India's premier technology hub. This strategic location 
              gives us access to top talent, vibrant tech ecosystem, and enables us to 
              serve clients globally while staying connected to the pulse of innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
