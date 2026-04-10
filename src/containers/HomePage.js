import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Home_img3 from "../assets/FamilyRoom_img1.jpg";
import home_img from "../assets/home_img-2.jpg";
import Chopta from "../assets/Home_img3.jpeg";
import Home_img_2 from "../assets/HostelRoom_img3.png";
import kedarnath from "../assets/kedarnathtemple.png";
import Home_img_1 from "../assets/PrivateDeluxeRoom_img1.jpeg";
import route_1 from "../assets/route-1.png";
import route_2 from "../assets/route-2.png";
import Tungnath from "../assets/Tungnathtemple.png";
import { Container, Section } from "../components";
import Form from "../components/Form";
import TwoColCard from "../components/TwoColCard";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []);

  const card = {
    src: home_img,
    title: "About Bunker House",
    description: [
      "The Bunker House, an unparalleled Cafe and Stay property located in this very ‘Mini Switzerland of Uttarakhand’, empowers its visitors to experience the spectacular beauty of Chopta without compromising on the comfort.",
      "The Multi - Cuisine Cafe is built on the concept of shared experiences, with a common area complete with fun activities and a distinguished view, fit for both indoor and outdoor fun. The accommodation is focused on ensuring privacy while also giving an option to bunk together. The all over decor blends with the earthy tones of the surroundings and radiates a homely vibe.",
      "With an unrelenting commitment to the environment, we use solar power and organise adventurous yet environment friendly activities that take your exploration of the beauty of Chopta up a notch. A humble and contemporary start up, we stand for quality and integrity in all that we do, and strive to make The Bunker House your home, away from home.",
    ],
  };

  const accommodations = [
    {
      img: Home_img_1,
      title: "Private Deluxe Room",
    },
    {
      img: Home_img_2,
      title: "Hostel Room / Bunk Room",
    },
    {
      img: Home_img3,
      title: "Family Room",
    },
  ];

  const explore = [
    {
      src: Chopta,
      title: "Chopta",
      href: "/chopta",
    },
    {
      src: kedarnath,
      title: "Kedarnath Temple",
      href: "/kedarnath",
    },
    {
      src: Tungnath,
      title: "Tungnath temple",
      href: "/tungnath",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best Hotel, Resort , Cafe and Restaurant in Chopta - The Bunker House
        </title>
        <meta
          name="description"
          content="The Bunker House is the best resort and Hotel in Chopta. Enjoy top-notch accommodations, cafe, and restaurant in the best hotel and resort in Chopta."
        />
      </Helmet>

      <section>
        <div className="relative max-w-[1600px] mx-auto w-full lg:aspect-[4/1.66] aspect-[4/2.9]">
          {/* <img
          src={home_img}
          alt=""
          className="w-full h-[90vh] object-cover object-center"
        /> */}
          <video loop autoPlay muted className="object-cover w-full h-full">
            <source src={"/TBH-Teaser.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {showButton && (
            <div className="mx-auto absolute z-20 top-1/2 text-center align-middle w-full">
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=jO630d4A4J4",
                    "_blank"
                  )
                }
                className="border-white border-2 hover:bg-app-primary hover:border-app-primary mx-auto bg-transparent text-white px-3 py-2 "
              >
                WATCH ON YOUTUBE
              </button>
            </div>
          )}
        </div>
      </section>

      <Section>
        <Container>
          <TwoColCard {...card} />
        </Container>
      </Section>

      <Section>
        <Section className=" bg-[#88C9B1] max-w-[1600px] mx-auto">
          <Container>
            <article className="flex flex-col items-center justify-center">
              <h2 className="text-4xl max-md:text-3xl font-semibold px-4 text-[#37A08C]">
                Accommodations
              </h2>
              <p className="text-base mt-5 text-center font-normal text-[#363636] max-w-5xl">
                Astounded by the diverse offerings of this alluring valley in
                Uttarakhand, and keeping in mind that it is appealing to various
                travelling styles and a wide range of travellers, we have come
                up with a one-stop destination for all.
              </p>
            </article>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
              {accommodations.map((item, index) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-md object-cover object-center"
                  />
                  <h3 className="text-2xl font-medium mt-5 text-center text-[#363636]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  window.open("/", "_parent");
                }}
                className="py-2 px-6 mt-5 font-medium text-base rounded-full w-fit text-white bg-[#37A08C] hover:bg-[#6dc1b2] hover:text-app-secondary transition duration-300"
              >
                Know More
              </button>
            </div>
          </Container>
        </Section>
      </Section>

      <Section>
        <Container>
          <h2 className="lg:text-4xl text-2xl text-center font-semibold  text-[#37A08C]">
            Explore Prestigious Destinations
          </h2>
          <div className="grid lg:grid-cols-3 gap-5  mt-14 max-md:mt-7">
            {explore.map((item, index) => (
              <div className="" key={index}>
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-md w-full aspect-[4/3] object-cover object-right"
                  />
                  <h3 className="absolute bottom-2 w-max left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#37A08C] font-semibold rounded-md bg-white px-4 py-2">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      window.open(item.href, "_parent");
                    }}
                    className="py-2 px-6 mt-5 font-medium text-base rounded-full w-fit text-white bg-[#37A08C] hover:bg-[#6dc1b2] hover:text-app-secondary transition duration-300"
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold text-center  text-[#6dc1b2]">
            Routes
          </h1>

          <div className="flex flex-col items-center justify-start">
            <h3 className="text-2xl font-semibold mt-5 text-center text-[#6dc1b2]">
              Popular Routes To Reach The Bunker House
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col  items-center justify-center">
              <img src={route_1} alt="" className="rounded-md w-full" />
            </div>

            <div className="flex flex-col  items-center justify-center">
              <img src={route_2} alt="" className="rounded-md w-full" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/dir//the+bunker+house+chopta",
                  "_blank"
                );
              }}
              className="py-2 px-6 font-medium text-base rounded-full w-max text-white bg-[#37A08C] hover:bg-[#6dc1b2] hover:text-app-secondary transition duration-300"
            >
              View Maps
            </button>
          </div>
        </Container>
      </Section>
      <div className="lg:pt-[6rem] lg:pb-[10rem] py-5">
        <Section className="bg-[#88C9B8] max-w-[1600px] mx-auto">
          <Container>
            <div className="grid lg:grid-cols-7 gap-1">
              <div className="lg:col-span-5">
                <h2 className="lg:text-2xl text-lg text-[#37A08C]">
                  To guarantee an unforgettable stay at{" "}
                  <strong>The Bunker House,</strong> please fill out the inquiry
                  form.
                </h2>
                <p className="text-base text-app-secondary mt-6">
                  We’re here to assist you with any questions or special
                  requests you may have regarding your stay. Whether you’re
                  seeking information about our amenities, room availability, or
                  local attractions, our team is ready to help make your visit
                  exceptional. Your satisfaction is our priority, and we look
                  forward to welcoming you!
                </p>
              </div>
              <div className="lg:col-span-2 relative w-full max-md:mt-4">
                <div className="lg:absolute w-full lg:top-[60%] right-0 lg:transform  lg:-translate-y-1/2">
                  <Form />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default HomePage;
