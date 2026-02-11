import React from 'react';
import { Target, Heart, Shield, MoveUp, MoveDown, MoveLeft, MoveRight, Radio, Leaf, SprayCan, Egg, AlertTriangle } from 'lucide-react';

const Document: React.FC = () => {
  return (
    <div className="w-full max-w-7xl relative flex flex-col lg:flex-row gap-12 items-start justify-center group">
      
      {/* --- LEFT COLUMN: RE5 LIVE INVENTORY (Iconic 3x3 Grid) --- */}
      <div className="hidden lg:block w-72 pt-16 sticky top-12 z-30">
        <div className="transform scale-110 origin-top-left">
           <InventoryGrid />
        </div>
        
        {/* Partner HUD - Positioned below inventory like in split-screen/solo */}
        <div className="mt-12 pl-2">
           <HealthGauge name="ARANXITA" state="FINE" />
           
           {/* RE5 AI Command HUD */}
           <div className="mt-4 flex items-center gap-2 opacity-80">
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full border border-[var(--re-primary)] bg-[var(--re-primary)] shadow-[0_0_5px_var(--re-primary)]"></div>
                    <span className="text-[var(--re-primary)] font-header font-bold text-xs tracking-wider">COVER</span>
                 </div>
                 <div className="flex items-center gap-1 opacity-50">
                    <div className="w-4 h-4 rounded-full border border-[var(--re-text)]"></div>
                    <span className="text-[var(--re-text)] font-header font-bold text-xs tracking-wider">ATTACK</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- CENTER: THE FILE --- */}
      <div className="flex-1 w-full max-w-3xl relative">
        
        {/* Mobile HUD Overlay (Top fixed for mobile) */}
        <div className="lg:hidden mb-8 flex justify-between items-end w-full px-2 border-b border-[var(--re-primary)]/50 pb-2">
           <HealthGauge name="ARANXITA" state="FINE" />
           <div className="flex flex-col items-end">
             <div className="text-[var(--re-primary)] font-header font-bold text-3xl tracking-tighter leading-none">
               9999999
             </div>
             <div className="text-[var(--re-secondary)] font-header text-[10px] tracking-widest uppercase">
               Exchange Pts
             </div>
           </div>
        </div>

        {/* --- RE5 MENU HEADER --- */}
        <div className="flex justify-between items-end border-b-4 border-[var(--re-primary)] pb-1 mb-0 select-none bg-gradient-to-r from-[var(--re-bg)]/90 to-transparent p-4 rounded-t-sm">
          <div className="flex flex-col">
             <div className="text-[var(--re-primary)] font-header text-sm tracking-[0.2em] font-bold mb-0 opacity-100 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(var(--re-primary),0.8)]">
               <Shield size={16} className="fill-[var(--re-primary)] text-[var(--re-primary)]" />
               BSAA WEST AFRICA BRANCH
             </div>
             <h1 className="text-4xl md:text-5xl font-header font-bold text-[var(--re-text)] uppercase tracking-tighter drop-shadow-lg transform scale-y-110 origin-left">
               FILES <span className="text-[var(--re-primary)] text-2xl align-middle">///</span> LIBRARY
             </h1>
          </div>
          {/* File Number Indicator */}
          <div className="hidden md:block">
            <div className="bg-[var(--re-primary)] text-[var(--re-bg)] font-header font-bold px-3 py-1 text-xl transform -skew-x-12 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              No. 12
            </div>
          </div>
        </div>

        {/* --- DOCUMENT CONTAINER (The "Read" Screen) --- */}
        <div className="relative bg-[#101010] border-x border-b border-[#3d4035]">
          
          {/* Top Info Bar */}
          <div className="bg-[var(--re-panel)] border-b border-[#3d4035] p-3 flex justify-between items-center">
             <span className="text-[var(--re-secondary)] font-header text-xs tracking-widest uppercase flex items-center gap-1">
                <Shield size={10} /> Authorized: C. Redfield
             </span>
             <span className="text-[var(--re-secondary)] font-header text-xs tracking-widest uppercase">Kijuju Autonomous Zone</span>
          </div>

          {/* Paper Content */}
          <div className="relative bg-[#c9c0b1] p-8 md:p-14 min-h-[550px] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-700">
            
            {/* Texture Overlays */}
            <div className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            {/* Dynamic Vignette inside paper based on theme */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_20%,_var(--re-secondary)_120%)]"></div>

            {/* Tricell Watermark (Very Subtle) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-[0.03] pointer-events-none">
                <h1 className="text-9xl font-header font-bold text-black uppercase tracking-widest whitespace-nowrap">TRICELL</h1>
            </div>

            {/* LETTER HEADER */}
            <div className="relative z-10 border-b-2 border-[#5c5040] pb-6 mb-8 flex justify-between items-center">
               <div>
                  <div className="text-[#800000] font-bold tracking-[0.2em] text-xs uppercase mb-1 font-header flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#800000]"></div> Confidential
                  </div>
                  <h2 className="font-header font-bold text-4xl text-[#1a1814] uppercase tracking-tighter scale-y-110 origin-left">
                    RE: ARANXITA
                  </h2>
               </div>
               {/* Stamp */}
               <div className="opacity-70 rotate-[-12deg] border-[3px] border-[#800000] p-2 mix-blend-multiply">
                  <span className="block text-[#800000] font-header font-bold text-sm uppercase px-1 tracking-widest">PROJECT UROBOROS // PENDING</span>
               </div>
            </div>

            {/* LETTER BODY */}
            <div className="relative z-10 font-body text-xl md:text-2xl leading-relaxed text-[#1a1814] space-y-8 font-medium">
              <p>
                No hay entrenamiento que prepare para esto. He entrado en <strong className="text-[#800000]">zonas infestadas</strong>, he aprendido a medir cada paso, a no desperdiciar recursos… y aun así, contigo entendí que hay riesgos que valen la pena.
              </p>

              <p>
                En medio del polvo y el ruido, cuando todo parece perder sentido, eres la única <strong className="text-[#800000] border-b-2 border-[#800000]/30">zona segura</strong> que reconozco. No necesito mapas cuando estás cerca; sé exactamente dónde quedarme.
              </p>

              <p>
                Si esto fuera una <span className="bg-[#1a1814] text-[#c9c0b1] px-1 font-bold shadow-md">misión oficial</span>, dirían que es imprudente involucrarse emocionalmente. Yo diría que es inevitable. Algo en ti desarma mis defensas, pero no me debilita: me mantiene en pie.
              </p>

              <div className="relative pl-6 py-4 border-l-4 border-[#3d4035] bg-[#3d4035]/10 my-10">
                 <p className="italic text-[#2b2621] font-bold text-xl">
                   "Aranxita, si el mundo se vuelve hostil, si todo se infecta de miedo, quiero que sepas esto: elegiría estar a tu lado incluso sin munición, incluso sin salida clara."
                 </p>
              </div>

              <p>
                No prometo finales limpios ni caminos fáciles. Prometo avanzar contigo, cubrirte la espalda y no soltar la linterna cuando la oscuridad aprieta.
              </p>

              <div className="flex justify-between items-end border-t border-[#5c5040] pt-6 mt-12">
                 <p className="font-bold text-[#2b2621] uppercase tracking-widest text-base">
                   — Tu compañero (Alpha Team)
                 </p>
                 {/* Wesker Easter Egg */}
                 <div className="hidden md:block opacity-40 font-header text-[10px] tracking-widest text-[#800000] rotate-1">
                    "7 MINUTES IS ALL I CAN SPARE TO PLAY WITH YOU"
                 </div>
              </div>

              {/* UMBRELLA CORPORATION REFERENCE (Easter Egg) */}
              <div className="mt-12 flex flex-col items-center opacity-60 mix-blend-multiply select-none grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-4 border-t border-b border-black py-2 w-full justify-center">
                      {/* CSS UMBRELLA LOGO */}
                      <div 
                        className="w-12 h-12 rounded-full shadow-sm"
                        style={{
                            background: `conic-gradient(
                                #be0000 0% 12.5%,
                                #e6dec8 12.5% 25%,
                                #be0000 25% 37.5%,
                                #e6dec8 37.5% 50%,
                                #be0000 50% 62.5%,
                                #e6dec8 62.5% 75%,
                                #be0000 75% 87.5%,
                                #e6dec8 87.5% 100%
                            )`
                        }}
                      ></div>
                      <div className="flex flex-col">
                          <h3 className="font-header font-bold text-xl tracking-[0.2em] text-[#1a1814]">UMBRELLA</h3>
                          <span className="font-header text-[9px] tracking-[0.3em] uppercase text-[#1a1814]">Pharmaceuticals Inc.</span>
                      </div>
                  </div>
                  <div className="text-[9px] font-header tracking-widest mt-1 uppercase">
                      Legacy Data Archive // Seized 2003
                  </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator (Visual Only) */}
          <div className="absolute right-1 top-12 bottom-12 w-1 bg-[var(--re-panel)] rounded-full overflow-hidden">
             <div className="w-full h-1/4 bg-[var(--re-primary)] rounded-full opacity-80"></div>
          </div>
        </div>

        {/* --- FOOTER UI (Button Prompts - XBOX 360 Style) --- */}
        <div className="mt-4 flex flex-wrap justify-between items-center font-header text-base text-[var(--re-text)] select-none pl-2">
           <div className="flex gap-8">
              {/* A BUTTON (Green) - Confirm/Back */}
              <div className="flex items-center gap-2 group cursor-pointer hover:brightness-125 transition-all drop-shadow-md">
                 <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#7bdd35] to-[#3a8510] shadow-[0_2px_0px_#1e4208] flex items-center justify-center border border-[#aaff80] text-[#1e4208] font-black text-sm">
                   A
                 </div>
                 <span className="text-[var(--re-text)] font-bold tracking-wide text-shadow-sm uppercase">Back</span>
              </div>

              {/* X BUTTON (Blue) - Zoom/Context */}
              <div className="flex items-center gap-2 drop-shadow-md opacity-90">
                 <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#35aadd] to-[#104885] shadow-[0_2px_0px_#081e42] flex items-center justify-center border border-[#80d4ff] text-[#081e42] font-black text-sm">
                   X
                 </div>
                 <span className="text-[var(--re-text)] font-bold tracking-wide text-shadow-sm uppercase">Zoom</span>
              </div>
              
              {/* B BUTTON (Red) - Cancel */}
              <div className="flex items-center gap-2 opacity-50 drop-shadow-md">
                 <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#dd3535] to-[#851010] shadow-[0_2px_0px_#420808] flex items-center justify-center border border-[#ff8080] text-[#420808] font-black text-sm">
                   B
                 </div>
                 <span className="text-[var(--re-text)] font-bold tracking-wide text-shadow-sm uppercase">Cancel</span>
              </div>
           </div>

           <div className="flex items-center gap-2 mt-4 md:mt-0 text-[var(--re-text)]">
              <Radio size={20} className="animate-spin-slow text-[var(--re-primary)]" />
              <span className="tracking-widest text-xs font-bold uppercase">Saving...</span>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- RE5 UI COMPONENTS ---

