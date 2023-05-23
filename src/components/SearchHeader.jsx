"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Link from "next/link";
import SearchBarHeader from "./SearchBarHeader";

const SearchHeader = () => {
  return (
    <header>
      <div className="hidden lg:flex items-center gap-10 p-6 w-full">
        <Link href="/">
          <Image
            src="/Google_logo.png"
            width={120}
            height={70}
            alt="google logo"
          />
        </Link>
        <SearchBarHeader />
        <div className="flex items-center justify-center gap-3 ml-auto">
          <Link href="/">
            <AiOutlineSetting className="header-icons" />
          </Link>

          <Link href="/">
            <TbGridDots className="header-icons" />
          </Link>
          <button className="btn-signIn">Sign in</button>
        </div>
      </div>
      <div className="lg:hidden block p-3">
        <div className="flex justify-between items-center p-3">
          <Link href="/">
            <AiOutlineMenu className="header-icons" />
          </Link>
          <Link href="/">
            <Image
              src="/Google_logo.png"
              width={70}
              height={30}
              alt="google logo"
            />
          </Link>
          <button className="btn-signIn">Sign in</button>
        </div>
        <div className="px-4">
          <SearchBarHeader />
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
