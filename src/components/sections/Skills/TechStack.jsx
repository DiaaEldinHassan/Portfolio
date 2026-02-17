import React from "react";
import { techStack } from "../../../data/skills";

const TechStack = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-[#C4C4C4] text-center mb-8">
        Technologies I Work With
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-[#C4C4C4]/5 border border-[#8B8B8B]/30 rounded-lg text-[#909090] hover:border-[#C4C4C4] hover:text-[#C4C4C4] hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;