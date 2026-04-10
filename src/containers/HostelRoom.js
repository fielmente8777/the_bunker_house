import React from "react";
import HostelRoom_img from "../assets/HostelRoom_img.png";
import { bookingURL } from "../csconfig";
import { Helmet } from "react-helmet";

const HostelRoom = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Bunk Room - The Bunker House </title>
        <meta name="description" content="Find the Best Bunk Room with us " />
      </Helmet>
      <div className="mb-20">
        <div className="relative">
          <img
            src={HostelRoom_img}
            alt=""
            className="max-h-[90vh] w-full object-cover object-center"
          />
          <div className="xl:absolute xl:bottom-[-19%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-14%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
            <h1 className="font-semibold text-2xl text-white tracking-wider">
              Bunk Room / Hostel Room
            </h1>
            <p className="my-5 font-medium">
              Perfect for backpackers and friends travelling in a group, it is a
              Quad or Penta sharing space that combines the fun of cohabitation
              with the choice of relative privacy. With a spectacular view of
              the rising sun amongst the snow-clad peaks from the open gallery,
              start your mornings with the lush greenery that Chopta has to
              offer all year long.
            </p>
          </div>
        </div>

        <div className="bg-[#FFF8E7] xl:mt-[13rem] lg:mt-[13rem] lg:px-28 lg:py-10 xl:py-10 xl:px-28 p-7">
          <h1 className="font-bold text-2xl text-black tracking-wide">
            Room Facilities
          </h1>
          <div className="flex justify-between md:flex-row lg:flex-row xl:flex-row flex-col">
            <ul className="font-semibold mt-2 ml-3 list-inside list-disc marker:text-[#88c9b1]">
              <li className="mt-3">Privacy curtain for each bed</li>
              <li className="mt-3">Charging ports and lights on each bed</li>
            </ul>
            <ul className="font-semibold mt-2 ml-3 list-inside list-disc marker:text-[#88c9b1]">
              <li className="mt-3">Hot water supply (24x7)</li>
              <li className="mt-3">
                Space for an extra bed is available to make this a Penta-sharing
                room if needed.
              </li>
            </ul>
          </div>
          <button
            onClick={() => window.open(bookingURL, "_blank")}
            className="xl:w-[30%] px-6 m-auto mt-14 rounded-md block bg-[#146044] py-2 text-sm font-semibold text-white"
          >
            Book Your Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelRoom;
