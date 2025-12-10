
import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'black';
  icon?: boolean;
  shine?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  shine = false,
  loading = false,
  className = '', 
  disabled,
  ...props 
}) => {
  // Base styles: Added font-heading for brand consistency.
  // High contrast borders and sharp interactions designed for "clickiness".
  const baseStyles = "relative font-heading inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wide uppercase border-2 border-black transition-all duration-200 active:translate-y-1 active:shadow-none overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:active:shadow-[4px_4px_0px_0px_#000]";
  
  const variants = {
    // Primary (Yellow): Best for "Low Friction" offers on white backgrounds (e.g. "Get the Map")
    primary: "bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300",
    
    // Black: The "Premium/High Commitment" Action. Best for "Book a Call".
    black: "bg-black text-white shadow-[4px_4px_0px_0px_#FACC15] hover:bg-neutral-900 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#FACC15]",
    
    // Outline: Secondary actions.
    outline: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      disabled={disabled || loading}
      {...props}
    >
      {/* Shine Effect Overlay for extra attention (disabled during loading) */}
      {shine && !loading && (
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      )}

      <span className="relative z-10 flex items-center">
        {loading && <Loader2 className="w-5 h-5 mr-3 animate-spin" />}
        {children}
        {!loading && icon && (
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </button>
  );
};

export default Button;
