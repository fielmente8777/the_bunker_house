import React from "react";
import PrivateDeluxeRoom_img from "../assets/PrivateDeluxeRoom_img.jpeg";
import { bookingURL } from "../csconfig";
import { Helmet } from "react-helmet";

const PrivateDeluxeRoom = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Private Deluxe Room - The Bunker House </title>
        <meta
          name="description"
          content="Get the Private Deluxe Room with The Bunker House. "
        />
      </Helmet>
      <div className="relative">
        <img
          src={PrivateDeluxeRoom_img}
          alt=""
          className="max-h-[90vh] w-full object-cover object-center"
        />

        <div className="xl:absolute xl:bottom-[-19%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-14%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Private Deluxe Room
          </h1>
          <p className="my-5 font-medium">
            Elegant aesthetics with a touch of modernity, the private rooms
            offer a relaxing space for a romantic getaway or simply some
            much-needed leisure time. Complete with a King size bed and open
            wardrobe, adorned by warm lights and greeted by the morning breeze,
            this room is luxury at its zenith.
          </p>
        </div>
      </div>

      <div className="bg-[#FFF8E7] xl:mt-[13rem] lg:mt-[13rem] lg:px-28 lg:py-10 xl:py-10 xl:px-28 p-7">
        <h1 className="font-bold text-2xl text-black tracking-wide">
          Room Facilities
        </h1>
        <div className="flex justify-between md:flex-row lg:flex-row xl:flex-row flex-col">
          <ul className="font-semibold mt-2 ml-3 list-inside list-disc marker:text-[#88c9b1]">
            <li className="mt-3">Hot water supply (24x7)</li>
            <li className="mt-3">Modern washroom and bathing facilities</li>
            <li className="mt-3">
              {" "}
              Finest quality of linens, quilts, and blankets
            </li>
          </ul>
          <ul className="font-semibold mt-2 ml-3 list-inside list-disc marker:text-[#88c9b1]">
            <li className="mt-3">Warm lighting and lamps</li>
            <li className="mt-3">
              Common area outside rooms with a cozy Fireplace (Bukhari).
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
  );
};

export default PrivateDeluxeRoom;
