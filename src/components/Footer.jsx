import React from "react";
import CountryLocal from "./CountryLocal";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] absolute bottom-0 w-full text-sm text-gray-500 ">
      <div className="py-3 px-5 link">
        <CountryLocal />
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <ul className="flex items-center space-x-5 py-3 px-5">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          {/* <li>Business</li> */}
          <li className="link">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-5 py-3 px-5">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
