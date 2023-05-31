import Link from "next/link";
import React from "react";

const Result = ({ data }) => {
  const items = data.items;
  return (
    <div className="w-full max-auto lg:pl-52 px-7 pb-24">
      <p className="text-sm text-gray-600 mb-5 mt-3">
        About&nbsp;
        {data.searchInformation.formattedTotalResults}&nbsp;results &#40;
        {data.searchInformation.formattedSearchTime} seconds&#41;
      </p>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <div key={item.title}>
            <div className="">
              <Link href={item.link}>
                <h1 className="text-blue-500 font-medium text-lg"> {item.title}</h1>
                <p className="text-sm text-gray-500"> {`${item.htmlSnippet}`}</p>
                {/* {item.formattedUrl  || item.htmlFormattedUrl} */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Result;
