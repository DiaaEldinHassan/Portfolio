import React from "react";

const ToolCard = ({ tool }) => {
 
  const getCategoryColor = (category) => {
    const colors = {
      "Runtime": "from-blue-500/20 to-cyan-500/20",
      "Framework": "from-green-500/20 to-emerald-500/20",
      "Database": "from-yellow-500/20 to-orange-500/20",
      "ODM": "from-purple-500/20 to-pink-500/20",
      "Authentication": "from-red-500/20 to-pink-500/20",
      "Security": "from-red-500/20 to-orange-500/20",
      "API": "from-indigo-500/20 to-purple-500/20",
      "Validation": "from-teal-500/20 to-green-500/20",
      "Configuration": "from-gray-500/20 to-slate-500/20",
      "Development": "from-cyan-500/20 to-blue-500/20",
      "Logging": "from-amber-500/20 to-yellow-500/20",
      "Process Manager": "from-fuchsia-500/20 to-purple-500/20",
      "Containerization": "from-blue-500/20 to-indigo-500/20",
      "Caching": "from-emerald-500/20 to-teal-500/20",
      "Backend-as-a-Service": "from-orange-500/20 to-red-500/20",
      "Real-time": "from-cyan-500/20 to-blue-500/20",
      "Documentation": "from-stone-500/20 to-gray-500/20",
      "Testing": "from-lime-500/20 to-green-500/20",
      "Editor": "from-blue-500/20 to-indigo-500/20",
      "Version Control": "from-orange-500/20 to-amber-500/20",
      "Design": "from-pink-500/20 to-rose-500/20",
      "Debugging": "from-red-500/20 to-rose-500/20",
      "API Testing": "from-violet-500/20 to-purple-500/20",
      "CLI": "from-slate-500/20 to-gray-500/20",
      "Package Manager": "from-amber-500/20 to-yellow-500/20",
      "Build Tool": "from-cyan-500/20 to-sky-500/20",
      "Linting": "from-emerald-500/20 to-green-500/20",
      "Formatting": "from-teal-500/20 to-cyan-500/20"
    };
    return colors[category] || "from-[#C4C4C4]/20 to-transparent";
  };

  const getIconColor = (category) => {
    const colors = {
      "Runtime": "text-blue-400",
      "Framework": "text-green-400",
      "Database": "text-yellow-400",
      "ODM": "text-purple-400",
      "Authentication": "text-red-400",
      "Security": "text-orange-400",
      "API": "text-indigo-400",
      "Validation": "text-teal-400",
      "Configuration": "text-gray-400",
      "Development": "text-cyan-400",
      "Logging": "text-amber-400",
      "Process Manager": "text-fuchsia-400",
      "Containerization": "text-blue-400",
      "Caching": "text-emerald-400",
      "Backend-as-a-Service": "text-orange-400",
      "Real-time": "text-cyan-400",
      "Documentation": "text-stone-400",
      "Testing": "text-lime-400",
      "Editor": "text-blue-400",
      "Version Control": "text-orange-400",
      "Design": "text-pink-400",
      "Debugging": "text-red-400",
      "API Testing": "text-violet-400",
      "CLI": "text-slate-400",
      "Package Manager": "text-amber-400",
      "Build Tool": "text-cyan-400",
      "Linting": "text-emerald-400",
      "Formatting": "text-teal-400"
    };
    return colors[category] || "text-[#C4C4C4]";
  };

  return (
    <div className="group bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-xl p-6 hover:border-[#C4C4C4] hover:shadow-lg hover:shadow-[#C4C4C4]/5 transition-all duration-300 relative overflow-hidden">
 
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tool.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10 flex items-start gap-4">
    
        <div className={`w-14 h-14 bg-gradient-to-br ${getCategoryColor(tool.category)} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <i className={`${tool.icon} text-2xl ${getIconColor(tool.category)} group-hover:text-[#C4C4C4] transition-colors`}></i>
        </div>
        
 
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <h3 className="text-lg font-semibold text-[#C4C4C4] group-hover:text-[#C4C4C4] transition-colors">
              {tool.name}
            </h3>
            <span className={`text-xs px-2 py-1 bg-[#C4C4C4]/10 rounded-full text-[#909090] border border-[#8B8B8B]/30 group-hover:border-[#C4C4C4]/30 group-hover:text-[#C4C4C4] transition-all duration-300`}>
              {tool.category}
            </span>
          </div>
          <p className="text-sm text-[#909090] leading-relaxed group-hover:text-[#C4C4C4]/80 transition-colors">
            {tool.description}
          </p>
        </div>
      </div>
      
     
      <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C4C4C4] to-transparent group-hover:w-full transition-all duration-300`}></div>
      
  
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#C4C4C4]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ToolCard;