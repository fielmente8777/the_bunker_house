import Cafe_LandingImg from "../assets/Cafe_LandingImg.png";
import Cafe_img1 from "../assets/Cafe_img1.png";
import Cafe_img2 from "../assets/Cafe_img2.png";
import Cafe_img3 from "../assets/Cafe_img3.jpeg";
import Cafe_img4 from "../assets/Cafe_img4.png";
import Cafe_img5 from "../assets/Cafe_img5.png";
import Cafe_img6 from "../assets/Cafe_img6.png";
import Cafe_img7 from "../assets/Cafe_img7.png";
import Cafe_img8 from "../assets/Cafe_img8.png";

import { Helmet } from "react-helmet";
import FoodCourt_img1 from "../assets/FoodCourt_img1.jpg";
import FoodCourt_img10 from "../assets/FoodCourt_img10.jpg";
import FoodCourt_img2 from "../assets/FoodCourt_img2.jpg";
import FoodCourt_img3 from "../assets/FoodCourt_img3.jpg";
import FoodCourt_img4 from "../assets/FoodCourt_img4.jpg";
import FoodCourt_img5 from "../assets/FoodCourt_img5.jpg";
import FoodCourt_img6 from "../assets/FoodCourt_img6.jpg";
import FoodCourt_img7 from "../assets/FoodCourt_img7.jpg";
import FoodCourt_img8 from "../assets/FoodCourt_img8.jpg";
import FoodCourt_img9 from "../assets/FoodCourt_img9.jpg";
import InformationCard from "../components/InformationCard";

const CafeSection = () => {
  const data = [
    {
      title: "Warm and Cozy Multi-Cuisine Cafe",
      info: "An open concept, our café caters to the nostalgia of childhood and the memories of the laughter while eating together during school days. Rather than a mechanical seating arrangement, we have a fluid setting that allows conversations to flow all around coupled with the aroma of our multi-cuisine delicacies. From grabbing a quick bite before a meeting to a hearty dinner after a lively trek, the café is a common arena that brings together stories from all over the world, best enjoyed with the assortment of delectable dishes assured to delight your taste buds. A Multi Cuisine café having Indian, Continental, Chinese as well as traditional Pahari and Jain delicacies is perfected by the fact that it is the only one of its kind in the valley. The indoor games, Wi-Fi round the clock, and options for books and novels only add sparkles to the whole aura of the area.",
      info3:
        "With a direct balcony view of Tungnath and Chandrashila peaks and picturesque surroundings, it is also perfect for a quiet cup of tea and some alone time or festive with music and bonfire and lots of laughter.",
      img: [
        Cafe_img1,
        Cafe_img2,
        Cafe_img3,
        Cafe_img4,
        Cafe_img5,
        Cafe_img6,
        Cafe_img7,
        Cafe_img8,
      ],
    },
    {
      title: "A Fine Food Court",
      info: "Fusing the aesthetic of elegance with simplicity, our café aims to bestow the perfect fine dining affair amidst the grandeur and charm of Chopta's lush valleys. The pristine décor complete with the warm lights reflects and enhances the essence of the beautiful location. The food, in tandem with our theme of elegant simplicity, reflects the staple diet by presenting food combinations that bring out the best flavours of one another, also including a sophisticated buffet option. A swing set, along with a small photo booth make the meal a veritable banquet.",
      img: [
        FoodCourt_img1,
        FoodCourt_img2,
        FoodCourt_img3,
        FoodCourt_img4,
        FoodCourt_img5,
        FoodCourt_img6,
        FoodCourt_img7,
        FoodCourt_img8,
        FoodCourt_img9,
        FoodCourt_img10,
      ],
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>Cafe - The Bunker House</title>
        <meta
          name="description"
          content="Get the best cafe near Chopta with The Bunker House"
        />
      </Helmet>
      <div className="relative mb-10">
        <img
          src={Cafe_LandingImg}
          alt=""
          className="w-full max-h-[90vh] h-full object-cover object-center"
        />
      </div>

      {data.map((card, id) => (
        <InformationCard card={card} id={id + 1} />
      ))}
    </div>
  );
};

export default CafeSection;
