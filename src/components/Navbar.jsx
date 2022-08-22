import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import companyLogo from "../assets/logo.png";
import moon from "../assets/moon.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div>
      <nav className="w-full fixed top-0 z-10 bg-whit dark:bg-slate-900">
        <div className="container mx-auto pl-3 py-5 flex justify-between items-center">
          <div className="flex item-center gap-2 cursor-pointer">
            <img className="w-8" src={companyLogo} alt="logo" />
            <span className="text-2xl font-bold text-indigo-900 dark:text-white">
              Myportfolio
            </span>
          </div>
          <ul className="hidden md:flex space-x-10 dark:text-gray-100 text-gray-600 font-bold text-sm uppercase ">
            <li className="hover:text-gray-400">
              <a href="#">homepage</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#about">about me</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#services">services</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#works">works</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#contact">contact</a>
            </li>
          </ul>
          <img
            className=" hidden md:block w-5 cursor-pointer"
            src={moon}
            alt="moon"
          />
          <div className="md:hidden mr-4 z-20" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute left-0 top-0 bg-zinc-100 w-full space-y-3 p-10"
            }
          >
            <li
              onClick={handleClose}
              className="border-b-2 border-zinc-300 py-2 w-full"
            >
              <a href="#">Home page</a>
            </li>
            <li
              onClick={handleClose}
              className="border-b-2 border-zinc-300 py-2 w-full"
            >
              <a href="#about">About me</a>
            </li>
            <li
              onClick={handleClose}
              className="border-b-2 border-zinc-300 py-2 w-full"
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={handleClose}
              className="border-b-2 border-zinc-300 py-2 w-full"
            >
              <a href="#works">Works</a>
            </li>
            <li
              onClick={handleClose}
              className="border-b-2 border-zinc-300 py-2 w-full"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
