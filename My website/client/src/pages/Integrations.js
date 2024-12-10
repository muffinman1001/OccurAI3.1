import React from 'react';
import { Plus } from 'react-feather';
import '../styles/Integrations.css';

const Integrations = () => {
  const integrations = [
    {
      name: 'Slack',
      icon: '🔵',
      status: 'connected',
      description: 'Chat and collaboration platform'
    },
    {
      name: 'Google Drive',
      icon: '📁',
      status: 'available',
      description: 'Cloud storage and documents'
    },
    {
      name: 'GitHub',
      icon: '🐱',
      status: 'connected',
      description: 'Code repository and version control'
    },
    {
      name: 'Jira',
      icon: '🎯',
      status: 'available',
      description: 'Project management tool'
    }
  ];

  return (
    <div className="integrations-page">
      <div className="page-header">
        <h2>Integrations</h2>
        <button className="add-integration-btn">
          <Plus size={20} />
          Add Integration
        </button>
      </div>

      <div className="integrations-grid">
        {integrations.map((integration, index) => (
          <div key={index} className="integration-card">
            <div className="integration-icon">{integration.icon}</div>
            <div className="integration-info">
              <h3>{integration.name}</h3>
              <p>{integration.description}</p>
              <div className={`integration-status ${integration.status}`}>
                {integration.status}
              </div>
            </div>
            <button className="connect-btn">
              {integration.status === 'connected' ? 'Configure' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations; 