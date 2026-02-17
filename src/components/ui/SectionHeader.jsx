import React from "react";

const SectionHeader = ({ 
  title, 
  subtitle, 
  highlight,
  icon 
}) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {icon && (
        <div className="inline-flex items-center gap-3 bg-[#C4C4C4]/10 px-6 py-2 rounded-full border border-[#8B8B8B]/30 mb-6">
          <span className="text-[#C4C4C4]">{icon}</span>
          <span className="text-[#C4C4C4] font-medium">{highlight}</span>
        </div>
      )}
      
      <h2 className="text-4xl sm:text-5xl font-bold text-[#C4C4C4] mb-4">
        {title}
        {subtitle && <span className="block text-[#8B8B8B] mt-2">{subtitle}</span>}
      </h2>
      
      <div className="w-24 h-1 bg-gradient-to-r from-[#C4C4C4] to-transparent mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeader;