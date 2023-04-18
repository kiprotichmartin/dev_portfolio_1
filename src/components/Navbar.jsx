import React from "react";

function Navbar() {
  return (
    // Naviagtion
    <nav class="w-11/12 flex flex-col space-y-2 items-center mx-auto md:flex-row md:flex-wrap py-5 md:justify-between bg-eerie-black md:w-3/4">
      {/* Logo */}
      <h3 class="text-4xl text-mustard">Martin Kiprotich.</h3>
      {/* Nav Links */}
      <ul class="flex space-x-3">
        <li class="underline hidden text-lg md:text-xl text-white hover:text-moonstone md:visible">
          <a href="#about">About</a>
        </li>
        <li class="underline hidden text-lg md:text-xl text-white hover:text-moonstone md:visible">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      {/* CTA button */}
      <button class="bg-mustard text-eerie-black px-4 py-2 text-2xl">
        <a href="/resume/Martin_Kosgei_Resume.pdf" download>
          Download CV
        </a>
      </button>
    </nav>
  );
}

export default Navbar;
