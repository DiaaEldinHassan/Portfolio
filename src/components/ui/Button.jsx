import React from "react";

const Button = ({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 sm:px-8 py-3 font-semibold rounded-full transform hover:scale-105 transition-all duration-300 text-sm sm:text-base";
  
  const variants = {
    primary: "bg-[#C4C4C4] text-[#1a1a1a] hover:bg-[#8B8B8B] shadow-lg hover:shadow-[#C4C4C4]/20",
    secondary: "border-2 border-[#8B8B8B] text-[#C4C4C4] hover:border-[#C4C4C4] hover:bg-[#C4C4C4]/10"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;