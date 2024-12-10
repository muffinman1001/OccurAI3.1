import React from 'react';
import { Search, Bell, HelpCircle, ChevronRight } from 'react-feather';
import '../../styles/TopNav.css';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="breadcrumb">
        <span>Workspace</span>
        <ChevronRight size={16} />
        <span>AI Agents</span>
      </div>
      
      <div className="search-bar">
        <Search size={16} />
        <input type="text" placeholder="Search agents, tasks, or commands..." />
      </div>

      <div className="nav-actions">
        <button className="nav-button">
          <Bell size={18} />
          <span className="notification-badge">3</span>
        </button>
        <button className="nav-button">
          <HelpCircle size={18} />
        </button>
        <button className="create-button">
          Create Agent
        </button>
      </div>
    </nav>
  );
};

export default TopNav; 