import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C4C4C4]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-2xl p-8 hover:border-[#C4C4C4] transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <i className={`${skill.icon} text-2xl ${skill.iconColor} group-hover:text-[#C4C4C4] transition-colors`}></i>
          </div>
          <h3 className="text-2xl font-bold text-[#C4C4C4]">{skill.title}</h3>
        </div>

        <p className="text-[#909090] leading-relaxed mb-6 flex-grow">
          {skill.description}
        </p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[#C4C4C4] uppercase tracking-wider">
            Key Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {skill.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-[#C4C4C4]/5 border border-[#8B8B8B]/30 rounded-full text-[#909090] group-hover:border-[#C4C4C4]/30 group-hover:text-[#C4C4C4] transition-all duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;