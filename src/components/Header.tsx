import Image from "next/image";
import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilGlobe } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <header className="grid grid-cols-3 bg-white shadow-md p-5 md:px-10 sticky top-0 z-50">
      {/* left side */}
      <div className="relative h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* center  */}
      <div className="flex  rounded-full  py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          className=" outline-none flex-1 bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-600"
          placeholder="Search here"
        />

        <UilSearch className=" hidden md:inline-flex h-8 w-8 text-white bg-red-400 p-2 rounded-full mx-2" />
      </div>

      {/* right side */}
      <div className=" space-x-4 flex items-center justify-end text-gray-600">
        <span className=" hidden md:inline">Become a host</span>
        <UilGlobe className="h-6 cursor-pointer" />
        <div className="flex space-x-2 rounded-full border-2 p-2">
          <UilBars className="h-6 cursor-pointer" />
          <UilUser className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
