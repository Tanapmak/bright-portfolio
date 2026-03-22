function ExperienceCard({ duration, location, company, position, jd, tools}) {
  return (
    <div className="group relative border border-slate-200 p-6 md:p-8 hover:border-sky-700 transition-all duration-300 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <div className="md:col-span-3 space-y-4">
        <div>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
            Duration
          </p>
          <p className="text-sm font-bold text-sky-800">{duration}</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
            Location
          </p>
          <p className="text-sm font-bold text-sky-800">{location}</p>
        </div>
      </div>
      <div className="md:col-span-9 md:border-l border-slate-100 md:pl-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 class="text-xl font-black uppercase tracking-tight text-sky-900 leading-tight">
              {company}
            </h3>
            <p class="text-xs font-mono font-bold text-sky-500 uppercase tracking-widest mt-1">
              {position}
            </p>
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          {jd.map((item, index) => {
            return(
              <li key={index} className="text-[13px] md:text-sm text-slate-600 leading-relaxed flex items-start gap-3">
            <span class="text-sky-900 font-black mt-0.5">•</span>
            {item}
          </li>
            ) 
          })}
        </ul>
        <div className="pt-4 border-t border-zinc-50 flex items-center gap-3">
          <span class="text-[11px] font-mono font-bold text-sky-900 uppercase tracking-widest ">
            TOOLS :
          </span>
          
            <p class="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            {tools}
          </p>
          
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default ExperienceCard
