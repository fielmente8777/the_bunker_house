import InformationCard from "../components/InformationCard";

import { Helmet } from "react-helmet";
import Experience_LandingImg from "../assets/Experience_LandingImg.png";
import IntoTheWild_img from "../assets/IntoTheWild_img.jpg";
import Pilgrimage_img from "../assets/Pilgrimage_img.jpg";
import RiverTrail_img from "../assets/RiverTrail_img.jpg";
import Stargazing_img from "../assets/Stargazing_img.jpg";
import Trekking_img from "../assets/Trekking_img2.jpg";

const ExperienceScreen = () => {
  const data = [
    {
      title: "Trekking",
      info: "The beauty of Chopta is a sight to behold. The valley is lush and fresh with green grass beds, small streams and waterfalls at every nook and corner to make those hikes worthwhile, the perennial winters intermingled with misty rains that bring with them the gift of rainbows, the sky that gets painted in every colour possible as the day progresses and the night adorned by millions of stars for you to look for constellations.",
      img: Trekking_img,
      route: "/chopta/experience/trekking",
    },
    {
      title: "Pilgrimage",
      info: "Experience tranquillity like never before and witness the sites of unflinching faith and devotion with the Char Dham Yatra of Uttarakhand, comprising 4 holy locations – Badrinath, Yamunotri, Kedarnath, and Gangotri. Every year, devotees in large numbers visit these auspicious shrines and offer their prayers to the almighty.",
      img: Pilgrimage_img,
      route: "/chopta/experience/pilgrimage",
    },
    {
      title: "Into The Wild",
      info: "The unexplored valley of Chopta lies at the heart of the Kedarnath Wildlife Sanctuary and hence acquaints a visitor with a distinguished variety of flora and fauna. Be it the rosy red Rhododendrons with their sweet scent, or the ebbing and flowing rivers highlighted by the thick forests and picturesque waterfalls, this place has it all. The quintessential wildlife experience is all wrapped up, waiting to be explored by those who wish to unlock the mysteries that nature has to offer. The rivers are often visited by Musk deer, Foxes, and Porcupines, with monkeys spotted in the trees. Even leopards or bears are spotted in these areas after midnight and can be observed from a safe distance.",
      info2:
        "The unexplored valley of Chopta lies at the heart of the Kedarnath Wildlife Sanctuary and hence acquaints a visitor with a distinguished variety of flora and fauna. Be it the rosy red Rhododendrons with their sweet scent, or the ebbing and flowing rivers highlighted by the thick forests and picturesque waterfalls, this place has it all. The quintessential wildlife experience is all wrapped up, waiting to be explored by those who wish to unlock the mysteries that nature has to offer. The rivers are often visited by Musk deer, Foxes, and Porcupines, with monkeys spotted in the trees. Even leopards or bears are spotted in these areas after midnight and can be observed from a safe distance.",
      info3:
        "Staying at The Bunker House gives early and prime access to these spots, where you can satiate your nature-loving instincts by observing it unfold in its most pristine form first thing in the morning, during walks.",
      img: IntoTheWild_img,
    },
    {
      title: "River Trail",
      info: "A walk to remember for a lifetime, with a canopy of trees surrounding rivers gleaming with sunlight, it is perfect for a little adventure. The familiar scent of mist and wet mud, as well as spectacular sights of waterfalls every few metres, alongside the mini streams, a river trail is definitely the most rewarding part of the journey to Chopta.",
      img: RiverTrail_img,
    },
    {
      title: "Stargazing",
      info: "In the immortal words of William Wordsworth, “The stars are mansions built by nature’s hand”. The twinkling stars, an essential symbol of hope and wonder, are the gateways to the vast expanse of space where our planet floats. The night sky filled with radiant stars provides the perfect backdrop for a bonfire among the sweet chirpings of crickets. Spotting the various constellations during the mesmerising lantern walks organised by us on occasions in the cool breeze is definitely one of the best things to be experienced in life.",
      img: Stargazing_img,
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Experience - The Bunker House</title>
        <meta name="description" content="Experience the Best for The Bunker House. " />
      </Helmet>
      <div className="relative mb-10">
        <img
          src={Experience_LandingImg}
          alt=""
          className="w-full max-h-[90vh] object-cover object-center"
        />
      </div>

      {data.map((card, id) => (
        <InformationCard card={card} id={id + 1} />
      ))}
    </div>
  );
};

export default ExperienceScreen;
