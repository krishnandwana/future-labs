import React, { useState } from 'react';
import { FaSearch, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Web Development', 'AI & ML', 'Cloud', 'Design'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2026',
      category: 'Web Development',
      author: 'Arjun Mehta',
      date: 'January 25, 2026',
      excerpt: 'Explore the latest trends shaping web development, from AI-powered tools to WebAssembly and beyond.',
      readTime: '5 min read',
      image: 'placeholder'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Applications with Microservices',
      category: 'Cloud',
      author: 'Sneha Patel',
      date: 'January 20, 2026',
      excerpt: 'Learn how microservices architecture can help you build more scalable and maintainable cloud applications.',
      readTime: '8 min read',
      image: 'placeholder'
    },
    {
      id: 3,
      title: 'AI and Machine Learning in Business: Practical Applications',
      category: 'AI & ML',
      author: 'Vikram Singh',
      date: 'January 15, 2026',
      excerpt: 'Discover real-world applications of AI and ML that are transforming businesses across industries.',
      readTime: '6 min read',
      image: 'placeholder'
    },
    {
      id: 4,
      title: 'UI/UX Design Principles for Modern Web Applications',
      category: 'Design',
      author: 'Priya Reddy',
      date: 'January 10, 2026',
      excerpt: 'Essential design principles to create intuitive and engaging user experiences in web applications.',
      readTime: '7 min read',
      image: 'placeholder'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for Small Businesses',
      category: 'Technology',
      author: 'Rahul Kumar',
      date: 'January 5, 2026',
      excerpt: 'Protect your business from cyber threats with these essential security practices and tools.',
      readTime: '5 min read',
      image: 'placeholder'
    },
    {
      id: 6,
      title: 'The Rise of No-Code and Low-Code Platforms',
      category: 'Web Development',
      author: 'Anita Sharma',
      date: 'December 30, 2025',
      excerpt: 'How no-code and low-code platforms are democratizing software development and empowering businesses.',
      readTime: '6 min read',
      image: 'placeholder'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, trends, and best practices in technology</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="blog-controls">
            <div className="search-box">
              <FaSearch />
              <input type="text" placeholder="Search articles..." />
            </div>
            <div className="category-filter">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card blog-card">
                <div className="blog-image">
                  <div className="placeholder-image">
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <FaUser className="author-icon" />
                      <span>{post.author}</span>
                    </div>
                    <div className="blog-date">
                      <FaCalendar className="date-icon" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="read-more-btn">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest articles and insights delivered to your inbox</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
