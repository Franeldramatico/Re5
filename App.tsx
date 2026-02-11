import React, { useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import Document from './components/Document';
import OverlayEffects from './components/OverlayEffects';
import { Settings, Monitor, Volume2, VolumeX } from 'lucide-react';
import bgm from './musica/viewer.mp3';

const RE5_TIPS = [
  "TIP: Bright light is the enemy of the parasite.",
  "TIP: Cooperate with your partner to survive.",
  "TIP: Punching a boulder requires maximum effort.",
  "TIP: Aim for the head to trigger a melee prompt.",
  "TIP: Gold eggs can be sold for a high price.",
  "TIP: Flash grenades kill exposed Plagas instantly."
];

// RE5 Color Palettes based on user request
const THEMES = [
  {
    id: 'marshlands',
    name: 'MARSHLANDS (DEFAULT)',
    colors: {
      '--re-bg': '#080905',
      '--re-primary': '#90b348', // Classic Green
      '--re-text': '#e6dec8',
      '--re-secondary': '#8c7b64',
      '--re-panel': '#0f0e0d',
    }
  },
  {
    id: 'kijuju',
    name: 'KIJUJU SUN (HEAT)',
    colors: {
      '--re-bg': '#1a1205',
      '--re-primary': '#e6b422', // Ocher/Yellow
      '--re-text': '#fff8e1',
      '--re-secondary': '#8f7a4e',
      '--re-panel': '#241a0a',
    }
  },
  {
    id: 'uroboros',
    name: 'UROBOROS (VIRUS)',
    colors: {
      '--re-bg': '#000000',
      '--re-primary': '#a3a3a3', // Shiny Black/Silver
      '--re-text': '#f0f0f0',
      '--re-secondary': '#4a4a4a',
      '--re-panel': '#0a0a0a',
    }
  },
  {
    id: 'laser',
    name: 'TARGET (THREAT)',
    colors: {
      '--re-bg': '#1a0505',
      '--re-primary': '#d92b2b', // Intense Red
      '--re-text': '#ffcccc',
      '--re-secondary': '#8c4b4b',
      '--re-panel': '#1f0a0a',
    }
  }
];

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<'init' | 'connecting' | 'chapter' | 'loaded'>('init');
  const [currentTip, setCurrentTip] = useState("");
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  // Audio State
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setCurrentTip(RE5_TIPS[Math.floor(Math.random() * RE5_TIPS.length)]);
    const timer1 = setTimeout(() => setLoadingState('connecting'), 1000);
    const timer2 = setTimeout(() => setLoadingState('chapter'), 3500);
    const timer3 = setTimeout(() => setLoadingState('loaded'), 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Handle Audio Toggle
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.4; // 40% volume for background
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="relative w-full min-h-full font-sans transition-colors duration-700"
      style={activeTheme.colors as React.CSSProperties}
    >
      {/* Background Layer with variable colors */}
      <div className="fixed inset-0 bg-[var(--re-bg)] transition-colors duration-700 -z-10"></div>
      <Background />

      {/* Audio Element - RE5 Viewer Theme */}
      <audio
        ref={audioRef}
        loop
        src={bgm}
      />

      {/* Main Content */}
      <main className={`relative z-20 w-full flex flex-col items-center justify-start pt-8 md:pt-16 pb-32 px-4 transition-all duration-1000 ${loadingState === 'loaded' ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}>
        <Document />
      </main>

      <OverlayEffects />

      {/* --- FOOTER CONTROLS (Bottom Right) --- */}
      {loadingState === 'loaded' && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

          {/* Theme Menu (Pops up above settings button) */}
          {showThemeMenu && (
            <div className="mb-2 bg-[var(--re-panel)]/90 border border-[var(--re-primary)] backdrop-blur-md p-2 shadow-[0_0_20px_rgba(0,0,0,0.8)] animate-fade-in-up origin-bottom-right">
              <div className="text-[var(--re-secondary)] font-header text-xs tracking-widest border-b border-[var(--re-secondary)]/30 pb-1 mb-2">
                VISUAL FILTERS
              </div>
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`
                     block w-full text-right font-header text-sm tracking-widest px-4 py-1 mb-1 transition-all uppercase
                     ${activeTheme.id === theme.id
                      ? 'bg-[var(--re-primary)] text-[var(--re-bg)] font-bold shadow-[0_0_10px_var(--re-primary)]'
                      : 'text-[var(--re-text)] hover:text-[var(--re-primary)] hover:bg-[var(--re-primary)]/10'}
                   `}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          )}

          {/* Buttons Row */}
          <div className="flex items-center gap-4">

            {/* 1. AUDIO TOGGLE BUTTON */}
            <button
              onClick={toggleAudio}
              className="group flex flex-row-reverse items-center gap-2 text-[var(--re-text)] hover:text-[var(--re-primary)] transition-colors"
            >
              <div className={`w-10 h-10 border border-[var(--re-primary)] bg-[var(--re-panel)] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_var(--re-primary)] transition-all ${!isMuted ? 'shadow-[0_0_10px_var(--re-primary)] bg-[var(--re-primary)]/10' : ''}`}>
                {isMuted ? (
                  <VolumeX size={20} className="text-[var(--re-secondary)]" />
                ) : (
                  <Volume2 size={20} className="text-[var(--re-primary)] animate-pulse" />
                )}
              </div>
              <span className="font-header text-xs tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase hidden md:block">
                {isMuted ? 'BGM OFF' : 'BGM ON'}
              </span>
            </button>

            {/* 2. THEME SETTINGS BUTTON */}
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="group flex flex-row-reverse items-center gap-2 text-[var(--re-text)] hover:text-[var(--re-primary)] transition-colors"
            >
              <div className={`w-10 h-10 border border-[var(--re-primary)] bg-[var(--re-panel)] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_var(--re-primary)] transition-all ${showThemeMenu ? 'bg-[var(--re-primary)]' : ''}`}>
                <Monitor size={20} className={`${showThemeMenu ? 'text-[var(--re-bg)]' : 'text-[var(--re-primary)]'} animate-pulse-slow`} />
              </div>
              <span className="font-header text-xs tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase hidden md:block">
                Settings
              </span>
            </button>

          </div>
        </div>
      )}

      {/* --- LOADING SCREEN --- */}
      {loadingState !== 'loaded' && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-header select-none">
          {(loadingState === 'init' || loadingState === 'connecting') && (
            <div className={`transition-opacity duration-500 flex flex-col items-center justify-between h-full py-20 ${loadingState === 'connecting' ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 border-4 border-[#3d4035] rounded-full"></div>
                  <div className="absolute inset-0 border-t-4 border-[#90b348] rounded-full animate-spin"></div>
                </div>
                <h2 className="text-[#90b348] text-xl tracking-[0.2em] font-bold animate-pulse">LOADING...</h2>
              </div>
              <div className="w-full max-w-lg px-8 text-center border-t border-[#3d4035] pt-4">
                <p className="text-[#8c7b64] font-header tracking-wider text-sm uppercase">{currentTip}</p>
              </div>
            </div>
          )}

          {loadingState === 'chapter' && (
            <div className="animate-fade-in-up text-center">
              <div className="text-[#90b348] text-sm tracking-[0.5em] mb-2 uppercase font-bold">
                Current Objective
              </div>
              <h1 className="text-4xl md:text-6xl text-[#dcd0c0] font-bold tracking-tighter uppercase mb-4 text-shadow-glow">
                Chapter 3-1
              </h1>
              <div className="w-32 h-1 bg-[#90b348] mx-auto mb-4"></div>
              <h2 className="text-xl md:text-2xl text-[#8c7b64] tracking-widest uppercase font-header">
                Marshlands
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;