import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      client: 'Retail Solutions Inc.',
      description: 'A comprehensive online shopping platform with advanced features including real-time inventory, payment gateway integration, and customer analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: ['40% increase in sales', '60% faster checkout', '10,000+ active users']
    },
    {
      title: 'Healthcare Management System',
      category: 'Mobile App',
      client: 'MediCare Hospital',
      description: 'Mobile application for patient management, appointment scheduling, and telemedicine consultations.',
      technologies: ['React Native', 'Firebase', 'AWS'],
      results: ['5,000+ appointments/month', '95% user satisfaction', '50% reduction in wait times']
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Engineering',
      client: 'FinTech Solutions',
      description: 'Real-time financial data processing and visualization platform for investment analysis.',
      technologies: ['Python', 'Apache Spark', 'PostgreSQL', 'D3.js'],
      results: ['Process 1M+ transactions/day', 'Real-time insights', '80% faster reporting']
    },
    {
      title: 'Smart IoT Platform',
      category: 'Cloud Solutions',
      client: 'Smart Home Tech',
      description: 'Cloud-based IoT platform for managing and monitoring smart home devices.',
      technologies: ['AWS IoT', 'Lambda', 'DynamoDB', 'React'],
      results: ['50,000+ connected devices', '99.9% uptime', 'Global deployment']
    },
    {
      title: 'AI Chatbot for Customer Service',
      category: 'AI & Machine Learning',
      client: 'TeleComm Services',
      description: 'Intelligent chatbot using natural language processing to handle customer inquiries and support tickets.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Node.js'],
      results: ['70% automation rate', '24/7 availability', '30% cost reduction']
    },
    {
      title: 'Corporate Website Redesign',
      category: 'UI/UX Design',
      client: 'Global Manufacturing',
      description: 'Complete website redesign with modern UI/UX, improved navigation, and enhanced user experience.',
      technologies: ['Figma', 'React', 'Tailwind CSS'],
      results: ['150% increase in engagement', '40% lower bounce rate', 'Award-winning design']
    }
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Explore our success stories and impactful projects</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-intro">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              We've successfully delivered 100+ projects across various industries. 
              Here are some of our notable achievements.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="card portfolio-card">
                <div className="portfolio-header">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-client">{project.client}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-results">
                  <h4>Results:</h4>
                  <ul>
                    {project.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section portfolio-stats">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Industries Served</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Be Our Next Success Story?</h2>
            <p>Let's create something amazing together</p>
            <a href="/contact" className="btn btn-primary">Start Your Project</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
