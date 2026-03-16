import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {

  const experiences = [{
    id: 1,
    duration: "May 2023 - Present",
    location: "Bangkok",
    company: "TCL Electronics (Thailand)",
    position: "E-Commerce Manager",
    jd: ["Manage and mentor a new business team of 27 members, overseeing 9 online stores across TikTok, Lazada, and Shopee",
      "Designed and implemented an automated Google Apps Script solution, reducing reporting time by 80%", 
      "Creating Schedu-le platform for livestream management & MC schedule management"],
    tools: "Google App Script, Excel, Looker Studio, React, PostgreSQL"
  },{
    id: 2,
    duration: "Jun 2022 - May 2023",
    location: "Bangkok",
    company: "Century Grow",
    position: "Project Manager",
    jd: ["Led a team of 10 members and oversees 5 accounts",
      "Simplified data analysis workflows, daily operations, increase 10x productivity across 5 accounts", 
      "Managed and overseeing accounts budget and accounts PnL"],
    tools: "Excel, Looker Studio, Figma"
  },{
    id: 3,
    duration: "Feb 2020 - May 2022",
    location: "Bangkok",
    company: "PChome Thailand",
    position: "Product Assuarance",
    jd: ["Conducting UAT test for 2 application products - PChome Thai & PPay",
      "Assisting in products UI development for PChome Thai & PPay application", 
      "Localize application materials from Chinese to Thai."],
    tools: "Excel, Figma, My Clever Brain"
  }]
  

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
          {experiences.map((e) => {
            return(
              <ExperienceCard 
            key={e.id}
            duration={e.duration}
            location={e.location}
            company={e.company}
            position={e.position}
            jd={e.jd}
            tools={e.tools}
          />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