const HealthGauge = ({ name, state }: { name: string; state: string }) => (
  <div className="flex items-end gap-3 select-none">
    {/* The Iconic Circle Gauge */}
    <div className="relative w-20 h-20">
       {/* Background Arc (Black) */}
       <div className="absolute inset-0 rounded-full border-[6px] border-[#0a0a08] opacity-80"></div>
       
       {/* Health Arc (Green Neon) - CSS Trick for 75% circle */}
       <div className="absolute inset-0 rounded-full border-[6px] border-[var(--re-primary)] border-l-transparent transform -rotate-45 drop-shadow-[0_0_8px_var(--re-primary)] transition-colors duration-700"></div>
       
       {/* Inner Dark Circle */}
       <div className="absolute inset-2 rounded-full bg-[#0a0a08]/80 backdrop-blur-md flex items-center justify-center border border-[#3d4035]">
          {/* Partner Icon / Face Placeholder */}
          <div className="opacity-80">
            <Target size={32} className="text-[#3d4035]" />
          </div>
       </div>
    </div>
    
    {/* Name and State */}
    <div className="flex flex-col mb-2">
       <div className="font-header font-bold text-[var(--re-text)] tracking-wider text-lg leading-none mb-0 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] uppercase transform scale-y-110 origin-left">
         {name}
       </div>
       <div className="font-header font-bold text-[var(--re-primary)] text-3xl leading-none tracking-tighter drop-shadow-[0_0_5px_var(--re-primary)] uppercase italic transform -skew-x-12 transition-colors duration-700">
         {state}
       </div>
    </div>
  </div>
);

