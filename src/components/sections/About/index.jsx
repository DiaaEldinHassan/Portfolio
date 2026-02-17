import React from "react";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import AboutText from "./AboutText";
import CodeBlock from "./CodeBlock";

const About = () => {
  return (
    <div className="w-full bg-[#1a1a1a] py-20 md:py-24 lg:py-28" id="about">
      <Container>
        <SectionHeader 
          icon="👋"
          highlight="Get to Know Me"
          title="About"
          subtitle="Me"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          <AboutText />
          <CodeBlock />
        </div>
      </Container>
    </div>
  );
};

export default About;