import React from "react";
import Stats from "./Stats";

const AboutText = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-2xl p-8 hover:border-[#C4C4C4] transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-[#C4C4C4]/20 to-transparent rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-code text-2xl text-[#C4C4C4]"></i>
          </div>
          <h2 className="text-2xl font-bold text-[#C4C4C4]">My Journey</h2>
        </div>
        
        <p className="text-[#909090] text-lg leading-relaxed">
          I'm a <span className="text-[#C4C4C4] font-semibold">ReactJS developer</span> with a strong focus on building scalable,
          maintainable, and well-designed web applications. I combine modern
          front-end technologies with best practices to create solutions that are
          both robust and user-friendly.
        </p>

        <Stats />
      </div>
    </div>
  );
};

export default AboutText;