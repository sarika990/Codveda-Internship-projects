import React from 'react';
import { Layers, Monitor, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="fade-in-slide">
      <div className="spatial-card" style={{ marginBottom: '2rem' }}>
        <span className="vision-badge">Our Paradigm</span>
        <h1>About Spatial UI</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
          Spatial UI design brings a sense of depth, scale, and physical presence to digital interfaces. Inspired by spatial operating systems, this interface blends layers of glass, light, and shadow to feel native to your display.
        </p>
      </div>

      <div className="grid-3">
        <div className="spatial-card">
          <Layers size={36} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Z-Index Depth</h3>
          <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
            We stack visual elements across physical depth planes. Using multiple layered shadows, elements seem to physically float above the mesh landscape.
          </p>
        </div>

        <div className="spatial-card">
          <Monitor size={36} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Subtle Refraction</h3>
          <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
            By applying `backdrop-filter: blur(24px)`, the background colours gently seep through components, keeping users grounded in their digital space.
          </p>
        </div>

        <div className="spatial-card">
          <Target size={36} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Dynamic Lighting</h3>
          <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
            High-contrast borders simulate physical light falling on glass edges. Hover events trigger radial light overlays that follow cursor movement.
          </p>
        </div>
      </div>

      <div className="spatial-card" style={{ marginTop: '2rem' }}>
        <h2>The Architecture</h2>
        <p style={{ marginTop: '1rem' }}>
          This Single Page Application separates styling tokens, routing tables, global context providers, and unique view controllers to ensure modular, maintainable code. With Vite powering the dev-server, live modifications propagate instantly.
        </p>
      </div>
    </div>
  );
}
