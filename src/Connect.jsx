import { useState } from "react";

function Connect() {
  return (
    <section id="connect" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-10 top-0 h-full hidden lg:block">
        <span className="text-[14vh] font-black text-zinc-50/50 select-none vertical-text rotate-180 transition-all duration-1000"></span>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 md:mb-3 flex items-center gap-2">
              <span className="w-6 md:w-8 h-0.5 bg-slate-300"></span>
              Available for work
            </h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-sky-900">
              Get In
              <span className="text-slate-400  font-bold"> Touch</span>
            </h3>
          </div>
        </div>
        <div className="space-y-0">
          <a
            href="mailto:kampanat.int@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center py-6 border-b border-slate-100 hover:border-sky-700 transition-all duration-500 overflow-hidden"
          >
            <span class="text-[10px] font-mono text-slate-300 mr-8 group-hover:text-slate-500 transition-colors">
              01
            </span>
            <div class="relative flex-1 overflow-hidden h-8">
              <div class="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-slate-500">
                  Email
                </span>
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-sky-900 italic">
                  Send Mail —&gt;
                </span>
              </div>
            </div>
            <div class="text-slate-300 group-hover:text-sky-900 group-hover:rotate-12 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kampanat-intanan-b093a416a/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center py-6 border-b border-slate-100 hover:border-sky-900 transition-all duration-500 overflow-hidden"
          >
            <span class="text-[10px] font-mono text-slate-300 mr-8 group-hover:text-sky-700 transition-colors">
              02
            </span>
            <div class="relative flex-1 overflow-hidden h-8">
              <div class="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-slate-500">
                  LinkedIn
                </span>
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-sky-900 italic">
                  Network —&gt;
                </span>
              </div>
            </div>
            <div class="text-zinc-300 group-hover:text-sky-900 group-hover:rotate-12 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/Tanapmak"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center py-6 border-b border-slate-100 hover:border-sky-700 transition-all duration-500 overflow-hidden"
          >
            <span class="text-[10px] font-mono text-slate-300 mr-8 group-hover:text-sky-700 transition-colors">
              03
            </span>
            <div class="relative flex-1 overflow-hidden h-8">
              <div class="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-slate-500">
                  GitHub
                </span>
                <span class="h-8 flex items-center text-lg font-bold uppercase tracking-widest text-sky-900 italic">
                  Source —&gt;
                </span>
              </div>
            </div>
            <div class="text-slate-300 group-hover:text-sky-900 group-hover:rotate-12 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="mt-20 flex flex-col items-start">
          <p class="text-slate-400 text-xs font-medium mb-6 uppercase tracking-[0.2em]">
            Based in Bangkok Thailand
          </p>
          <a
            href="mailto:kampanat.int@gmail.com"
            className="group relative inline-flex items-center gap-4 text-xl md:text-2xl font-black uppercase tracking-tighter text-sky-900"
          >
            kampanat.int@gmail.com
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-sky-900 group-hover:text-white transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;
