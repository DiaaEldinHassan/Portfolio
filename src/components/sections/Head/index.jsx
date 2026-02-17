import React from "react";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import Avatar from "./Avatar";

const Head = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden w-full pt-20" id="head">

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#C4C4C4] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#8B8B8B] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <HeroContent />
            <Avatar />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Head;