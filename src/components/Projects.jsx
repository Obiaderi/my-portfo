import project from "../assets/item.png";

function Projects() {
  return (
    <div id="works" className="py-40 dark:bg-slate-900">
      <div className="container mx-auto">
        {/* <!-- top --> */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl dark:text-white">Works & Projects</h1>
          <p className="w-full md:w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>
        {/* <!-- bottom --> */}
        <div className="p-5 sm:p-0 flex flex-wrap justify-between">
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
          {/* <!-- card --> */}
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
