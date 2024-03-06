"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./icons/logo";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10  shadow-md bg-[#FFFFFF]  w-screen">
      <div className="lg:ml-14 ml-4">
        <Logo />
      </div>
      {/* For larger screens */}
      <div className="hidden lg:flex items-center">
        {navLinks.map((link) => (
          <div
            key={link}
            className="cursor-pointer text-lg font-semibold text-[#0F1629] mr-6 hover:bg-[#286fea39] px-4 py-1.5 rounded-md"
          >
            {link}
          </div>
        ))}
        <div>
          <button className="bg-gradient-to-r from-[#2870ea] to-[#1B4AEF] px-8 py-2 text-white rounded-lg ml-2 mr-14">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div className="lg:hidden mr-4">
        {isOpen ? (
          <X onClick={() => setIsOpen(false)} />
        ) : (
          <Menu onClick={() => setIsOpen(true)} />
        )}
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-20 right-0 mt-2 mr-2 bg-white rounded-md shadow-md py-5">
          <div className="text-lg font-semibold text-[#0F1629] px-4 py-2">
            <div className="cursor-pointer mb-2">Crypto Taxes</div>
            <div className="cursor-pointer mb-2">Free Tools</div>
            <div className="cursor-pointer">Resource Center</div>
            <div>
              <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14 mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
``;
