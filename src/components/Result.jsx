import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Pagination from "./Pagination";

const Result = ({ data, type }) => {
  const items = data.items;
  return (
    <>
      {type === "web" && (
        <div className="pb-24">
          <div className="w-full max-auto lg:bg-white bg-gray-100">
            <p
              className="hidden lg:inline-block text-sm text-gray-600 mb-3 mt-3
        pl-52 
      "
            >
              About&nbsp;
              {data.searchInformation.formattedTotalResults}&nbsp;results &#40;
              {data.searchInformation.formattedSearchTime} seconds&#41;
            </p>
            {items &&
              items.length > 0 &&
              items.map((item) => {
                let img = item.pagemap.cse_image;
                if (!img) return;
                return (
                  <div
                    key={item.title}
                    className="my-1 lg:max-w-[800px] bg-white
              px-7 py-3  lg:pl-52 lg:px-0
              "
                  >
                    <div className="flex items-center">
                      <Image
                        src={img[0].src}
                        width={30}
                        height={30}
                        alt={item.title}
                        className="rounded-full m-2"
                      />
                      <div className="">
                        <b className="font-medium text-[14px] text-gray-700">
                          {item.displayLink}
                        </b>
                        <p className="text-[14px] text-gray-700">
                          {item.formattedUrl}
                        </p>
                      </div>
                    </div>
                    <Link href={item.link}>
                      <h1 className="text-blue-500 font-medium text-lg hover:underline underline-offset-1 decoration-2">
                        {item.title}
                      </h1>
                      {/* {item.formattedUrl  || item.htmlFormattedUrl} */}
                    </Link>
                    <p className="text-sm text-gray-700 m-0">
                      {parse(item.htmlSnippet)}
                    </p>
                  </div>
                );
              })}
          </div>
          <div
            className="  lg:max-w-[800px] bg-white
              px-7 py-3  lg:pl-52 lg:px-0"
          >
            <Pagination />
          </div>
        </div>
      )}
      {type === "image" && (
        <div className="pb-24 mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {items &&
              items.length > 0 &&
              items.map((item) => {
                let img = item.pagemap.cse_image;
                if (!img) return;
                return (
                  <div key={item.link} className="group">
                    <Link href={item.link}>
                      <img
                        src={img[0].src}
                        alt={item.title}
                        className="rounded-xl"
                      />
                      {/* <div className="group-hover:underline decoration-1"> */}
                      <div className="hover:underline decoration-1">
                        <b className="font-medium text-[14px] text-gray-700">
                          {item.displayLink}
                        </b>
                        <p className="text-[14px] text-gray-700">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
