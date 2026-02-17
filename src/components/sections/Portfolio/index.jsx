import React from "react";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import ProjectsGrid from "./ProjectsGrid";

const Portfolio = () => {
  return (
    <div className="w-full bg-[#1a1a1a] py-20 md:py-24 lg:py-28" id="portfolio">
      <Container>
        <SectionHeader 
          icon="🚀"
          highlight="My Work"
          title="Featured"
          subtitle="Projects"
        />
        
        <div className="mt-12">
          <ProjectsGrid />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;