import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Integrations from './pages/Integrations';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>Made by Lucas Love</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 