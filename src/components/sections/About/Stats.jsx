import React from "react";

const Stats = () => {
  const stats = [
    { value: "1+", label: "Years Exp" },
    { value: "20+", label: "Projects" },
    { value: "∞", label: "Passion" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-[#C4C4C4]">{stat.value}</div>
          <div className="text-xs text-[#909090]">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;