import React from "react";
import StayRoom_LandingImg from "../assets/StayRoom_LandingImg.png";

import PrivateDeluxeRoom_img1 from "../assets/PrivateDeluxeRoom_img1.jpeg";
import PrivateDeluxeRoom_img2 from "../assets/PrivateDeluxeRoom_img2.jpeg";
import PrivateDeluxeRoom_img3 from "../assets/PrivateDeluxeRoom_img3.jpeg";
import PrivateDeluxeRoom_img4 from "../assets/PrivateDeluxeRoom_img4.jpeg";
import PrivateDeluxeRoom_img5 from "../assets/PrivateDeluxeRoom_img5.jpeg";
import PrivateDeluxeRoom_img6 from "../assets/PrivateDeluxeRoom_img6.jpeg";
import PrivateDeluxeRoom_img7 from "../assets/PrivateDeluxeRoom_img7.jpeg";

import FamilyRoom_img1 from "../assets/FamilyRoom_img1.jpg";
import FamilyRoom_img2 from "../assets/FamilyRoom_img2.jpg";
import FamilyRoom_img3 from "../assets/FamilyRoom_img3.jpg";
import FamilyRoom_img4 from "../assets/FamilyRoom_img4_2.png";
import FamilyRoom_img5 from "../assets/FamilyRoom_img5.jpg";

import BunkRoom_img1 from "../assets/BunkRoom_img1.jpg";
import BunkRoom_img2 from "../assets/BunkRoom_img2.jpg";
import BunkRoom_img3 from "../assets/BunkRoom_img3.jpg";
import BunkRoom_img4 from "../assets/BunkRoom_img4.jpg";
import BunkRoom_img5 from "../assets/BunkRoom_img5.jpg";

import InformationCard from "../components/InformationCard";
import { Helmet } from "react-helmet";

const StayScreen = () => {
  const data = [
    {
      title: "Private Deluxe Room",
      info: "Elegant aesthetics with a touch of modernity, the private rooms offer a relaxing space for a romantic getaway or simply some much-needed leisure time. Complete with a King size bed and open wardrobe, adorned by warm lights and greeted by the morning breeze, this room is luxury at its zenith.",
      img: [
        PrivateDeluxeRoom_img1,
        PrivateDeluxeRoom_img2,
        PrivateDeluxeRoom_img3,
        PrivateDeluxeRoom_img4,
        PrivateDeluxeRoom_img5,
        PrivateDeluxeRoom_img6,
        PrivateDeluxeRoom_img7,
      ],
      route: "/chopta/stay/privatedeluxeroom",
    },
    {
      title: "Hostel Room / Bunk Room",
      info: "Perfect for backpackers and friends travelling in a group, it is a Quad or Penta sharing space that combines the fun of cohabitation with the choice of relative privacy. With a spectacular view of the rising sun amongst the snow-clad peaks from the open gallery, start your mornings with the lush greenery that Chopta has to offer all year long.",
      img: [
        BunkRoom_img1,
        BunkRoom_img2,
        BunkRoom_img3,
        BunkRoom_img4,
        BunkRoom_img5,
      ],
      route: "/chopta/stay/bunkroom",
    },
    {
      title: "Family Room",
      info: "True to its name, the Lavasa rooms display the amalgamation of arts and planning with a gateway to the scenic yet majestic mountains and the splendid stars of the night sky, an experience that becomes even more pleasant with the earthy tones of the surroundings.",
      img: [
        FamilyRoom_img1,
        FamilyRoom_img2,
        FamilyRoom_img3,
        FamilyRoom_img4,
        FamilyRoom_img5,
      ],
      route: "/chopta/stay/familyroom",
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Stay - The Bunker House </title>
        <meta
          name="description"
          content="Stay with The Bunker House. "
        />
      </Helmet>
      <div className="relative mb-20">
        <img
          src={StayRoom_LandingImg}
          alt=""
          className="w-full max-h-[90vh] object-cover object-center"
        />
        <div className="xl:absolute xl:bottom-[-15%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-12%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Stay
          </h1>

          <p className="my-5 font-medium">
            Astounded by the diverse offerings of this alluring valley in
            Uttarakhand, and keeping in mind that it is appealing to various
            travelling styles and a wide range of travellers, we have come up
            with a one-stop destination for all.
          </p>
        </div>
      </div>

      {data.map((card, id) => (
        <InformationCard card={card} id={id + 1} />
      ))}
    </div>
  );
};

export default StayScreen;
