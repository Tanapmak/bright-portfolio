import { useState } from "react";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgb(229, 231, 235) 1px, transparent 1px);",
          size: "20px 20px;",
          backgroundSize: "30px 30px;",
        }}
      ></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 class="text-\[10px]\ md:text-sm font-bold tracking-0.2em text-gray-400 uppercase mb-2 md:mb-3 flex items-center gap-2">
              <span class="w-6 md:w-8 h-0.5 bg-gray-300"></span>inventory
            </h2>
            <h3 class="text-3xl md:text-5xl font-black tracking-tight text-black">
              Tech Stack
              <span class="text-gray-400 font-bold"> & Skillset</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              React
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Javascript
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              HTML
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              CSS
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Tailwind
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Node.js
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Express
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              PostgreSQL
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Git
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Github
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Figma
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              UAT
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Sales & Marketing
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              E-Commerce
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              HR
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Import & Export
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              ERP
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              PnL & Budgeting
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Chinese
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              English
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Business Process Optimization
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
          <div
            class="
                group relative px-6 py-3 
                bg-white border border-zinc-200 
                rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.02)]
                hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 ease-out
                flex items-center justify-center
              "
          >
            <span class="text-\[13px]\ font-bold tracking-tight text-zinc-600 group-hover:text-black transition-colors">
              Operations
            </span>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-bl-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
