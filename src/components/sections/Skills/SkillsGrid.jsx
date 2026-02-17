import React from "react";
import { skills } from "../../../data/skills";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;