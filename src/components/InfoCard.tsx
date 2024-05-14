import { InfoCardType } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { UilHeart } from "@iconscout/react-unicons";
import { UilStar } from "@iconscout/react-unicons";

const InfoCard = ({ infoCardData }: { infoCardData: InfoCardType }) => {
  return (
    <div className="  flex py-7  px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out ">
      <div className="relative w-40 md:h-52 md:w-80 flex-shrink-0 first:border-t">
        <Image src={infoCardData.img} layout="fill" className=" rounded-2xl" objectFit="cover" alt="" />
      </div>

      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between">
          <p className="text-sm md:text-base">{infoCardData.location}</p>
          <UilHeart />
        </div>

        <h4 className="tex-lg md:text-xl">{infoCardData.title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-xs md:text-sm text-gray-500 flex-grow">
          {infoCardData.description}
        </p>

        <div className="flex justify-between">
          <div className="flex mt-auto">
            <UilStar className="h-5" />
            <span className="text-sm md:text-base">{infoCardData.star}</span>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-2xl font-semibold pb-2">{infoCardData.price}</p>
            <p className=" text-right font-extralight">{infoCardData.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
