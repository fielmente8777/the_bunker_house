import TungnathBanner from "../assets/p.jpg";

import { Helmet } from "react-helmet";
import g4 from "../assets/Panchkedars_img.jpg";
import aboutKedarnath from "../assets/Tungnathtemple.png";
import g1 from "../assets/p.jpg";
import g2 from "../assets/tungnath/IMG_4544.25a702d4d333ada17eb9.png";
import ChoooseKedarnath from "../assets/tungnath/IMG_4548.e05c12be6b2b95392812.png";
import g3 from "../assets/tungnath/IMG_4549.e652738e54812e20566f.png";
import BookNow from "../components/BookNow";
import KerdarTungCard from "../components/KedarTungCard";

const TungnathHome = () => {
  const data = [
    {},
    {
      title: "About Tungnath Temple",
      info: "Tungnath, the world's highest Shiva temple, is a gem nestled in the Garhwal Himalayas. At 3,680 meters, this sacred site is part of the revered Panch Kedars. According to legend, when Lord Shiva evaded the Pandavas by transforming into a bull, his arms surfaced here, adding to the temple's mystical allure. The 3.5-kilometer trek to Tungnath offers breathtaking views of snow-capped peaks, verdant meadows, numerous waterfalls, and diverse flora and fauna, including species like the Himalayan monal and musk deer.",
      info2:
        "Continuing from Tungnath, the trek to Chandrashila peak, at 4,000 meters, is an additional 1.5 kilometers. This ascent is both challenging and rewarding, providing panoramic vistas of the surrounding mountains. The Chandrashila trek is also famous for its night treks, allowing adventurers to experience the serene beauty of the Himalayas under a starlit sky and capture a beautiful sunrise.",
      img: aboutKedarnath,
      route: "",
    },
    {
      title: "Why Choose Us for your Tungnath experience?",
      info: [
        {
          head: "Prime Location in Chopta",
          para: "Just 13 km from the base of the Tungnath trek, The Bunker House is the last developed property before the campsite. This prime spot ensures you can kick off your adventure with ease and convenience. Whether you’re gearing up for the trek or winding down afterwards, the location makes everything super convenient!",
        },
        {
          head: "Facilities Like No Other in the Valley",
          para: "In a valley where electricity and signals are scarce, The Bunker House stands out with its luxurious facilities. Powered by a high-capacity solar plant, we offer 24/7 electricity, hot water, Wi-Fi, deluxe rooms, bunk beds, drivers’ room and more. Our attention to detail and commitment to quality ensure a relaxing retreat before or after your trek.",
        },
        {
          head: "Diverse Dining Options",
          para: "We pride ourselves on a menu that caters to every craving. Whether you're yearning for local flavors, comfort food, or international cuisine, we’ve got you covered. Our kitchen focuses on fresh, high-quality ingredients to make every meal a memorable experience. At The Bunker House, your taste buds are in for a treat, ensuring every bite is as delightful as your adventure!",
        },
        {
          head: "Stunning views of Tungnath and Chnadrashila",
          para: "Why stop at a viewpoint when you can experience breathtaking vistas right from The Bunker House? Enjoy the best views of the majestic Tungnath Temple and the towering Chandrashila peak. Wake up to panoramic Himalayan landscapes and soak in serene sunrise, a visual treat that will make your stay unforgettable!",
        },
        {
          head: "Pet friendly and Fun filled",
          para: "At The Bunker House, we warmly welcome your furry companions, making it the perfect choice for pet-loving travelers. The property is brimming with activities, including games, snooker, books, and hidden gems like secret waterfalls to explore nearby. Whether you're enjoying a fun game with friends, discovering secluded spots, or simply relaxing, there’s something for everyone at The Bunker House.",
        },
      ],
      img: ChoooseKedarnath,
      route: "",
    },
  ];

  const gallery = [g1, g3, g2, g4];

  const data2 = {
    title:
      "Secure your reservation now for an exceptional experience in Tungnath.",
    desc: "A scene of adventure, spirituality, and breathtaking natural beauty, Tungnath is a memory of a lifetime. Located in the Garhwal Himalayas, Tungnath is not just a trek, but a spiritual journey that immerses you in the serene landscapes and rich culture of Uttarakhand.What makes this trip different is the sense of peace and tranquility you’ll experience as you trek through dense forests, rugged terrain, and scenic meadows, all while being surrounded by snow-capped peaks. Dedicated to Lord Shiva, it binds your heart and soul into a bond that etches a memory of peace and tranquility . As you approach the temple, the sheer beauty of the surroundings and the spiritual significance of the place create a deeply moving experience, making this trip more than just an adventure.When it comes to accommodation, there are plenty of options that cater to every kind of traveler. From cozy hostels near Tungnath for those looking for an affordable and social atmosphere to more luxurious options like a resort near Tungnath, The Bunker House caters to every kind of traveler. If you prefer the convenience of a hotel, you can find several hotels near Tungnath, where The Bunker House offers great facilities to relax after a long day of trekking.After a day of exploration, a stop at the best cafe in Tungnath at The Bunker House is the perfect way to soak in the mountain breeze. Reflect on your journey to the land of Gods with a heavenly site and comfort at hand with us.In short, a trip to Tungnath is not just a trek; it’s an unforgettable journey that blends natural beauty, spirituality, and adventure in the most unique way.",
    btn: "Book Now",
    linkName:
      "https://live.ipms247.com/booking/book-rooms-thebunkerhousecafeandstay",
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>
          Best Hotel, Hostels, Resort and Cafe Near Tungnath - The Bunker House
        </title>
        <meta
          name="description"
          content="The Bunker House is the best hotel, hostels, resort and cafe Near Tungnath. Enjoy top-notch accommodations, cafe, and restaurant in the best hotel and resort in Tungnath."
        />
      </Helmet>
      <div className="relative mb-20">
        <img
          src={TungnathBanner}
          alt=""
          className="w-full max-h-[90vh] object-cover object-center"
        />
        <div className="xl:absolute xl:bottom-[-15%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-14%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Tungnath Temple
          </h1>

          <p className="my-5 font-medium text-[#363636]">
            {/* Dedicated to Lord Shiva and also a part of the Panch Kedars, this
            temple acts as the mode of spiritual awakening and healing for all
            its visitors, who return with a mind full of devotion and a heart
            full of love and admiration. It is one of the holiest pilgrimage
            sites for Hindus, renowned for its stunning backdrop of snow-capped
            peaks and serene ambiance. */}
            Home to the highest Shiva temple in the world, Tungnath is one of
            the revered Panch Kedars. The trek to Tungnath and onward to
            Chandrashila is a feast for the senses, offering breathtaking views
            of snow-capped peaks and lush landscapes. Beyond its spiritual
            allure, the Tungnath and Chandrashila trek is a renowned snow-winter
            trek, drawing adventurers from around the globe for an unforgettable
            experience.
          </p>
        </div>
      </div>

      {data.map((card, id) => (
        <KerdarTungCard card={card} id={id + 1} />
      ))}
      <section className="lg:pb-12 pb-10">
        <BookNow
          title={data2.title}
          description={data2.desc}
          btnName={data2.btn}
          linkName={data2.linkName}
        />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((data, index) => (
          <div className=" md:h-[420px]">
            <img
              className="h-full w-full object-cover"
              src={data}
              alt={`img ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TungnathHome;
