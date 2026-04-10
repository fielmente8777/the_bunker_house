import React from "react";
import InformationCard from "../components/InformationCard";

import Pilgrimage_img from "../assets/Pilgrimage_img.jpg";

import Panchkedars_img from "../assets/Panchkedars_img2.jpg";

import Kedarnath_img1 from "../assets/Pilgrimage_img.jpg";
import Badrinath_img from "../assets/Badrinath_img.jpg";
import Gangotri_img from "../assets/Gangotri_img.jpg";
import Yamunotri_img from "../assets/Yamunotri_img.jpg";

import Tungnath_img from "../assets/Tungnath_img.jpg";
import Kedarnath_img from "../assets/Kedarnath_img.jpg";
import Rudranath_img from "../assets/Rudranath_img.jpg";
import Kalpeshwar_img from "../assets/Kalpeshwar_img.jpg";
import Madhyamaheshwar_img from "../assets/Madhyamaheshwar_img.jpg";
import { Helmet } from "react-helmet";

const PilgrimageScreen = () => {
  const charDhamData = [
    {
      title: "Kedarnath",
      info: "Dedicated to Lord Shiva and also a part of the Panch Kedars, this temple acts as the mode of spiritual awakening and healing for all its visitors, who return with a mind full of devotion and a heart full of love and admiration.",
      distanceInfo: "Distance from The Bunker House: 65km to the trekking base",
      img: Kedarnath_img1,
    },
    {
      title: "Badrinath",
      info: "Dedicated to the preserver of the universe, Lord Vishnu, this city is perched at an average elevation of 3,300 metres (10827 feet) above sea level on the banks of the Alaknanda River. It is also famous for its unique and traditional Garhwali wooden architecture.",
      distanceInfo: "Distance from The Bunker House: 154km",
      img: Badrinath_img,
    },
    {
      title: "Gangotri",
      info: "Dedicated to Goddess Ganga, often revered as the Ganga River, which emerges from the Gangotri glacier, this is known to be the highest and most prominent river of the goddess.",
      distanceInfo: "Distance from The Bunker House: 398km",
      img: Gangotri_img,
    },
    {
      title: "Yamunotri",
      info: "Source of the Yamuna River, this temple is located in the Uttarkashi district of Uttarakhand. It offers peace of mind and body to its devotees as well as the beautiful sight of the crisscrossing water channels that run through the city.",
      distanceInfo: "Distance from The Bunker House: 310km",
      img: Yamunotri_img,
    },
  ];

  const panchKedarsData = [
    {
      title: "Kedarnath Temple - The Hump of Lord Shiva",
      info: "Set in an enthralling background of snow-clad peaks and forests, Kedarnath temple is situated in the Rudraprayag district of Uttarakhand. The trek of 18 km  to Kedarnath temple begins from Gaurikund and is a worthwhile journey to peace and serenity. It is the most famous pilgrimage among the five, and is often described as Heaven on Earth, a treat to the body, mind and soul. It is the perfect journey for all your spiritual needs.",
      distanceInfo: "Distance from The Bunker House: 65km to the trekking base",
      img: Kedarnath_img,
    },
    {
      title: "Tungnath Temple - The Arms of Lord Shiva",
      info: "The highest Shiva temple in the world-Tungnath lies at a height of 3,680 m in the Rudraprayag district. To reach here, the trek starts from Chopta. While on the way, you will be visited by beguiling peaks such as Nanda Devi, Chowkhamba, and Neelkanth. A quaint and picturesque trek of 3.5 km, it is a gift to the senses.",
      distanceInfo: "Distance from The Bunker House: 13km to the trekking base",
      img: Tungnath_img,
    },
    {
      title: "Rudranath Temple - The Hair of Lord Shiva",
      info: "A natural rock temple, situated at 2,286 m amid alpine meadows and thick forests where Lord Shiva is worshipped as 'Neelkanth Mahadev'. Sacred and refreshing kunds (pools) such as Surya Kund, Chandra Kund, Tara Kund and Mana Kund exist around the temple. There are many trek routes till this temple, most of which start from Gopeshwar village and are approximately 20 km.",
      distanceInfo:
        " Distance from The Bunker House: 56km to the trekking base",
      img: Rudranath_img,
    },
    {
      title: "Kalpeshwar Temple - The Face of Lord Shiva",
      info: "The last and fifth temple Kalpeshwar is the only temple among the sacred Panch Kedar temples that remains open throughout the year. The Panch Kedar trail ends at Kalpeshwar (Kalpnath). It is also easily accessible, just 300 metres from the Devgram village - which itself is accessible by vehicles up to the 300 m mark from the temples.",
      distanceInfo: "Distance from The Bunker House: 160km",
      img: Kalpeshwar_img,
    },
    {
      title: "Madhyamaheshwar Temple - The Belly Button of Lord Shiva",
      info: "Situated at the height of about 3,289 m and lying in the lush green valleys in the Garhwal Himalayas, with a trek of 15 km, the temple is encircled by spectacular snow-covered peaks of Kedarnath, Chowkhamba and Neelkantha. The trek till Madhyamaheswar begins from Uniana, near Ukhimath.",
      distanceInfo: "Distance from The Bunker House: 31km to the trekking base",
      img: Madhyamaheshwar_img,
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Pilgrimage - The Bunker House</title>
        <meta
          name="description"
          content="Enjoy pilgrimage with The Bunker House. "
        />
      </Helmet>
      <div className="relative">
        <img
          src={Pilgrimage_img}
          alt=""
          className="max-h-[90vh] w-full object-cover object-center"
        />

        <div className="xl:absolute xl:bottom-[-16%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-10%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Char Dham
          </h1>
          <p className="my-5 font-medium">
            Experience tranquillity like never before and witness the sites of
            unflinching faith and devotion with the Char Dham Yatra of
            Uttarakhand, comprising 4 holy locations – Badrinath, Yamunotri,
            Kedarnath, and Gangotri. Every year, devotees in large numbers visit
            these auspicious shrines and offer their prayers to the almighty.
          </p>
        </div>
      </div>
      <div className="mt-[5rem]">
        {charDhamData.map((card, id) => (
          <InformationCard card={card} id={id + 1} />
        ))}
      </div>
      <div className="relative">
        <img
          src={Panchkedars_img}
          alt=""
          className="h-[90vh] w-full object-cover object-top"
        />

        <div className="xl:absolute xl:bottom-[-14%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-10%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Panch Kedars
          </h1>
          <p className="my-5 font-medium">
            The Panch Kedars is a sight to behold, with each site dedicated to a
            part of the Lord - Kedarnath (the hump of Lord Shiva), Madhmaheshwar
            (His belly button), Tungnath (His arms), Rudranath (His face), and
            Kalpeshwar (His Jata or Hair) – these shrines are responsible for
            conferring upon Uttarakhand the title of being the ‘Land of Gods’.
            Along with being a holy place, this cluster of Shiva temples are
            also popular for being one of the most popular trekking routes.
          </p>
        </div>
      </div>
      <div className="mt-[5rem]">
        {panchKedarsData.map((card, id) => (
          <InformationCard card={card} id={id + 1} />
        ))}
      </div>
    </div>
  );
};

export default PilgrimageScreen;
