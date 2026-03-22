function Footer() {
  return (
    <footer id="footer" className="py-12 bg-white border-t border-slate-200">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div class="md:col-span-4">
            <h3 class="text-base font-black uppercase tracking-tighter mb-2 text-sky-900">
              Kampanat Intanan (Bright)
            </h3>
            <p class="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-widest leading-loose">
              Business Solution &amp; <br /> Full-Stack Developer
            </p>
          </div>
          <div class="md:col-span-4 flex md:justify-center gap-8">
            <a
              href="#about"
              class="text-[11px] font-mono font-bold text-slate-500 hover:text-sky-800 uppercase tracking-widest transition-colors relative group"
            >
              About
              <span class="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-700 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              class="text-[11px] font-mono font-bold text-slate-500 hover:text-sky-800 uppercase tracking-widest transition-colors relative group"
            >
              Work
              <span class="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-700 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#connect"
              class="text-[11px] font-mono font-bold text-slate-500 hover:text-sky-800 uppercase tracking-widest transition-colors relative group"
            >
              Connect
              <span class="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-700 transition-all group-hover:w-full"></span>
            </a>
          </div>
          <div class="md:col-span-4 text-left md:text-right">
            <p class="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-widest mb-1">
              © 2026 Global Edition
            </p>
            <p class="text-[11px] font-mono font-black text-sky-900 uppercase tracking-widest">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
