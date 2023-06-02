import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const Result = ({ data }) => {
  const items = data.items;
  return (
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
                  className="rounded-full m-3"
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
  );
};

export default Result;
