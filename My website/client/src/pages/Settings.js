import React from 'react';
import { Save } from 'react-feather';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h2>Platform Settings</h2>
        
        <div className="settings-section">
          <h3>Virtual Machine Configuration</h3>
          <div className="setting-group">
            <label>Default VM Memory</label>
            <select defaultValue="2">
              <option value="1">1 GB</option>
              <option value="2">2 GB</option>
              <option value="4">4 GB</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label>Auto-shutdown Idle VMs</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div className="settings-section">
          <h3>AI Agent Defaults</h3>
          <div className="setting-group">
            <label>Agent Response Time</label>
            <input type="range" min="1" max="5" defaultValue="3" />
          </div>
        </div>

        <button className="save-button">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings; 