import React from "react";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import SkillsGrid from "./SkillsGrid";
import TechStack from "./TechStack";

const Skills = () => {
  return (
    <div className="w-full bg-[#1a1a1a] py-20 md:py-24 lg:py-28" id="skills">
      <Container>
        <SectionHeader 
          icon="⚡"
          highlight="What I Do"
          title="My"
          subtitle="Skills & Expertise"
        />
        
        <div className="mt-12">
          <SkillsGrid />
        </div>
        
        <div className="mt-20">
          <TechStack />
        </div>
      </Container>
    </div>
  );
};

export default Skills;