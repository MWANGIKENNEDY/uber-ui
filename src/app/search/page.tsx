import InfoCard from "@/components/InfoCard";
import MapComponent from "@/components/Map";
import { InfoCardType } from "@/utils/types";
import { format } from "date-fns";
import React from "react";

type Props = {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuests: string;
};

const SearchPage = async ({ searchParams }: { searchParams: Props }) => {
  const { location, startDate, endDate, numberOfGuests } = searchParams;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const infoCardData = await getData();

  return (
    <main className="flex ">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ Stays - {range} - for {numberOfGuests} guest(s)
        </p>
        <h1
          className="text-3xl font-semibold mt-2 mb-6
            "
        >
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>

          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {infoCardData.map((infoCardData: InfoCardType) => (
            <InfoCard infoCardData={infoCardData} key={infoCardData.img} />
          ))}
        </div>
      </section>

      <section className="hidden xl:inline-flex xl:min-w-[600px] overflow-scroll">
        <MapComponent infoCardData={infoCardData} />
      </section>
    </main>
  );
};

export default SearchPage;

async function getData() {
  const infoCardData = await fetch("http://localhost:8000/searchResults");
  return infoCardData.json();
}
