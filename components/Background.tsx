import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* 1. Base Texture: Gritty Concrete/Rust (Kept consistent) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 scale-105"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")', 
        }}
      />
      
      {/* 2. The "RE5 Menu Grid" - 3D Plane Effect - Now uses Variable Color */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--re-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--re-primary) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          transform: 'perspective(800px) rotateX(20deg) scale(1.5)',
          transformOrigin: 'center 0%'
        }}
      />

      {/* 3. Global Color Grading: Strong Filter using variables */}
      <div 
        className="absolute inset-0 opacity-80 mix-blend-multiply transition-colors duration-700"
        style={{
          background: 'linear-gradient(to bottom right, var(--re-panel), var(--re-bg), #000000)'
        }}
      />
      
      {/* 4. High Contrast Overlay (The "Sun Glare" feel) - Tinted by primary */}
      <div 
        className="absolute inset-0 bg-[var(--re-primary)] opacity-5 mix-blend-overlay transition-colors duration-700" 
      />
      
      {/* 5. Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_var(--re-bg)_90%)]" />

    </div>
  );
};

export default Background;