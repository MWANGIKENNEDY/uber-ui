"use client";
import Image from "next/image";
import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilGlobe } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const routeToHome = () => {
    router.push("/");
  };

  const searchFunct = () => {
    const queryString = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(), // Assuming you have an endDate variable
      numberOfGuests: numberOfGuests.toString() // Ensure numberOfGuests is converted to string
    }).toString();
    router.push(`/search?${queryString}`);
    setSearchInput((prev) => "");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const cancelSearch = () => {
    setSearchInput((prev) => "");
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <>
      <header className="grid grid-cols-3 bg-white shadow-md p-5 md:px-10 sticky top-0 z-50">
        {/* left side */}
        <div
          className="relative h-10 cursor-pointer my-auto "
          onClick={routeToHome}
        >
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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

        
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto ">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              onChange={handleSelect}
              rangeColors={["#FD5B61"]}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl  flex-grow font-semibold ">
                Number of guests
              </h2>
              <UilUser className="h-5 " />
              <input
                type="number"
                min={1}
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>

            <div className="flex">
              <button
                className="flex-grow text-gray-500"
                onClick={cancelSearch}
              >
                Cancel
              </button>
              <button className="flex-grow text-red-400" onClick={searchFunct}>
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
