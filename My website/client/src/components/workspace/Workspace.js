import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Terminal, Activity } from 'react-feather';
import AgentContextMenu from './AgentContextMenu';
import FloatingActions from './FloatingActions';
import '../../styles/Workspace.css';

const Workspace = () => {
  const workspaceRef = useRef(null);
  const [activeAgent, setActiveAgent] = useState(null);
  const [showMonitor, setShowMonitor] = useState(true);
  const [contextMenu, setContextMenu] = useState(null);
  const [scale, setScale] = useState(1);

  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleContextMenu = (e, agentId) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      agentId
    });
  };

  const handleContextAction = (action) => {
    console.log(`Performing ${action} on agent ${contextMenu.agentId}`);
    setContextMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      
      workspaceRef.current.scrollLeft -= deltaX;
      workspaceRef.current.scrollTop -= deltaY;
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const workspace = workspaceRef.current;
    workspace.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      workspace.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleRefresh = () => window.location.reload();
  const handleCreateAgent = () => {
    console.log('Creating new agent...');
  };

  return (
    <div className="workspace" ref={workspaceRef}>
      <div className="grid" />
      <div className="workspace-content">
        <div className="agents-container">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
              className={`agent-node ${activeAgent === i ? 'active' : ''}`}
              onClick={() => setActiveAgent(i)}
            style={{
              left: `${200 + i * 250}px`,
              top: `${200 + (i % 2) * 150}px`
            }}
            onContextMenu={(e) => handleContextMenu(e, i)}
          >
            <div className="agent-content">
              <h3>AI Agent {i + 1}</h3>
                <p>Virtual Machine {i + 1}</p>
                <div className="agent-stats">
                  <span><Activity size={14} /> Active</span>
                  <span><Terminal size={14} /> Running</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {activeAgent !== null && showMonitor && (
          <div className="agent-monitor">
            <div className="monitor-header">
              <h2>AI Agent {activeAgent + 1} Monitor</h2>
              <button onClick={() => setShowMonitor(false)}>×</button>
            </div>
            <div className="monitor-content">
              <div className="video-feed">
                <Monitor size={24} />
                <span>Live Feed</span>
                <div className="feed-placeholder">
                  {/* Placeholder for actual video feed */}
                  <div className="activity-simulation" />
                </div>
              </div>
              <div className="agent-logs">
                <Terminal size={16} />
                <div className="log-content">
                  <div>System initialized...</div>
                  <div>Loading AI models...</div>
                  <div>Agent ready</div>
                  <div>Processing task queue...</div>
                </div>
              </div>
            </div>
          </div>
        )}
+       {contextMenu && (
+         <AgentContextMenu
+           x={contextMenu.x}
+           y={contextMenu.y}
+           onClose={() => setContextMenu(null)}
+           onAction={handleContextAction}
+         />
+       )}
+       <FloatingActions
+         onZoomIn={handleZoomIn}
+         onZoomOut={handleZoomOut}
+         onRefresh={handleRefresh}
+         onCreateAgent={handleCreateAgent}
+       />
      </div>
    </div>
  );
};

export default Workspace; 