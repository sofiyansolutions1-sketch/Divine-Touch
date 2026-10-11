import React from 'react';

interface LuxurySpaIllustrationProps {
  type: 'hero' | 'relaxation' | 'fullbody' | 'aromatherapy' | 'deeptissue' | 'headneck' | 'foot' | 'couple' | 'custom' | 'about';
  className?: string;
}

export const LuxurySpaIllustration: React.FC<LuxurySpaIllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c231e] via-[#071713] to-[#040c0a] ${className}`}>
          {/* Ambient Lighting Circles */}
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#c5a059]/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#163f34]/30 blur-2xl" />
          <div className="absolute top-1/3 left-10 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-xl" />

          {/* Luxury Vector Composition */}
          <svg className="w-full h-full object-cover opacity-90" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ecd599" />
                <stop offset="50%" stopColor="#c5a059" />
                <stop offset="100%" stopColor="#9e7d3b" />
              </linearGradient>
              <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#252b28" />
                <stop offset="100%" stopColor="#101413" />
              </linearGradient>
              <linearGradient id="emeraldDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d2720" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#05120e" stopOpacity="0.95" />
              </linearGradient>
              <radialGradient id="candleGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffecb3" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Arch & Architectural Lines */}
            <path d="M150 500 V220 C150 120 270 50 400 50 C530 50 650 120 650 220 V500" stroke="#c5a059" strokeOpacity="0.15" strokeWidth="1.5" />
            <path d="M180 500 V230 C180 145 280 80 400 80 C520 80 620 145 620 230 V500" stroke="#c5a059" strokeOpacity="0.08" strokeWidth="1" />

            {/* Zen Pedestal Table */}
            <path d="M120 440 C120 425 680 425 680 440 L650 500 H150 Z" fill="url(#stoneGrad)" stroke="#c5a059" strokeOpacity="0.2" />

            {/* River Balance Stones (Stacked Zen Cairn) */}
            <ellipse cx="280" cy="420" rx="75" ry="22" fill="url(#stoneGrad)" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.3" />
            <ellipse cx="280" cy="385" rx="58" ry="18" fill="#18201d" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.35" />
            <ellipse cx="280" cy="355" rx="42" ry="14" fill="#202925" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.4" />
            <ellipse cx="280" cy="330" rx="26" ry="10" fill="url(#stoneGrad)" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.45" />

            {/* Luxury Amber Essence Bottles */}
            <g transform="translate(390, 310)">
              {/* Bottle 1 */}
              <rect x="0" y="30" width="42" height="78" rx="6" fill="#3a2712" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.4" />
              <rect x="14" y="16" width="14" height="15" fill="#241808" stroke="#c5a059" strokeWidth="0.8" />
              <rect x="17" y="6" width="8" height="10" rx="4" fill="url(#goldGrad)" />
              {/* Bottle label */}
              <rect x="6" y="52" width="30" height="34" rx="2" fill="#faf7f0" fillOpacity="0.9" />
              <line x1="12" y1="62" x2="30" y2="62" stroke="#2b2319" strokeWidth="1.2" />
              <line x1="14" y1="70" x2="28" y2="70" stroke="#c5a059" strokeWidth="1" />

              {/* Bottle 2 (Taller amber glass) */}
              <rect x="52" y="18" width="48" height="90" rx="8" fill="#2d200f" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.3" />
              <rect x="68" y="6" width="16" height="13" fill="#1b1207" />
              <circle cx="76" cy="4" r="5" fill="url(#goldGrad)" />
              <rect x="58" y="44" width="36" height="40" rx="2" fill="#faf7f0" fillOpacity="0.85" />
              <line x1="66" y1="56" x2="86" y2="56" stroke="#2b2319" strokeWidth="1.2" />
              <line x1="68" y1="65" x2="84" y2="65" stroke="#c5a059" strokeWidth="1" />
            </g>

            {/* Warm Candle and Flame */}
            <g transform="translate(540, 340)">
              <circle cx="20" cy="-2" r="32" fill="url(#candleGlow)" />
              {/* Candle Body */}
              <rect x="0" y="15" width="40" height="65" rx="3" fill="#fdfbf7" stroke="#e0d6c3" strokeWidth="1" />
              <ellipse cx="20" cy="15" rx="20" ry="5" fill="#f5eee0" />
              {/* Wick & Flame */}
              <line x1="20" y1="15" x2="20" y2="6" stroke="#524739" strokeWidth="1.5" />
              <path d="M20 5 C23 0 25 -8 20 -15 C15 -8 17 0 20 5 Z" fill="url(#goldGrad)" />
              <circle cx="20" cy="-6" r="3" fill="#ffffff" />
            </g>

            {/* Frangipani / Jasmine Flower */}
            <g transform="translate(340, 395) scale(0.85)">
              <path d="M30 0 C40 -20 60 -15 65 0 C55 15 40 10 30 0 Z" fill="#fffcf5" stroke="#ecd599" strokeWidth="0.8" />
              <path d="M0 30 C-20 40 -15 60 0 65 C15 55 10 40 0 30 Z" fill="#fffcf5" stroke="#ecd599" strokeWidth="0.8" />
              <path d="M-30 0 C-40 -20 -60 -15 -65 0 C-55 15 -40 10 -30 0 Z" fill="#fffcf5" stroke="#ecd599" strokeWidth="0.8" />
              <path d="M0 -30 C20 -40 15 -60 0 -65 C-15 -55 -10 -40 0 -30 Z" fill="#fffcf5" stroke="#ecd599" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="10" fill="#f59e0b" fillOpacity="0.85" />
            </g>

            {/* Delicate Botanical Foliage */}
            <g stroke="#c5a059" strokeWidth="1.2" strokeOpacity="0.45" fill="none">
              <path d="M120 380 Q180 320 220 260" />
              <path d="M160 340 Q180 330 190 315" />
              <path d="M185 310 Q215 305 230 285" />
              <path d="M680 380 Q620 310 590 250" />
              <path d="M640 330 Q620 320 610 300" />
            </g>
          </svg>
        </div>
      );

    case 'relaxation':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c2620] to-[#061411] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[#c5a059]/5" />
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="relGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ecd599" />
                <stop offset="100%" stopColor="#9e7d3b" />
              </linearGradient>
            </defs>
            {/* Soft Ripple Circles */}
            <circle cx="150" cy="110" r="70" stroke="#c5a059" strokeOpacity="0.1" strokeWidth="1" />
            <circle cx="150" cy="110" r="50" stroke="#c5a059" strokeOpacity="0.18" strokeWidth="1.2" />
            <circle cx="150" cy="110" r="30" stroke="#c5a059" strokeOpacity="0.25" strokeWidth="1.4" />
            {/* Towel & Stones */}
            <rect x="70" y="125" width="160" height="24" rx="8" fill="#13352c" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="85" y="105" width="130" height="22" rx="7" fill="#194539" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.3" />
            {/* Stacked stone */}
            <ellipse cx="150" cy="95" rx="35" ry="11" fill="#202925" stroke="url(#relGrad)" strokeWidth="1" />
            <ellipse cx="150" cy="80" rx="24" ry="8" fill="#2c3631" stroke="url(#relGrad)" strokeWidth="0.8" />
            {/* Lotus Petal Glow */}
            <path d="M150 48 C160 62 155 74 150 78 C145 74 140 62 150 48 Z" fill="url(#relGrad)" />
            <path d="M140 55 C128 65 132 75 142 77 C144 72 144 64 140 55 Z" fill="#dfba73" fillOpacity="0.8" />
            <path d="M160 55 C172 65 168 75 158 77 C156 72 156 64 160 55 Z" fill="#dfba73" fillOpacity="0.8" />
          </svg>
        </div>
      );

    case 'fullbody':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0e2a23] to-[#071713] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bodyGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#b38a3d" />
              </linearGradient>
            </defs>
            {/* Symmetry & Wellness alignment axes */}
            <line x1="150" y1="20" x2="150" y2="180" stroke="#c5a059" strokeOpacity="0.2" strokeDasharray="3 3" />
            <circle cx="150" cy="50" r="14" fill="#18362d" stroke="url(#bodyGold)" strokeWidth="1.2" />
            {/* Basalt Stones on spine flow */}
            <ellipse cx="150" cy="85" rx="32" ry="12" fill="#1a2320" stroke="url(#bodyGold)" strokeWidth="1" />
            <ellipse cx="150" cy="115" rx="40" ry="14" fill="#17211e" stroke="url(#bodyGold)" strokeWidth="1.2" />
            <ellipse cx="150" cy="145" rx="34" ry="12" fill="#131c19" stroke="url(#bodyGold)" strokeWidth="1" />
            {/* Harmonic aura rings */}
            <circle cx="150" cy="115" r="58" stroke="#c5a059" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="150" cy="115" r="75" stroke="#c5a059" strokeOpacity="0.08" strokeWidth="0.8" />
            {/* Botanical sprigs */}
            <path d="M100 135 Q115 110 130 95" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M200 135 Q185 110 170 95" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
        </div>
      );

    case 'aromatherapy':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#102a24] to-[#071713] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aromaGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#9e7d3b" />
              </linearGradient>
            </defs>
            {/* Lavender / Herb sprigs */}
            <path d="M90 160 Q120 110 130 60" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="128" cy="65" r="3" fill="#c084fc" />
            <circle cx="122" cy="80" r="3.5" fill="#c084fc" />
            <circle cx="115" cy="95" r="3.5" fill="#c084fc" />
            <circle cx="108" cy="115" r="3" fill="#c084fc" />

            {/* Dropper Flask */}
            <rect x="135" y="85" width="45" height="70" rx="8" fill="#2d1c0a" stroke="url(#aromaGold)" strokeWidth="1.2" />
            <rect x="150" y="70" width="15" height="16" fill="#1c1106" stroke="url(#aromaGold)" strokeWidth="0.8" />
            <rect x="153" y="60" width="9" height="11" rx="4" fill="url(#aromaGold)" />
            {/* Droplet suspended */}
            <path d="M157 42 C161 46 163 50 157 54 C151 50 153 46 157 42 Z" fill="#eccb85" />
            {/* Fragrance Vapour Waves */}
            <path d="M185 85 Q205 65 195 45 Q185 25 210 15" stroke="url(#aromaGold)" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 2" />
            <path d="M200 100 Q220 80 215 60" stroke="url(#aromaGold)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
          </svg>
        </div>
      );

    case 'deeptissue':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c241d] to-[#05110e] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="deepGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#b38a3d" />
              </linearGradient>
            </defs>
            {/* Therapeutic Concentric Core */}
            <circle cx="150" cy="100" r="65" stroke="#c5a059" strokeOpacity="0.15" strokeWidth="1.5" />
            <circle cx="150" cy="100" r="45" stroke="#c5a059" strokeOpacity="0.25" strokeWidth="1.5" />
            <circle cx="150" cy="100" r="25" stroke="url(#deepGold)" strokeWidth="2" />
            <circle cx="150" cy="100" r="8" fill="url(#deepGold)" />
            {/* Herbal Potli compress */}
            <path d="M90 140 C80 120 100 90 115 110 C125 125 110 145 90 140 Z" fill="#2d281e" stroke="url(#deepGold)" strokeWidth="1" />
            <line x1="110" y1="102" x2="120" y2="90" stroke="url(#deepGold)" strokeWidth="1.5" />
            {/* Deep pressure vectors */}
            <path d="M150 40 V65" stroke="url(#deepGold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M150 160 V135" stroke="url(#deepGold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M90 100 H115" stroke="url(#deepGold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M210 100 H185" stroke="url(#deepGold)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'headneck':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0d2821] to-[#061410] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#9e7d3b" />
              </linearGradient>
            </defs>
            {/* Graceful Silhouette lines of neck & shoulders */}
            <path d="M70 170 C90 140 120 135 130 110 C132 95 130 70 150 50 C170 70 168 95 170 110 C180 135 210 140 230 170" stroke="url(#headGold)" strokeWidth="1.8" strokeLinecap="round" />
            {/* Acupressure nodes with calming halo */}
            <circle cx="150" cy="50" r="5" fill="url(#headGold)" />
            <circle cx="138" cy="85" r="4" fill="url(#headGold)" />
            <circle cx="162" cy="85" r="4" fill="url(#headGold)" />
            <circle cx="150" cy="110" r="5" fill="url(#headGold)" />
            <circle cx="120" cy="135" r="4.5" fill="url(#headGold)" />
            <circle cx="180" cy="135" r="4.5" fill="url(#headGold)" />
            {/* Soothing release wavelets */}
            <path d="M120 30 Q150 15 180 30" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M110 20 Q150 5 190 20" stroke="#c5a059" strokeWidth="0.8" strokeOpacity="0.25" />
          </svg>
        </div>
      );

    case 'foot':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0d251f] to-[#071612] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="footGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#b38a3d" />
              </linearGradient>
            </defs>
            {/* Herbal Warm Water Basin */}
            <ellipse cx="150" cy="130" rx="95" ry="32" fill="#132a22" stroke="url(#footGold)" strokeWidth="1.5" />
            <ellipse cx="150" cy="126" rx="80" ry="24" fill="#0d211b" stroke="#c5a059" strokeOpacity="0.3" strokeWidth="1" />
            {/* Floating flower blossoms & smooth pebbles in water */}
            <ellipse cx="115" cy="130" rx="14" ry="7" fill="#202925" stroke="url(#footGold)" strokeWidth="0.8" />
            <ellipse cx="180" cy="125" rx="12" ry="6" fill="#26312c" stroke="url(#footGold)" strokeWidth="0.8" />
            <circle cx="150" cy="122" r="9" fill="#faf7f0" stroke="#c5a059" strokeWidth="0.8" />
            <circle cx="150" cy="122" r="3" fill="#f59e0b" />
            {/* Steam ribbons ascending */}
            <path d="M130 95 Q125 75 135 60" stroke="url(#footGold)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            <path d="M170 95 Q175 75 165 60" stroke="url(#footGold)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            <path d="M150 90 Q145 70 155 50" stroke="url(#footGold)" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" />
          </svg>
        </div>
      );

    case 'couple':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c231d] to-[#061310] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="coupleGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#9e7d3b" />
              </linearGradient>
            </defs>
            {/* Intertwined harmony rings */}
            <circle cx="125" cy="100" r="50" stroke="url(#coupleGold)" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle cx="175" cy="100" r="50" stroke="url(#coupleGold)" strokeWidth="1.2" strokeOpacity="0.6" />
            {/* Twin Candles */}
            <rect x="110" y="85" width="22" height="45" rx="3" fill="#fcf9f2" stroke="#d5c8b2" strokeWidth="0.8" />
            <path d="M121 82 C123 78 124 72 121 68 C118 72 119 78 121 82 Z" fill="#f59e0b" />
            <rect x="168" y="85" width="22" height="45" rx="3" fill="#fcf9f2" stroke="#d5c8b2" strokeWidth="0.8" />
            <path d="M179 82 C181 78 182 72 179 68 C176 72 177 78 179 82 Z" fill="#f59e0b" />
            {/* Twin flower petals */}
            <circle cx="150" cy="140" r="7" fill="#faf7f0" stroke="url(#coupleGold)" strokeWidth="0.8" />
            <circle cx="150" cy="140" r="2.5" fill="#f59e0b" />
          </svg>
        </div>
      );

    case 'custom':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c2620] to-[#061410] flex items-center justify-center ${className}`}>
          <svg className="w-full h-full max-h-56 p-4" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="customGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3deaa" />
                <stop offset="100%" stopColor="#b38a3d" />
              </linearGradient>
            </defs>
            {/* Sacred Geometry Wellness Mandala */}
            <circle cx="150" cy="100" r="60" stroke="url(#customGold)" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="150" cy="100" r="42" stroke="url(#customGold)" strokeWidth="1" strokeOpacity="0.4" />
            <polygon points="150,55 185,120 115,120" stroke="url(#customGold)" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            <polygon points="150,145 185,80 115,80" stroke="url(#customGold)" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            <circle cx="150" cy="100" r="16" fill="#14342a" stroke="url(#customGold)" strokeWidth="1.2" />
            <circle cx="150" cy="100" r="5" fill="url(#customGold)" />
          </svg>
        </div>
      );

    case 'about':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f2e26] via-[#091b16] to-[#040e0b] border border-[#c5a059]/20 p-6 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
              <span className="text-xs tracking-widest uppercase text-[#c5a059] font-medium">Sanctuary of Tranquility</span>
            </div>
            <span className="text-xs text-[#a09e96]">Indore, MP</span>
          </div>

          <div className="my-8 flex justify-center items-center">
            <svg className="w-64 h-48" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="abtGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ecd599" />
                  <stop offset="100%" stopColor="#9e7d3b" />
                </linearGradient>
              </defs>
              {/* Arch Window */}
              <path d="M50 170 V90 C50 45 95 20 130 20 C165 20 210 45 210 90 V170" stroke="url(#abtGold)" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M70 170 V95 C70 58 105 38 130 38 C155 38 190 58 190 95 V170" stroke="url(#abtGold)" strokeWidth="0.8" strokeOpacity="0.2" />
              {/* Bamboo & Lantern */}
              <rect x="115" y="110" width="30" height="40" rx="3" fill="#faf7f0" stroke="url(#abtGold)" strokeWidth="1" />
              <circle cx="130" cy="130" r="8" fill="#f59e0b" fillOpacity="0.8" />
              {/* Teapot & Bowl */}
              <ellipse cx="170" cy="150" rx="14" ry="6" fill="#202925" stroke="url(#abtGold)" strokeWidth="0.8" />
              <ellipse cx="90" cy="150" rx="12" ry="5" fill="#202925" stroke="url(#abtGold)" strokeWidth="0.8" />
            </svg>
          </div>

          <div className="border-t border-[#c5a059]/15 pt-4 flex items-center justify-between text-xs text-[#cfcac0]">
            <span>Dedicated Outcall Service</span>
            <span className="text-[#c5a059] font-medium">+91 7389996090</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
