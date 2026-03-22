import React from 'react';

export default function AnimatedLogo({ isNav = false }: { isNav?: boolean }) {
  return (
    <div className={`hh-animated-logo group ${isNav ? 'is-nav' : ''}`}>
      <div className="hh-icon-wrap">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="hh-logo-svg">
          <path d="M14 12V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" pathLength="100" className="hh-draw hh-draw-1" />
          <path d="M14 24H24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" pathLength="100" className="hh-draw hh-draw-2" />
          <path d="M24 12V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" pathLength="100" className="hh-draw hh-draw-3" />
          <path d="M24 24H34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" pathLength="100" className="hh-draw hh-draw-4" />
          <path d="M34 12V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" pathLength="100" className="hh-draw hh-draw-5" />
          
          {/* Decorative dots */}
          <circle cx="14" cy="12" r="2" fill="currentColor" className="hh-dot hh-dot-1" />
          <circle cx="24" cy="12" r="2" fill="currentColor" className="hh-dot hh-dot-2" />
          <circle cx="34" cy="12" r="2" fill="currentColor" className="hh-dot hh-dot-3" />
          <circle cx="14" cy="36" r="2" fill="currentColor" className="hh-dot hh-dot-4" />
          <circle cx="24" cy="36" r="2" fill="currentColor" className="hh-dot hh-dot-5" />
          <circle cx="34" cy="36" r="2" fill="currentColor" className="hh-dot hh-dot-6" />
        </svg>
      </div>
      <div className="hh-text-wrap">
        <span className="hh-name">Synapse</span>
        <span className="hh-title">by Hunter Hennigar</span>
      </div>
    </div>
  );
}
