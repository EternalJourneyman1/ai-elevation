import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Neural network-inspired background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDMwNDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Animated gradients */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-[0.15] animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-[0.15] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-[0.15] animate-blob animation-delay-4000"></div>
      
      {/* Simulated network nodes and connections */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.15)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </radialGradient>
          </defs>
          
          {/* Neural network nodes - static positions but appear animated due to pulsing */}
          <circle cx="20" cy="30" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <circle cx="40" cy="70" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="65" cy="20" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="80" cy="85" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="10" cy="85" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="90" cy="40" r="1.5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          
          {/* Neural network connections */}
          <line x1="20" y1="30" x2="40" y2="70" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
          <line x1="40" y1="70" x2="65" y2="20" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
          <line x1="65" y1="20" x2="80" y2="85" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
          <line x1="80" y1="85" x2="10" y2="85" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
          <line x1="10" y1="85" x2="90" y2="40" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
          <line x1="90" y1="40" x2="20" y2="30" stroke="rgba(56, 189, 248, 0.07)" strokeWidth="0.3" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundAnimation;