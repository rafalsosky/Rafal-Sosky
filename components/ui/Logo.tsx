
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'black' }) => {
  const imageUrl = variant === 'white' 
    ? "https://sosky.pl/images/Sosky-white.png"
    : "https://sosky.pl/images/Sosky-black.png";

  return (
    <img 
      src={imageUrl} 
      alt="SOSKY" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
