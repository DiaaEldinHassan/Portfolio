import React, { useState } from "react";
import ToolCard from "./ToolCard";
import { tools, toolCategories } from "../../../data/tools";

const ToolsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">

      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
    
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-lg text-[#C4C4C4] placeholder-[#909090] focus:outline-none focus:border-[#C4C4C4] transition-colors"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-[#909090] text-sm"></i>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
          {toolCategories.slice(0, 8).map((category) => ( // Show first 8 categories, rest in dropdown
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-[#C4C4C4] text-[#1a1a1a]'
                  : 'bg-[#C4C4C4]/5 text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/10 border border-[#8B8B8B]/30'
              }`}
            >
              {category}
            </button>
          ))}
          
          {/* More Categories Dropdown */}
          <select
            onChange={(e) => setActiveCategory(e.target.value)}
            value={activeCategory}
            className="px-4 py-2 bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-full text-[#909090] text-sm focus:outline-none focus:border-[#C4C4C4]"
          >
            {toolCategories.slice(8).map((category) => (
              <option key={category} value={category} className="bg-[#1a1a1a]">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <i className="fa-solid fa-screwdriver-wrench text-4xl text-[#909090] mb-4"></i>
          <p className="text-[#909090] text-lg">No tools found matching your criteria.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="mt-4 px-6 py-2 bg-[#C4C4C4]/10 text-[#C4C4C4] rounded-full hover:bg-[#C4C4C4]/20 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Tools Count */}
      <div className="mt-6 text-center text-sm text-[#909090]">
        Showing {filteredTools.length} of {tools.length} tools
      </div>
    </div>
  );
};

export default ToolsGrid;