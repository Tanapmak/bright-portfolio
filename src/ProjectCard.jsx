function ProjectCard({projectName, projectDesc, repo, links, cover}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-5 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="absolute inset-0 p-4 flex items-center justify-center">
          <img
            src={cover}
            alt="schedu-le project"
            className="w-full h-full object-contain drop-shadow-md transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <div className="flex gap-2">
            <a
              href={repo}
              class="p-3 bg-black text-white rounded-full hover:scale-110 active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </a>
            <a
              href={links}
              class="p-3 bg-black text-white rounded-full hover:scale-110 active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-external-link"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="space-y-2 px-1">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-black uppercase tracking-widest text-gray-400">
            Development
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-up-right text-gray-300 group-hover:text-black transition-colors"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </div>
        <h4 class="text-lg font-bold text-black">{projectName}</h4>
        <p class="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {projectDesc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard
