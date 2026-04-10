import KedarnathBanner from "../assets/kedarnath_banner.0af09b1fcb5b9e784278.jpg";

import { Helmet } from "react-helmet";
import aboutKedarnath from "../assets/kedarnath/Group 6.png";
import ChoooseKedarnath from "../assets/kedarnath/IMG_4545.7ce2b60622465bdff0b7.png";
import g1 from "../assets/kedarnath/Rectangle 6 (1).png";
import g4 from "../assets/kedarnath/Rectangle 8.png";
import g3 from "../assets/kedarnath/Rectangle 9 (1).png";
import g2 from "../assets/tungnath/Rectangle 9 (2).png";
import BookNow from "../components/BookNow";
import KerdarTungCard from "../components/KedarTungCard";
const KedarnathHome = () => {
  const data = [
    {},
    {
      title: "About Kedarnath Temple",
      info: "Kedarnath, nestled in the Garhwal Himalayas, is renowned for its spiritual significance and stunning beauty. Home to the ancient Kedarnath Temple, one of the twelve Jyotirlingas dedicated to Lord Shiva, it attracts pilgrims seeking divine blessings. According to legend, Lord Shiva disguised himself as a bull to evade the Pandavas, and his hump emerged here, symbolizing his eternal presence. Surrounded by snow-capped peaks, lush meadows, and the serene Mandakini River, Kedarnath offers a breathtaking landscape.",
      img: aboutKedarnath,
      route: "",
      info2:
        "The trek to Kedarnath is approximately 16 kilometers (10 miles) from Gaurikund and stands at an altitude of 3,583 meters. This journey can be undertaken on foot, by pony, or via helicopter services, making it accessible to a wide range of pilgrims and trekkers. The trek enhances the allure of this sacred site, providing a profound sense of connection with nature and spirituality.",
    },
    {
      title: "Why Choose Us for your Kedarnath experience?",
      info: [
        {
          head: "Home away from home near Kedarnath",
          para: "Run by a welcoming family themselves, The Bunker House ensures you experience the warmth and comfort of a true home away from home near Kedarnath. Come as a traveller, leave as a The Bunker House family member.",
        },
        {
          head: "A Culunary delight for your food cravings",
          para: "Savor the best food near Kedarnath with flavors that make every meal memorable. From Indian to international cuisines, The Bunker House satisfies all your taste buds’ cravings. After a hard working trek, isn’t good food important After a challenging trek, treat yourself to a culinary experience that hits the spot. Great food is essential after a hard day’s work, and we’ve got you covered!",
        },
        {
          head: "Not Just a Cafe, It's a Vibe",
          para: "The Bunker House isn’t just your average cafe next door; it’s an unforgettable experience. Whether you're a solo traveler or with friends and family, it’s the perfect spot for socializing, relaxing, and soaking in the serene surroundings of Kedar valley.",
        },
        {
          head: "Nothing’s Better than a Good Night Sleep",
          para: "After an adventurous day, nothing beats a good night's sleep. Our comfortable, thoughtfully designed rooms ensure you wake up refreshed and ready for more. Let’s be honest, who doesn’t crave a cozy bed after a tiring trek? At The Bunker House, we make sure you rest easy and start each day invigorated for your next adventure.",
        },
        {
          head: "Sustainably Designed and Cozy Comforts",
          para: "Experience sustainability with style. Our accommodations feature 100% solar energy, recycled furniture, and a government-supported plastic collection center near Kedarnath, all while providing modern comforts. Who knew being green could be this cozy?",
        },
      ],
      img:ChoooseKedarnath,
      route: "",
    },
  ];

  const gallery = [
    g1,
    g2,
    g3,
    g4,
  ];
  const data2 = {
    title:
      "Secure your reservation now for an exceptional experience in Kedarnath.",
    desc: "The trek to Kedarnath is nothing short of an unparalleled experience. Seated in the majestic Himalayas, Kedarnath is not only a spiritual journey but also a challenge that attracts adventure seekers and pilgrims alike. This trek is unique on many accounts- its a blend of natural beauty, spiritual significance, and the chance to connect with the untouched landscapes of Uttarakhand. The journey starts with a breathtaking trek from Gaurikund to Kedarnath, where every step takes you closer to the divine energy. The route is filled with majestic mountains, rushing rivers, and lush green valleys, making it an experience to remember. Along the way, you’ll cross small, quaint villages and places to rest, where you can catch a glimpse of local culture.When it comes to accommodation, there’s no shortage of options to suit all kinds of travelers. From comfortable hostels near Kedarnath to resorts near Kedarnath, you’ll find something perfect for your needs. If you’re looking for a budget-friendly option, The Bunker House is a safe haven. Our hostel in Kedarnath offers a great place to meet fellow trekkers.As one of the best hotels to stay in Kedarnath, we offer some of the most stunning views of the snow-capped peaks and a relaxing atmosphere after a long trek.A visit to the cafes in Kedarnath is a must to make your experience whole! Drop by The Bunker House for a cozy hangout! Enjoy a steaming cup of tea or coffee while indulging in the best pizzas, cakes, momos, and more. With a variety of Chinese, North Indian, and Continental options, there's something to satisfy every craving! Enjoy a warm cup of tea or coffee while soaking in the views of the mountains at our premises. Whether you're staying in a resort near Kedarnath or a hostel in Kedarnath, our cozy spot is the perfect place to unwind.Kedarnath is more than just a destination; it's a journey that touches the soul, offering both adventure and serenity in one unforgettable experience.",
    btn: "Book Now",
    linkName:
      "https://live.ipms247.com/booking/book-rooms-thebunkerhousecafeandstay",
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>
          Best Hotel, Hostels, Resort and Cafe Near kedarnath - The Bunker House
        </title>
        <meta
          name="description"
          content="The Bunker House is the best hotel, hostels, resort and cafe Near kedarnath. Enjoy top-notch accommodations, cafe, and restaurant in the best hotel and resort in kedarnath."
        />
      </Helmet>
      <div className="relative mb-20">
        <img
          src={KedarnathBanner}
          alt=""
          className="w-full max-h-[90vh] object-cover object-center"
        />
        <div className="xl:absolute xl:bottom-[-15%] xl:left-[50%] xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-14%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-[#88C9B1] w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-5 px-5 z-40">
          <h1 className="font-semibold text-2xl text-white tracking-wider">
            Kedarnath Temple
          </h1>

          <p className="my-5 font-medium text-[#363636]">
            {/* Dedicated to Lord Shiva and also a part of the Panch Kedars, this
            temple acts as the mode of spiritual awakening and healing for all
            its visitors, who return with a mind full of devotion and a heart
            full of love and admiration. It is one of the holiest pilgrimage
            sites for Hindus, renowned for its stunning backdrop of snow-capped
            peaks and serene ambiance. */}
            Nestled in the breathtaking Garhwal Himalayas of Uttarakhand, India,
            Kedarnath Temple is a serene sanctuary dedicated to Lord Shiva. As
            part of the Panch Kedars and one of Hinduism's holiest and biggest
            pilgrimage sites, this ancient temple offers spiritual awakening and
            healing to its visitors.
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
          <div key={index} className=" h-[420px]">
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

export default KedarnathHome;
