import React from 'react';

const OverlayEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      
      {/* 1. Heavy Vignette (RE5 is notorious for dark corners) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, transparent 50%, rgba(10, 12, 5, 0.4) 80%, rgba(0, 0, 0, 0.95) 100%)'
        }}
      />

      {/* 2. Scanlines (The horizontal TV lines) */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4))',
          backgroundSize: '100% 4px'
        }}
      />

      {/* 3. Static Noise (Film Grain) */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] animate-grain" />

      {/* 4. Subtle Green Tint (Night vision/Tactical overlay feel) */}
      <div className="absolute inset-0 bg-[#4a5c2f] mix-blend-overlay opacity-10" />

    </div>
  );
};

export default OverlayEffects;