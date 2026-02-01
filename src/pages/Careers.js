import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';
import './Careers.css';

function Careers() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and work on cutting-edge web applications.',
      requirements: ['React, Node.js expertise', 'MongoDB/PostgreSQL', 'RESTful APIs', 'Agile methodology']
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our creative team to design beautiful and intuitive user experiences for our clients\' digital products.',
      requirements: ['Figma/Adobe XD proficiency', 'User research skills', 'Design systems', 'Portfolio required']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Help us build and maintain robust cloud infrastructure and CI/CD pipelines.',
      requirements: ['AWS/Azure experience', 'Docker & Kubernetes', 'CI/CD tools', 'Infrastructure as Code']
    },
    {
      title: 'Data Scientist',
      department: 'AI & Analytics',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work on challenging data problems and build ML models that drive business value.',
      requirements: ['Python/R expertise', 'Machine Learning', 'Statistical analysis', 'Big data tools']
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop high-quality mobile applications for iOS and Android platforms.',
      requirements: ['React Native/Flutter', 'Native development', 'API integration', 'App Store publishing']
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead cross-functional teams to deliver successful technology projects on time and within budget.',
      requirements: ['PMP/Agile certification', 'Team leadership', 'Stakeholder management', 'Technical background']
    }
  ];

  const benefits = [
    {
      icon: <FaRupeeSign />,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: <FaBriefcase />,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working arrangements'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Great Location',
      description: 'Modern office in the heart of Bangalore'
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build your career with Future Labs and shape the future of technology</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section why-work-section">
        <div className="container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">
            At Future Labs, we believe in creating an environment where talent thrives
          </p>
          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section culture-section">
        <div className="container">
          <h2 className="section-title">Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <h3>Innovation First</h3>
              <p>We encourage creative thinking and embrace new ideas. Your innovations can shape our products.</p>
            </div>
            <div className="culture-item">
              <h3>Learning & Development</h3>
              <p>Access to training programs, conferences, and certifications to grow your skills.</p>
            </div>
            <div className="culture-item">
              <h3>Collaborative Environment</h3>
              <p>Work with talented professionals in a supportive, team-oriented atmosphere.</p>
            </div>
            <div className="culture-item">
              <h3>Work-Life Balance</h3>
              <p>We value your time and well-being with flexible schedules and remote work options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section positions-section">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            Explore opportunities to join our growing team
          </p>
          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <div key={index} className="card position-card">
                <div className="position-header">
                  <h3>{position.title}</h3>
                  <span className="department-badge">{position.department}</span>
                </div>
                <div className="position-details">
                  <div className="detail-item">
                    <FaMapMarkerAlt />
                    <span>{position.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock />
                    <span>{position.type}</span>
                  </div>
                  <div className="detail-item">
                    <FaBriefcase />
                    <span>{position.experience}</span>
                  </div>
                </div>
                <p className="position-description">{position.description}</p>
                <div className="position-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Application Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Apply Online</h4>
              <p>Submit your application through our careers portal</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Initial Screening</h4>
              <p>Our HR team reviews your application</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Technical Interview</h4>
              <p>Meet with our technical team</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Final Round</h4>
              <p>Discussion with leadership team</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h4>Offer</h4>
              <p>Welcome to Future Labs!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See the Right Position?</h2>
            <p>Send us your resume and we'll keep you in mind for future opportunities</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
