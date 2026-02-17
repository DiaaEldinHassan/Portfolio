import React from "react";
import Button from "../../ui/Button";

const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-[2px] bg-[#C4C4C4]"></div>
        <span className="text-[#909090] text-sm uppercase tracking-[3px] font-light">
          Hi, I'm
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#C4C4C4] leading-tight">
        Diaa
        <br />
        Hassan
      </h1>

      <div className="space-y-3">
        <h5 className="text-xl sm:text-2xl lg:text-3xl text-[#C4C4C4] font-['VT323'] tracking-wide">
          React.js Developer
        </h5>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#C4C4C4] to-transparent rounded-full"></div>
      </div>

      <p className="text-[#909090] text-base sm:text-lg leading-relaxed max-w-lg">
        Crafting elegant and performant web experiences with modern JavaScript. 
        Passionate about building responsive and user-friendly applications.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="#portfolio" variant="primary">
          View My Work
        </Button>
        <Button href="#contact" variant="secondary">
          Let's Talk
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/DiaaEldinHassan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-[#C4C4C4]/10 rounded-lg text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/20 transform hover:scale-110 transition-all duration-300"
        >
          <i className="fa-brands fa-github text-lg sm:text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/diaa-eldin-hassan-989702280/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-[#C4C4C4]/10 rounded-lg text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/20 transform hover:scale-110 transition-all duration-300"
        >
          <i className="fa-brands fa-linkedin-in text-lg sm:text-xl"></i>
        </a>
        <a
          href="mailto:diaahassan777@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-[#C4C4C4]/10 rounded-lg text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/20 transform hover:scale-110 transition-all duration-300"
        >
          <i className="fa-regular fa-envelope text-lg sm:text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;