import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const HomeHeader = () => {
  return (
    <header className="flex items-center justify-end gap-3 m-2">
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
      <Link href="/">
        <TbGridDots className="header-icons" />
      </Link>
      <button className="btn-signIn">Sign in</button>
    </header>
  );
};

export default HomeHeader;
