import React from 'react';
import { BarChart2, Users, Clock, Zap } from 'react-feather';
import '../styles/Analytics.css';

const Analytics = () => {
  const stats = [
    { icon: <Users />, label: 'Active Agents', value: '247', change: '+12%' },
    { icon: <Zap />, label: 'Tasks Completed', value: '1,834', change: '+23%' },
    { icon: <Clock />, label: 'Avg Response Time', value: '1.2s', change: '-8%' },
    { icon: <BarChart2 />, label: 'Success Rate', value: '98.5%', change: '+2%' }
  ];

  return (
    <div className="analytics-page">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.label}</h3>
              <div className="stat-value">
                {stat.value}
                <span className={`change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Agent Performance</h3>
          <div className="chart-placeholder">
            {/* Add actual chart library implementation here */}
            <div className="mock-chart">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className="mock-bar" 
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Resource Usage</h3>
          <div className="chart-placeholder">
            <div className="mock-line-chart">
              <svg viewBox="0 0 100 30">
                <path
                  d="M0,15 Q25,5 50,20 T100,15"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4a90e2" />
                    <stop offset="100%" stopColor="#7b68ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 