const InventoryGrid = () => (
  <div className="relative">
      <div className="bg-[var(--re-panel)]/60 p-1 border border-[#6b7557] backdrop-blur-md shadow-2xl rounded-sm">
        {/* Header 'Organize' */}
        <div className="flex justify-between items-center mb-1 px-1 border-b border-[#6b7557]/50 pb-1">
           <span className="text-[var(--re-primary)] font-header text-xs tracking-[0.2em] font-bold uppercase shadow-black drop-shadow-md">Item Management</span>
           <span className="text-[var(--re-text)] font-header text-xs tracking-widest">9/9</span>
        </div>
        
        {/* 3x3 Grid with SPECIFIC RE5 ITEMS */}
        <div className="grid grid-cols-3 gap-1 w-full aspect-square">
          {[...Array(9)].map((_, i) => {
            // Determine if this slot is a D-Pad shortcut
            let DPadIcon = null;
            if (i === 1) DPadIcon = <MoveUp size={14} className="text-[var(--re-primary)] drop-shadow-[0_0_2px_#000]" />;
            if (i === 3) DPadIcon = <MoveLeft size={14} className="text-[var(--re-primary)] drop-shadow-[0_0_2px_#000]" />;
            if (i === 5) DPadIcon = <MoveRight size={14} className="text-[var(--re-primary)] drop-shadow-[0_0_2px_#000]" />;
            if (i === 7) DPadIcon = <MoveDown size={14} className="text-[var(--re-primary)] drop-shadow-[0_0_2px_#000]" />;
            
            // Item Logic
            const isCenter = i === 4;
            const isHerb = i === 0; // Green Herb Slot 1
            const isSpray = i === 2; // Spray Slot 3
            const isRottenEgg = i === 6; // Rotten Egg (The joke item)
            const isGoldEgg = i === 8; // Gold Egg (Money!)

            return (
              <div 
                key={i} 
                className={`
                  relative flex items-center justify-center overflow-hidden transition-all duration-300
                  ${isCenter 
                    ? 'bg-[var(--re-primary)]/20 border-2 border-[var(--re-primary)] shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]' 
                    : 'bg-black/40 border border-[#3d4035]'
                  }
                `}
              >
                 {/* D-Pad Shortcut Indicator */}
                 {DPadIcon && (
                   <div className="absolute top-0.5 left-0.5 opacity-80 z-20">
                     {DPadIcon}
                   </div>
                 )}

                 {/* Center Item (The Letter Heart) */}
                 {isCenter && (
                   <div className="relative z-10 animate-pulse-slow">
                      <Heart size={36} className="text-[var(--re-text)] fill-[#800000] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" />
                   </div>
                 )}

                 {/* GREEN HERB */}
                 {isHerb && (
                    <div className="flex flex-col items-center">
                        <Leaf size={28} className="text-[#5cbf2a] fill-[#5cbf2a] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                        <span className="text-[8px] font-header text-[#5cbf2a] leading-none mt-1">x1</span>
                    </div>
                 )}

                 {/* FIRST AID SPRAY */}
                 {isSpray && (
                    <SprayCan size={28} className="text-[#dcd0c0] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                 )}

                 {/* ROTTEN EGG (Brown) */}
                 {isRottenEgg && (
                     <div className="relative">
                        <Egg size={24} className="text-[#5c5040] fill-[#5c5040] rotate-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AlertTriangle size={10} className="text-yellow-600" />
                        </div>
                     </div>
                 )}

                 {/* GOLD EGG */}
                 {isGoldEgg && (
                    <Egg size={24} className="text-[#ffd700] fill-[#ffd700] drop-shadow-[0_0_5px_rgba(255,215,0,0.6)]" />
                 )}

                 {/* Empty Slots */}
                 {!isCenter && !isHerb && !isSpray && !isRottenEgg && !isGoldEgg && (
                   <div className="w-full h-full bg-[#1a1814]/30"></div>
                 )}
              </div>
            );
          })}
        </div>
        
        {/* Item Description Box */}
        <div className="mt-1 bg-[var(--re-panel)]/80 border border-[#6b7557] p-2 min-h-[60px]">
           <div className="text-[var(--re-primary)] font-header text-sm tracking-widest uppercase font-bold mb-1 flex justify-between">
             <span>Confidential Letter</span>
             <span className="text-[var(--re-text)] text-[10px] bg-[#3d4035] px-1">KEY ITEM</span>
           </div>
           <div className="text-[var(--re-secondary)] font-header text-[10px] uppercase leading-tight">
             A document retrieved from the Kijuju Autonomous Zone. Emotional value exceeds mission parameters.
           </div>
        </div>
      </div>
      
      {/* Decorative Lines connecting inventory to nothing (Tech feel) */}
      <div className="absolute -right-4 top-10 w-4 h-[1px] bg-[var(--re-primary)] opacity-50"></div>
      <div className="absolute -left-4 bottom-20 w-4 h-[1px] bg-[var(--re-primary)] opacity-50"></div>
  </div>
);

export default Document;