import React from "react";
import Result from "@/components/Result";

const getData = async (searchTerm) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`
  ).then((result) => result.json());
  return res ? res : "";
};

const ImageSearchPage = async ({ searchParams }) => {
  const key = searchParams.searchTerm;
  const data = await getData(key);
  return (
    <div>
      {data ? (
        <Result data={data} type="image" />
      ) : (
        <div className="flex justify-center">
          <h1>No Results Found</h1>
        </div>
      )}
    </div>
  );
};

export default ImageSearchPage;
