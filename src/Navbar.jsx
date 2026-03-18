import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-100 transition-all duration-500 bg-white/90 backdrop-blur-xl border-b border-zinc-100 py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center relative">
          <div className="flex flex-col group cursor-pointer">
            <span className="font-extrabold text-xl uppercase tracking-tighter leading-none text-sky-900">
              BRIGHT
              <span className="text-slate-400 group-hover:text-sky-900 transition-colors duration-500">
                {" "}
                KAMPANAT
              </span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="relative text-[12px] font-semibold uppercase tracking-widest text-slate-500 hover:text-sky-700 transition-colors duration-300 group"
            >
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-sky-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              about
            </a>
            <a
              href="#skills"
              className="relative text-[12px] font-semibold uppercase tracking-widest text-slate-500 hover:text-sky-700 transition-colors duration-300 group"
            >
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-sky-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              skills
            </a>
            <a
              href="#projects"
              className="relative text-[12px] font-semibold uppercase tracking-widest text-slate-500 hover:text-sky-700 transition-colors duration-300 group"
            >
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-sky-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              projects
            </a>
            <a
              href="#experience"
              className="relative text-[12px] font-semibold uppercase tracking-widest text-slate-500 hover:text-sky-700 transition-colors duration-300 group"
            >
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-sky-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              experience
            </a>
            <a
              href="#connect"
              className="relative text-[12px] font-semibold uppercase tracking-widest text-slate-500 hover:text-sky-700 transition-colors duration-300 group"
            >
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-sky-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              connect
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sky-900 transition-colors rounded-lg hover:bg-slate-100"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-menu transition-transform duration-300 rotate-90 text-sky-900"
                width="22"
                height="22"
                viewBox="0 0 640 640"
              >
                <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu transition-transform duration-300 rotate-0 text-sky-900"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            )}
          </button>
          <div
            className={`absolute top-full right-0 mt-4 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl transition-all duration-300 ease-out origin-top-right 
  ${
    isOpen
      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" // ถ้าเปิด (true)
      : "opacity-0 scale-95 -translate-y-2 pointer-events-none" // ถ้าปิด (false)
  }`}
          >
            <div className="flex flex-col p-3">
              <a
                href="#about"
                className="px-4 py-3 text-sm font-bold tracking-tight text-slate-500 hover:text-sky-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                About
              </a>
              <a
                href="#skills"
                className="px-4 py-3 text-sm font-bold tracking-tight text-slate-500 hover:text-sky-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-4 py-3 text-sm font-bold tracking-tight text-slate-500 hover:text-sky-700 hover:bg-slate-50rounded-xl transition-all"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="px-4 py-3 text-sm font-bold tracking-tight text-slate-500 hover:text-sky-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                Experience
              </a>
              <a
                href="#connect"
                className="px-4 py-3 text-sm font-bold tracking-tight text-slate-500 hover:text-sky-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
