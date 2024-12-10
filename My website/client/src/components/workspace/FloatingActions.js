import React from 'react';
import { Plus, ZoomIn, ZoomOut, RefreshCw } from 'react-feather';
import '../../styles/components/FloatingActions.css';

const FloatingActions = ({ onZoomIn, onZoomOut, onRefresh, onCreateAgent }) => {
  return (
    <div className="floating-actions">
      <button 
        className="action-button primary" 
        onClick={onCreateAgent}
        title="Create New Agent"
      >
        <Plus />
      </button>
      <button 
        className="action-button" 
        onClick={onZoomIn}
        title="Zoom In"
      >
        <ZoomIn />
      </button>
      <button 
        className="action-button" 
        onClick={onZoomOut}
        title="Zoom Out"
      >
        <ZoomOut />
      </button>
      <button 
        className="action-button" 
        onClick={onRefresh}
        title="Refresh Workspace"
      >
        <RefreshCw />
      </button>
    </div>
  );
};

export default FloatingActions; 