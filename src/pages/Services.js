import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeScene from '../components/ThreeScene';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef([]);
  const [activeScene, setActiveScene] = useState(null);

  useEffect(() => {

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Hero animation
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      const subtitle = document.querySelector('.hero-subtitle');
      const words = document.querySelectorAll('.hero-title .word');
      const description = document.querySelector('.hero-description');
      const cta = document.querySelector('.hero-cta');

      if (subtitle) {
        heroTimeline.from(subtitle, {
          opacity: 0,
          y: 30,
          duration: 0.8,
        });
      }

      if (words.length > 0) {
        heroTimeline.from(words, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        }, '-=0.4');
      }

      if (description) {
        heroTimeline.from(description, {
          opacity: 0,
          y: 30,
          duration: 0.8,
        }, '-=0.5');
      }

      if (cta) {
        heroTimeline.from(cta, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.3');
      }

      // Services scroll animations
      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: service,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            onEnter: () => setActiveScene(index),
            onEnterBack: () => setActiveScene(index),
          },
        });

        const content = service.querySelector('.service-content');
        const canvas = service.querySelector('.service-canvas-wrapper');
        const features = service.querySelectorAll('.feature-item');

        if (content) {
          timeline.from(content, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out',
          });
        }

        if (canvas) {
          timeline.from(canvas, {
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power3.out',
          }, '-=0.8');
        }

        if (features.length > 0) {
          timeline.from(features, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
          }, '-=0.5');
        }

        // Parallax effect
        if (canvas) {
          gsap.to(canvas, {
            scrollTrigger: {
              trigger: service,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
            y: -50,
          });
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      id: 'ai',
      sceneType: 'ai',
      title: 'AI Development',
      subtitle: 'Artificial Intelligence & Machine Learning',
      description: 'Harness the power of artificial intelligence to transform your business. From neural networks to natural language processing, we build intelligent systems that learn, adapt, and evolve.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy & Consulting',
        'Custom AI Solutions',
      ],
      techStack: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenAI', 'LangChain', 'Scikit-learn'],
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
    },
    {
      id: 'web',
      sceneType: 'web',
      title: 'Web Development',
      subtitle: 'Modern Web Applications',
      description: 'Create stunning, high-performance web applications that captivate users and drive results. We specialize in cutting-edge frameworks and scalable architectures.',
      features: [
        'React & Next.js Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Real-time Applications',
        'API Development',
        'Cloud-Native Solutions',
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)',
    },
    {
      id: 'app',
      sceneType: 'app',
      title: 'App Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Build exceptional mobile experiences that users love. From iOS to Android, we deliver native performance with seamless cross-platform capabilities.',
      features: [
        'iOS & Android Native',
        'React Native Development',
        'Flutter Applications',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Enterprise Mobility',
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #7b2cbf 100%)',
    },
    {
      id: 'arvr',
      sceneType: 'arvr',
      title: 'AR/VR Development',
      subtitle: 'Immersive Experiences',
      description: 'Step into the future with immersive augmented and virtual reality solutions. We create experiences that blur the line between digital and physical worlds.',
      features: [
        'Virtual Reality Apps',
        'Augmented Reality Solutions',
        'Mixed Reality Experiences',
        '3D Modeling & Animation',
        'WebXR Development',
        'Spatial Computing',
      ],
      techStack: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'Three.js'],
      gradient: 'linear-gradient(135deg, #ff00ff 0%, #00d4ff 100%)',
    },
  ];

  const splitText = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word" style={{ display: 'inline-block', overflow: 'hidden' }}>
        <span style={{ display: 'inline-block' }}>{word}&nbsp;</span>
      </span>
    ));
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="container hero-container">
          <p className="hero-subtitle">OUR EXPERTISE</p>
          <h1 className="hero-title">
            {splitText('Architecting the Digital Future')}
          </h1>
          <p className="hero-description">
            We blend cutting-edge technology with creative innovation to deliver 
            transformative digital solutions that push boundaries and exceed expectations.
          </p>
          <button className="hero-cta magnetic-button">
            <span className="button-text">Explore Our Services</span>
            <span className="button-glow"></span>
          </button>
        </div>
      </section>

      {/* Services Sections */}
      <div className="services-container">
        {services.map((service, index) => (
          <section
            key={service.id}
            className={`service-section ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
            ref={(el) => (servicesRef.current[index] = el)}
          >
            <div className="container">
              <div className="service-grid">
                <div className="service-content">
                  <div className="service-header">
                    <span 
                      className="service-number"
                      style={{ background: service.gradient }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                  
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div 
                          className="feature-dot"
                          style={{ background: service.gradient }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tech-stack">
                    <h4 className="tech-stack-title">Tech Stack</h4>
                    <div className="tech-stack-items">
                      {service.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="tech-badge"
                          style={{ borderColor: service.gradient.match(/#[0-9a-f]{6}/i)?.[0] || '#00d4ff' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="service-cta">
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M5 12h14M12 5l7 7-7 7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="service-canvas-wrapper">
                  <div className="canvas-glow" style={{ background: service.gradient }}></div>
                  <ThreeScene 
                    sceneType={service.sceneType} 
                    isVisible={activeScene === index}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Vision?</h2>
            <p className="cta-description">
              Let's collaborate to create something extraordinary. Our team of experts 
              is ready to bring your ideas to life with cutting-edge technology.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary magnetic-button">
                <span className="button-text">Start Your Project</span>
                <span className="button-glow"></span>
              </Link>
              <Link to="/projects" className="cta-secondary">
                <span>View Portfolio</span>
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
        </div>
      </section>
    </div>
  );
}

export default Services;
