import React from 'react';
import { ArrowRight } from 'react-feather';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Build AI Agents Without Code</h1>
        <p>Create, deploy, and manage intelligent AI agents in virtual environments</p>
        <button className="cta-button">
          Get Started <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="features-grid">
        {[
          { title: 'Virtual Environments', description: 'Secure, isolated VMs for each agent' },
          { title: 'Live Monitoring', description: 'Real-time agent activity tracking' },
          { title: '500+ Features', description: 'Extensive AI capabilities library' },
          { title: 'No-Code Builder', description: 'Visual workflow designer' }
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 