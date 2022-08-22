import heroPerson from "../assets/man.png";
function Hero() {
  return (
    <div>
      <img
        className="absolute h-5/6 object-cover bottom-0 right-0 lg:left-0 mx-auto"
        src={heroPerson}
        alt="person"
      />
      <div className="hidden lg:block absolute -z-10 -bottom-1/4 w-big h-big bg-indigo-900 rounded-full right-0 left-0 mx-auto"></div>
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 md:left-1/4 md:text-5xl lg:left-5 lg:text-6xl xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600">Freelance</span>
        <p className="text-red-500">Developer</p>
      </div>
      {/* text */}
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">
          Hi, I'm Chief Dev
        </h1>
        <p className="text-gray-400">
          with over 10 years of experience on web design and development. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo
          provident, facere minus temporibus veniam nostrum reprehenderit nihil?
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Hero;
