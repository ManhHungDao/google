import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import ButtonSearch from "./ButtonSearch";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-center py-3 px-4 rounded-3xl border border-gray-2 w-full max-w-[90%] sx:max-w-xl lg:max-w-2xl hover:shadow-md focus-within:shadow-md">
        <BiSearch className="text-gray-500 " />
        <input
          type="text"
          className="outline-none border-none flex-1 bg-transparent px-2"
        />
        <Image src={"/Google_mic.png"} width={15} height={15} alt="mic" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <ButtonSearch title="google search" link="/123" />
        <ButtonSearch title="i am feeling looky" link="/123" />
      </div>
    </>
  );
};

export default SearchBar;
