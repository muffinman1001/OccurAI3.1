import React from 'react';
import { Play, Pause, RefreshCw, Trash2, Settings } from 'react-feather';
import '../../styles/AgentContextMenu.css';

const AgentContextMenu = ({ x, y, onClose, onAction }) => {
  const menuItems = [
    { icon: <Play size={14} />, label: 'Start Agent', action: 'start' },
    { icon: <Pause size={14} />, label: 'Pause Agent', action: 'pause' },
    { icon: <RefreshCw size={14} />, label: 'Restart VM', action: 'restart' },
    { icon: <Settings size={14} />, label: 'Configure', action: 'configure' },
    { icon: <Trash2 size={14} />, label: 'Delete', action: 'delete', danger: true },
  ];

  return (
    <div 
      className="context-menu"
      style={{ top: y, left: x }}
      onClick={e => e.stopPropagation()}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`menu-item ${item.danger ? 'danger' : ''}`}
          onClick={() => onAction(item.action)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AgentContextMenu; 