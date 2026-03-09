function ExperienceCard() {
  return (
    <div className="group relative border border-zinc-200 p-6 md:p-8 hover:border-black transition-all duration-300 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <div className="md:col-span-3 space-y-4">
        <div>
          <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
            Duration
          </p>
          <p className="text-sm font-bold text-black">Nov 2025 - Jan 2026</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
            Location
          </p>
          <p className="text-sm font-bold text-zinc-700">Bangkok</p>
        </div>
      </div>
      <div className="md:col-span-9 border-l border-zinc-100 md:pl-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 class="text-xl font-black uppercase tracking-tight text-black leading-tight">
              HEProAI
            </h3>
            <p class="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mt-1">
              Cloud Engineer
            </p>
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="text-[13px] md:text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
            <span class="text-black font-black mt-0.5">•</span>
            Architected scalable AWS environments for high-availability
            applications.
          </li>
          <li className="text-[13px] md:text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
            <span class="text-black font-black mt-0.5">•</span>
            Automated security via IAM protocols and real-time compliance
            checks.
          </li>
          <li className="text-[13px] md:text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
            <span class="text-black font-black mt-0.5">•</span>
            Built a React component library, cutting internal UI development
            time by 25%.
          </li>
        </ul>
        <div className="pt-4 border-t border-zinc-50 flex items-center gap-3">
          <span class="text-[11px] font-mono font-bold text-black uppercase tracking-widest ">
            TOOLS :
          </span>
          <p class="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
            AWS, IAM, React.JS, MongoDB, +3 More
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ExperienceCard
