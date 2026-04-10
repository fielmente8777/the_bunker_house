import InformationCard from "../components/InformationCard";

import { Helmet } from "react-helmet";
import Chandrashila_img from "../assets/Chandrashila_img.jpg";
import Deoriatal_img from "../assets/Deoriatal_img.jpg";
import Trekking_img from "../assets/Trekking_img.jpg";
import Tungnath_img from "../assets/Tungnath_img.jpg";

const TrekkingScreen = () => {
  const data = [
    {
      title: "Chandrashila",
      info: "Chandrashila, a peak that literally translates to 'Moon Rock'. It got this name from the legend of Lord Chandra, the Moon God, who has been known to spend time on this very peak to offer penance to Lord Rudra (Shiva). However, a campfire story isn't all that Chandrashila offers you. A stupendous 360-degree panoramic view of peaks like Chaukhamba, Trishul, Nanda Devi, and Kedarnath along with the serenity of the valley is what people take home from this long and most beautiful trek. Chandrashila, which stands at 14000  feet approximately, is almost half the height of Mount Everest, yet one of most accessible peaks of the world.",
      img: Chandrashila_img,
    },
    {
      title: "Tungnath",
      info: "Set in a mesmerising background of snow-clad peaks and forests, The highest ShivaTemple in the world, Tungnath lies at a height of 3,680 m in the Rudraprayag district. To reach here, the trek starts from Chopta. While on the way, the sight of beguiling peaks such as Nanda Devi, Chowkhamba and Neelkanth will take away your breath, while the soothing breeze calms your senses.",
      img: Tungnath_img,
    },
    {
      title: "Deoriatal",
      info: "Indra Sarovar, also popularly known as Deoriatal is a lake in Chopta that stores in its calm reflection some of the highest and most difficult to climb peaks of the Himalayas like Chowkhamba, Kedarnath and Neelkanth. It serves as an adventurer’s playing field and a nature lover’s paradise as well as a great midday picnic spot.",
      img: Deoriatal_img,
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Trekking - The Bunker House  </title>
        <meta
          name="description"
          content="The Best Trekking House with Bunker Room."
        />
      </Helmet>
      <div className="relative">
        <img
          src={Trekking_img}
          alt=""
          className="max-h-[90vh] w-full object-cover object-center"
        />

        <div className="xl:absolute xl:bottom-[-45%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-20%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Trekking
          </h1>
          <p className="my-5 font-medium">
            The beauty of Chopta is a sight to behold. The valley is lush and
            fresh with green grass beds, small streams and waterfalls at every
            nook and corner to make those hikes worthwhile, the perennial
            winters intermingled with misty rains that bring with them the gift
            of rainbows, the sky that gets painted in every colour possible as
            the day progresses and the night adorned by millions of stars for
            you to look for constellations.
          </p>

          <p className="my-5 font-medium">
            The picturesque valley is surrounded by dainty meadows and has an
            invigorating yet peaceful aura, accentuated by the forests of the
            Kedarnath Wildlife Sanctuary, and attracts avid trekkers, solitude
            seekers and nature lovers. For the ones with a knack for adventure,
            Chopta provides trekking to Tungnath and Chandrashila temples of the
            Five Kedars.
          </p>

          <p className="my-5 font-medium">
            Chopta is also called the Mini Switzerland of Uttarakhand, and
            rightly so because of the snowy mountains that it offers in all its
            wonder and glory, along with the temples and shrines to the pilgrims
            all over the world.
          </p>
        </div>
      </div>

      <div className="mt-[17rem]">
        {data.map((card, id) => (
          <InformationCard card={card} id={id + 1} />
        ))}
      </div>
    </div>
  );
};

export default TrekkingScreen;
