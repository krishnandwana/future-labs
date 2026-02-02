import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft } from 'react-icons/fa';
import ThreeScene from '../components/ThreeScene';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const servicesRef = useRef([]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animate service cards on scroll
      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        gsap.from(service, {
          scrollTrigger: {
            trigger: service,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      sceneType: 'ai',
      title: 'AI Development',
      description: 'Intelligent systems powered by machine learning and neural networks that transform your business.',
      techStack: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenAI'],
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
    },
    {
      sceneType: 'web',
      title: 'Web Development',
      description: 'High-performance web applications built with cutting-edge frameworks and modern architectures.',
      techStack: ['React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)',
    },
    {
      sceneType: 'app',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications delivering exceptional user experiences.',
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #7b2cbf 100%)',
    },
    {
      sceneType: 'arvr',
      title: 'AR/VR Development',
      description: 'Immersive augmented and virtual reality experiences that redefine digital interaction.',
      techStack: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore'],
      gradient: 'linear-gradient(135deg, #ff00ff 0%, #00d4ff 100%)',
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
              Where Immersion <span className="gradient-text">Meets Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              We specialize in developing immersive AR/VR solutions, intelligent platforms, and custom applications that transform how businesses operate and compete.
              </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="services-header">
            <p className="services-label">OUR EXPERTISE</p>
            <h2 className="section-title">Services We Offer</h2>
            <p className="section-subtitle">
              Cutting-edge technology solutions powered by AI, AR/VR, and modern development
            </p>
          </div>
          
          <div className="services-grid-premium">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card-premium"
                ref={(el) => (servicesRef.current[index] = el)}
              >
                <div className="service-card-canvas">
                  <div className="canvas-glow-home" style={{ background: service.gradient }}></div>
                  <ThreeScene sceneType={service.sceneType} isVisible={true} />
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <div className="tech-stack-home">
                    {service.techStack.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge-home">{tech}</span>
                    ))}
                  </div>
                  <div className="service-card-gradient" style={{ background: service.gradient }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/services" className="btn-premium">
              <span>Explore All Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M5 12h14M12 5l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Combined Impact & Testimonials Section */}
      <section id="projects" className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact - Numbers that speak for our success - 100+ Projects Completed - 50+ Happy Clients - 5+ Years Experience - 30+ Team Members - Testimonials</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-2" style={{ marginTop: '60px' }}>
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

      {/* Contact CTA Section */}
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
