import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAppState } from './context/AppContext';
import { Layers, Sparkles, Moon, Sun } from 'lucide-react';
import './styles/spatial.css';

export default function App() {
  const { theme, toggleTheme, userProfile } = useAppState();

  return (
    <div className="app-container">
      {/* Immersive background layer */}
      <div className="mesh-bg"></div>

      {/* Floating Spatial Header / Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <Layers size={22} style={{ color: 'var(--accent-color)' }} />
          <span>Spatial Portal</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="action-btn" title="Toggle Spatial Theme">
            {theme === 'aurora' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <div className="profile-chip">
            <div className="profile-avatar">{userProfile.initials}</div>
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }} className="desktop-only">
              {userProfile.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Dynamic Content Views */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
