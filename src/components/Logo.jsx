import React from 'react';

const Logo = ({ className = "h-8", variant = "default" }) => {
  const colors = {
    default: {
      bg: "#2D5F3F",
      text: "#F5E6D3"
    },
    light: {
      bg: "#F5E6D3", 
      text: "#2D5F3F"
    },
    white: {
      bg: "white",
      text: "#2D5F3F"
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="40" height="40" rx="8" fill={currentColors.bg}/>
        <g fill={currentColors.text}>
          {/* Letter A */}
          <path d="M8 30V15.5L12 10h2.5l4 5.5V30h-2.5v-5H10.5v5H8zm2.5-7.5h5V19l-2.25-3h-0.5L10.5 19v3.5z"/>
          {/* Chess Bishop in center */}
          <path d="M18.5 10.5c0.6 0 1.2 0.25 1.7 0.75L22 13c0.4 0.4 0.6 0.9 0.6 1.4v6.8c0 0.8-0.25 1.5-0.8 2l-1.6 1.8h2.5v1.8h-6v-1.8h2.5l-1.6-1.8c-0.6-0.5-0.8-1.2-0.8-2v-6.8c0-0.5 0.25-1 0.6-1.4l2-1.75c0.5-0.5 1.1-0.75 1.7-0.75z"/>
          {/* Letter F */}  
          <path d="M26 30V10h8.5v2.5H28.5v5h5v2.5h-5V30H26z"/>
        </g>
      </svg>
      <div className="font-semibold text-lg tracking-wide">
        <span style={{ color: currentColors.text }}>AF Fabrics</span>
      </div>
    </div>
  );
};

export default Logo;