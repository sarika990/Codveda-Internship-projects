import React, { useState } from 'react';
import { useAppState } from '../context/AppContext';
import { Compass, Sparkles, Shield, User } from 'lucide-react';

export default function Home() {
  const { theme, toggleTheme, userProfile, updateProfileName } = useAppState();
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [clickCount, setClickCount] = useState(0);

  const handleUpdateName = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updateProfileName(nameInput);
    }
  };

  return (
    <div className="fade-in-slide">
      <div className="spatial-card" style={{ marginBottom: '2rem' }}>
        <span className="vision-badge">Spatial Operating Environment</span>
        <h1>Welcome to the portal, {userProfile.name}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          An immersive Web-based ecosystem leveraging glassmorphism, progressive enhancement, and dynamic mesh layering.
        </p>

        <div className="grid-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2>Global State Dashboard</h2>
            <p>
              This section is hooked directly to the React Context API. Toggle themes or update your identity, and observe components elsewhere react immediately.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={toggleTheme}>
                <Sparkles size={18} /> Toggle Theme (Active: {theme})
              </button>
              <button className="btn-secondary" onClick={() => setClickCount(prev => prev + 1)}>
                Clicks Logged: {clickCount}
              </button>
            </div>

            <form onSubmit={handleUpdateName} style={{ marginTop: '1rem', maxWidth: '400px' }}>
              <div className="glass-input-group">
                <label htmlFor="name-input">Update Profile Name</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    id="name-input"
                    type="text"
                    className="glass-input"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                  <button type="submit" className="btn-secondary">Save</button>
                </div>
              </div>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <div className="spatial-card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div className="profile-avatar" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                  {userProfile.initials}
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>{userProfile.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{userProfile.role}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem' }}>Joined: {userProfile.joined}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-3">
        <div className="spatial-card">
          <Compass size={32} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Fluid Routing</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Powered by React Router. State persists smoothly as you move between rooms without any visual disruption or page reloads.
          </p>
        </div>

        <div className="spatial-card">
          <Sparkles size={32} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Aesthetic Design</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Dynamic linear-backdrop blur values combined with light vector overlays provide clean readability on any resolution.
          </p>
        </div>

        <div className="spatial-card">
          <Shield size={32} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Safe Environment</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Rigorous validation of parameters, React hooks optimization, and clean state separation to avoid application drift.
          </p>
        </div>
      </div>
    </div>
  );
}
