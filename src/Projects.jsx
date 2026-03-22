import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <section id="projects" className="relative py-12 md:py-20 bg-white text-sky-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 class="text-[10px] md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 flex items-center justify-center md:justify-start gap-2"><span class="w-6 md:w-8 h-0.5 bg-gray-300"></span>Portfolio</h2>
                        <h3 class="text-3xl md:text-5xl font-black tracking-tight text-sky-900">Featured <span class="text-slate-400 ">Works</span></h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    <ProjectCard 
                        projectName="Schedu-le"
                        projectDesc="A full stack E-Commerce Livestream calendar management web application"
                        repo="https://github.com/Tanapmak/schedu-le"
                        links=""
                        cover="/livestream-mgmt-2-screenshot.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects