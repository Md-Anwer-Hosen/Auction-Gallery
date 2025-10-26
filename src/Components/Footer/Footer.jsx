import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 w-full mt-10 h-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-col items-center justify-between text-center md:text-left h-full">
        <div className="font-bold text-2xl text-blue-600">
          Auction<span className="text-yellow-500">Gallery</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-lg  md:mt-0">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Auctions
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Categories
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            How it works
          </a>
        </div>

        <div className=" md:mt-0 text-sm text-gray-500">
          © 2025 AuctionHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
