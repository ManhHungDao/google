import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const HomeHeader = () => {
  return (
    <header className="flex items-center justify-end gap-7 m-2 font-medium">
      <Link
        href="/"
        className="cursor-pointer hover:underline underline-offset-4 decoration-2"
      >
        Gmail
      </Link>
      <Link
        href="/"
        className="cursor-pointer hover:underline underline-offset-4 decoration-2"
      >
        Images
      </Link>
      <Link
        href="/"
        className="p-2 rounded-full hover:bg-gray-300 c cursor-pointer"
      >
        <TbGridDots className="font-bold text-lg" />
      </Link>
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:opacity-80 hover:shadow-md transition-shadow">
        Sign in
      </button>
    </header>
  );
};

export default HomeHeader;
