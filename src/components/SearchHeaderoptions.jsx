"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { BiSearch, BiImage } from "react-icons/bi";
import { useRouter, useSearchParams } from "next/navigation";

const SearchHeaderOptions = () => {
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("searchTerm");
  const pathName = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-max space-x-5 flex items-center lg:pl-52 px-7 ">
        <div
          className={`
        flex items-center gap-1 border-b-4 cursor-pointer pb-1 w-fit
        ${
          pathName === "/search/web"
            ? "border-blue-500 text-blue-500"
            : "border-transparent"
        }
      `}
          onClick={() => router.push(`/search/web?searchTerm=${searchTerms}`)}
        >
          <BiSearch className="text-sm" />
          <span>All</span>
        </div>
        <div
          className={`
        flex items-center gap-1 border-b-4 cursor-pointer pb-1 w-fit
        ${
          pathName === "/search/image"
            ? "border-blue-500 text-blue-500"
            : "border-transparent"
        }
      `}
          onClick={() => router.push(`/search/image?searchTerm=${searchTerms}`)}
        >
          <BiImage className="text-sm" />
          <span>Images</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SearchHeaderOptions;
