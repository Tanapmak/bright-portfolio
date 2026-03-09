import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="py-20 mx-10 bg-white">
      <div className="max-w-5xl mx-auto py6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl ">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 md:mb-5 flex items-center gap-2">
              <span className="w-6 md:w-8 h-0.5 bg-gray-300"></span>
              Experience
            </h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              Work &<span className="text-gray-400  font-bold"> Impact</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}

export default Experience;
