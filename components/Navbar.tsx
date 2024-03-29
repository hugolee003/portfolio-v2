import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2 font-open-sauce">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full animate-blink" />
        <span className="text-sm font-semibold tracking-widest">UGO</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="#projects" scroll={false}>Projects</Link>
        <Link href="#contact" scroll={false}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
