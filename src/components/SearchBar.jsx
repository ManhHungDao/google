"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import ButtonSearch from "./ButtonSearch";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleEnter = (e) => {
    if (!input.trim()) return;
    if (e.key === "Enter")
      router.push(`/search/web?searchTerm=${input.trim()}`);
  };

  const handleSearch = () => {
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input.trim()}`);
  };

  const getRandomWord = async () => {
    const result = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => {
        return res.json();
      })
      .then((data) => data[0]);
    return result;
  };

  const handleRandomSearch = async () => {
    const data = await getRandomWord();
    if (!data) return;
    router.push(`/search/web?searchTerm=${data}`);
  };

  return (
    <>
      <div className="flex items-center justify-center py-3 px-4 rounded-3xl border border-gray-2 w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl hover:shadow-md focus-within:shadow-md">
        <BiSearch className="text-gray-500 " />
        <input
          type="text"
          className="outline-none border-none flex-1 bg-transparent px-3"
          onKeyDown={(e) => {
            handleEnter(e);
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Image
          src={"/Google_mic.png"}
          width={15}
          height={15}
          alt="mic"
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <ButtonSearch handleCLick={handleSearch} title="Google Search" />
        <ButtonSearch
          handleCLick={handleRandomSearch}
          title="I Am Feeling Lucky"
        />
      </div>
    </>
  );
};

export default SearchBar;
