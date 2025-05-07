'use client'
import { useState } from "react";
import Image from "next/image";
import logo from "../asset/logo.png";
import menu from "../asset/menu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-[32px] left-1/2 transform -translate-x-1/2 z-10 p-[24px] text-center box-border rounded-[80px] backdrop-blur-[30px] bg-[rgba(10, 10, 10, 0.1)] border-2 border-[rgba(255,255,255,0.1)] fill-[#0A0A0A1A] flex justify-between w-full max-w-[1063px] max-sm:w-[90%] mx-auto">
        <Image src={logo} alt="logo" className="w-[39px] h-[36px]" />
        
        <div className="hidden md:flex gap-[37.33px] items-center dmSans">
        <a href="#" className="hover:scale-110 cursor-pointer py-2">Work</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">About</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">Blog</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">Contact</a>
          <Image
            src={menu}
            alt="menu"
            className="w-[32px] h-[32px] hover:scale-110 cursor-pointer"
          />
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center">
          <Image
            src={menu}
            alt="menu"
            className="w-[32px] h-[32px] hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* dropdown */}
      {isMenuOpen && (
        <div className="fixed top-[110px] left-1/2 transform -translate-x-1/2 z-10 p-6 rounded-3xl backdrop-blur-[30px] bg-[rgba(10, 10, 10, 0.8)] border-2 border-[rgba(255,255,255,0.1)] w-[80%] md:hidden">
          <div className="flex flex-col gap-4 items-center dmSans text-white">
            <a href="#" className="hover:scale-110 cursor-pointer py-2">Work</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">About</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">Blog</a>
            <a href="#" className="hover:scale-110 cursor-pointer py-2">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;