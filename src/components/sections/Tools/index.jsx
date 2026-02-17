import React from "react";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import ToolsGrid from "./ToolsGrid";
import { backendStack, tools } from "../../../data/tools.js";

const Tools = () => {
  return (
    <div className="w-full bg-[#1a1a1a] py-20 md:py-24 lg:py-28" id="tools">
      <Container>
        <SectionHeader 
          icon="🛠️"
          highlight="Tools I Use"
          title="Development"
          subtitle="Tools & Environment"
        />
        
        <div className="mt-12">
          <ToolsGrid />
        </div>

        {/* Backend Stack Highlight */}
        <div className="mt-16 p-6 bg-gradient-to-br from-[#C4C4C4]/5 to-transparent border border-[#8B8B8B]/30 rounded-xl">
          <h3 className="text-xl font-bold text-[#C4C4C4] mb-4 flex items-center gap-2">
            <i className="fa-solid fa-server text-[#C4C4C4]"></i>
            Backend Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {backendStack.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-lg text-[#909090] hover:border-[#C4C4C4] hover:text-[#C4C4C4] hover:-translate-y-1 transition-all duration-300 cursor-default text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-[#C4C4C4]/5 rounded-xl border border-[#8B8B8B]/30">
            <div className="text-2xl font-bold text-[#C4C4C4] mb-1">{tools.length}+</div>
            <div className="text-xs text-[#909090]">Total Tools</div>
          </div>
          <div className="text-center p-4 bg-[#C4C4C4]/5 rounded-xl border border-[#8B8B8B]/30">
            <div className="text-2xl font-bold text-[#C4C4C4] mb-1">
              {tools.filter(t => ["Runtime", "Framework", "Database", "ODM", "Authentication", "Security", "API", "Validation"].includes(t.category)).length}+
            </div>
            <div className="text-xs text-[#909090]">Backend Tools</div>
          </div>
          <div className="text-center p-4 bg-[#C4C4C4]/5 rounded-xl border border-[#8B8B8B]/30">
            <div className="text-2xl font-bold text-[#C4C4C4] mb-1">
              {tools.filter(t => ["Database", "ODM"].includes(t.category)).length}+
            </div>
            <div className="text-xs text-[#909090]">Database Tools</div>
          </div>
          <div className="text-center p-4 bg-[#C4C4C4]/5 rounded-xl border border-[#8B8B8B]/30">
            <div className="text-2xl font-bold text-[#C4C4C4] mb-1">
              {tools.filter(t => ["Authentication", "Security", "Validation"].includes(t.category)).length}+
            </div>
            <div className="text-xs text-[#909090]">Security Tools</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;