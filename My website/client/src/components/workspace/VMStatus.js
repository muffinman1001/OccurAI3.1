import React from 'react';
import { Cpu, Memory, Activity } from 'react-feather';

const VMStatus = ({ vmId }) => {
  return (
    <div className="vm-status">
      <div className="vm-stats">
        <div className="stat">
          <Cpu size={14} />
          <span>CPU: 45%</span>
        </div>
        <div className="stat">
          <Memory size={14} />
          <span>RAM: 2.4GB</span>
        </div>
        <div className="stat">
          <Activity size={14} />
          <span>Tasks: 3</span>
        </div>
      </div>
      <div className="vm-health">
        <div className="health-indicator good" />
        <span>Healthy</span>
      </div>
    </div>
  );
};

export default VMStatus; 