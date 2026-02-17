
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false);
  
  const emojis = ["🌿", "📝", "🌦️", "🛒"];
  
  const handleImageError = () => {
    setImageFailed(true);
  };

  return (
    <div className="group bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-2xl overflow-hidden hover:border-[#C4C4C4] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-[#1a1a1a]">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#C4C4C4]/10 to-transparent flex items-center justify-center">
            <span className="text-6xl opacity-30">{emojis[Math.floor(Math.random() * emojis.length)]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#C4C4C4] mb-3 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-[#909090] text-sm sm:text-base mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-[#C4C4C4]/5 border border-[#8B8B8B]/30 rounded-full text-[#909090]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-[#C4C4C4]/5 border border-[#8B8B8B]/30 rounded-full text-[#909090]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#8B8B8B] text-[#C4C4C4] text-sm font-medium rounded-lg hover:bg-[#C4C4C4] hover:text-[#1a1a1a] transition-all duration-300"
        >
          View Project
          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;