"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBarHeader = () => {
  const searchParams = useSearchParams();
  const [term, setTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!searchParams) return;
    const searchTerms = searchParams.get("searchTerm");
    setTerm(searchTerms);
  }, [searchParams]);

  const handleEnter = (e) => {
    if (!term.trim()) return;
    if (e.key === "Enter") {
      router.push(`/search/web?searchTerm=${term.trim()}`);
    }
  };
  const handleCLickSearch = (e) => {
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term.trim()}`);
  };
  return (
    <div className="flex items-center py-2 px-4 rounded-3xl border border-gray-2 w-full lg:max-w-2xl hover:shadow-md focus-within:shadow-md ">
      <input
        type="text"
        onKeyDown={(e) => {
          handleEnter(e);
        }}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="outline-none flex-1 bg-transparent border-none"
      />
      <div className="flex items-center">
        {term && (
          <RxCross1
            onClick={() => setTerm("")}
            className="font-black text-lg text-gray-500 mx-2 cursor-pointer"
          />
        )}

        <div className="px-4 border-l-2 ">
          <Image
            src={"/Google_mic.png"}
            width={15}
            height={15}
            alt="mic"
            className="cursor-pointer"
          />
        </div>
        <BiSearch
          className="text-gray-500 cursor-pointer"
          onClick={handleCLickSearch}
        />
      </div>
    </div>
  );
};

export default SearchBarHeader;
