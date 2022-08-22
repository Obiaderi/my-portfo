import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <div class="w-full bg-gray-800">
        <div class="container mx-auto py-5 flex items-center justify-between">
          <div class="flex items-center cursor-pointer gap-2">
            <img class="w-8" src={logo} alt="" />
            <span class="text-2xl font-bold text-white">Myportfolio.</span>
          </div>
          <span class="hidden md:block font-medium text-white">
            © 2022 Myportfolio. Design with ♥️ by Chief Dev.
          </span>
          <div class="flex gap-2">
            <img class="w-4 cursor-pointer" src={facebook} alt="" />
            <img class="w-4 cursor-pointer" src={instagram} alt="" />
            <img class="w-4 cursor-pointer" src={twitter} alt="" />
            <img class="w-4 cursor-pointer" src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
