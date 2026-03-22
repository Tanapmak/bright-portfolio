

function Introduction() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0,0,0) 1px, transparent 1px), linear-gradient(90deg, rgb(0,0,0) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="mb-10 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-slate-200 rounded-full bg-slate-50/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-zinc-600">
              Available for Works
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-9">
            <div className="space-y-2 mb-8 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-sky-900 tracking-tighter leading-[0.85]">
                BRIGHT
                <br />
                <span className="text-slate-400 hover:text-sky-900 transition-colors duration-500 cursor-default">
                  KAMPANAT
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-black"></div>
            <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.3em] text-sky-900">
              Business minded full-stack developers
            </h2>
          </div>
          <div>
            <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed border-l border-zinc-100 pl-6">
              A Full Stack Developer packed with 360° view of how organizations
              really work. Creating software that doesn’t just run — but solves
              real business & operational pain points.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-row flex-wrap gap-4 transition-all duration-1000 delay-700 opacity-100">
          <a
            href="#about"
            className="flex-1 md:flex-initial min-w-180px group relative px-8 py-4 bg-sky-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:pr-10 text-center flex items-center justify-center"
          >
            <div className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest">
              learn more
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
                class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </a>
          <button className="flex-1 md:flex-initial min-w-180px flex items-center justify-center gap-2 px-8 py-4 bg-white border text-sky-900 rounded-full text-xs font-black uppercase tracking-widest border-sky-900 hover:bg-slate-50 transition-all">
            resume
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
              class="lucide lucide-download"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default Introduction;
