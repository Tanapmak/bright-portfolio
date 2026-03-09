import { useState } from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 className="text-10px md:text-sm font-bold tracking-0.2em text-gray-400 uppercase mb-2 md:mb-3 flex items-center gap-2">
              <span className="w-6 md:w-8 h-2px bg-gray-500"></span>
              biography
            </h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              What
              <span className="text-gray-400 font-bold"> I do</span>
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[320px]">
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-zinc-100 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
              <div className="relative aspect-4/5 rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50">
                <img
                  src="src/assets/profile.jpg"
                  alt="bright-kampanat"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md border border-zinc-200/50 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-9px font-black uppercase tracking-widest text-zinc-600">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <span className="text-10px font-bold uppercase tracking-[0.3em] text-zinc-400">
                the digital architect
              </span>
            </div>
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-zinc-900 leading-tight tracking-tight max-w-2xl">
                Building refined digital products with a focus on
              </h3>
              <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
                I bridge the gap between design and high-level engineering.
                Based in Navi Mumbai, I focus on creating digital experiences
                that are as technically sound as they are visually intuitive.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 py-8 border-y border-zinc-100">
              <div className="space-y-1">
                <p className="text-9px uppercase tracking-0.2em text-zinc-400 font-black">
                  Location
                </p>
                <p className="text-13px font-bold text-zinc-800">
                  Navi Mumbai, India
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-9px uppercase tracking-0.2em text-zinc-400 font-black">
                  status
                </p>
                <p className="text-13px font-bold text-zinc-800">
                  Open to Work
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-50 text-zinc-500 rounded border border-zinc-100 uppercase">React</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-50 text-zinc-500 rounded border border-zinc-100 uppercase">Express</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-50 text-zinc-500 rounded border border-zinc-100 uppercase">Node</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-50 text-zinc-500 rounded border border-zinc-100 uppercase">Postgresql</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-50 text-zinc-500 rounded border border-zinc-100 uppercase">Tailwind</span>
                </div>
                <a href="#" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-200 transition-all">
                    get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
