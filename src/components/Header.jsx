import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 dark:bg-slate-800 dark:to-slate-900 relative overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
