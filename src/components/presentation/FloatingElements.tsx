export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        >
          <div
            className="w-1 h-1 rounded-full bg-primary/30"
            style={{
              boxShadow: '0 0 20px 5px rgba(255, 140, 0, 0.2)',
            }}
          />
        </div>
      ))}
      
      {/* Glowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 140, 0, 0)" />
            <stop offset="50%" stopColor="rgba(255, 140, 0, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 140, 0, 0)" />
          </linearGradient>
        </defs>
        
        {/* Diagonal lines */}
        <line 
          x1="0" y1="30%" x2="100%" y2="70%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-line-1"
        />
        <line 
          x1="0" y1="60%" x2="100%" y2="20%" 
          stroke="url(#lineGradient)" 
          strokeWidth="0.5"
          className="animate-line-2"
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div 
          className="absolute top-8 left-8 w-32 h-[1px]"
          style={{ background: 'linear-gradient(90deg, rgba(255, 140, 0, 0.5), transparent)' }}
        />
        <div 
          className="absolute top-8 left-8 w-[1px] h-32"
          style={{ background: 'linear-gradient(180deg, rgba(255, 140, 0, 0.5), transparent)' }}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
        <div 
          className="absolute bottom-8 right-8 w-32 h-[1px]"
          style={{ background: 'linear-gradient(-90deg, rgba(255, 140, 0, 0.5), transparent)' }}
        />
        <div 
          className="absolute bottom-8 right-8 w-[1px] h-32"
          style={{ background: 'linear-gradient(0deg, rgba(255, 140, 0, 0.5), transparent)' }}
        />
      </div>
    </div>
  );
};
