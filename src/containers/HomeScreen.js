import React, { useEffect, useState } from "react";
import home_img from "../assets/home_img-2.jpg";
import Home_img_1 from "../assets/Home_img1.jpg";
import Home_img_2 from "../assets/home_img-2.jpg";
import Home_img3 from "../assets/Home_img3.jpeg";
import route_1 from "../assets/route-1.png";
import route_2 from "../assets/route-2.png";
import Main_video from "../assets/main_video.mp4";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Section } from "../components";

const HomeScreen = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>
          Best Hotel, Resort , Cafe and Restaurant in Chopta - The Bunker House
        </title>
        <meta
          name="description"
          content="The Bunker House is the best resort and Hotel in Chopta. Enjoy top-notch accommodations, cafe, and restaurant in the best hotel and resort in Chopta."
        />
      </Helmet>

      <div className="relative">
        {/* <img
          src={home_img}
          alt=""
          className="w-full h-[90vh] object-cover object-center"
        /> */}
        <video loop autoPlay muted>
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

      <div className="px-5">
        <Section>
          <Container>
            <h1 className="text-4xl mt-5 font-bold text-center text-[#6dc1b2]">
              Introduction
            </h1>
            <div className="pt-10 pb-4">
              <div className="flex items-center flex-col lg:flex-row xl:flex-row">
                <img
                  src={Home_img_1}
                  alt=""
                  className="rounded-md w-screen lg:w-[50%] xl:w-[50%]"
                />
                <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                  <p className="leading-7 mb-3">
                    Amidst the endearing meadows and playful streams, surrounded
                    by the majestic peaks of Chandrashila, Nanda Devi and
                    Chowkhamba, and blessed by the world's highest Shiva temple
                    - The Shrine of Tungnath, lies the quaint valley of Chopta.
                    The valley is crowded not by people, but myriad natural
                    wonders like waterfalls, evergreen forests and innumerable
                    species of birds and animals.
                  </p>
                </div>
              </div>
            </div>
          </Container>

          <Container>
            <div className="flex items-center flex-col lg:flex-row xl:flex-row">
              <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                <p className="leading-7 mb-3">
                  The Bunker House, an unparalleled Cafe and Stay property
                  located in this very ‘Mini Switzerland of Uttarakhand’,
                  empowers its visitors to experience the spectacular beauty of
                  Chopta without compromising on the comfort.
                </p>
                <p className="leading-7 mb-3">
                  {" "}
                  The Multi - Cuisine Cafe is built on the concept of shared
                  experiences, with a common area complete with fun activities
                  and a distinguished view, fit for both indoor and outdoor fun.
                  The accommodation is focused on ensuring privacy while also
                  giving an option to bunk together. The all over decor blends
                  with the earthy tones of the surroundings and radiates a
                  homely vibe.
                </p>
              </div>
              <img
                src={Home_img_2}
                alt=""
                className="rounded-md w-screen lg:w-[50%] xl:w-[50%]"
              />
            </div>
          </Container>

          <Container>
            <div className="flex items-center flex-col lg:flex-row xl:flex-row mt-4">
              <img
                src={Home_img3}
                alt=""
                className="rounded-md  w-screen lg:w-[50%] xl:w-[50%]"
              />
              <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                <h3 className="font-semibold text-2xl text-[#6dc1b2] tracking-wider">
                  What makes this trip to Chopta worth the trip with us?</h3>
                <p className="leading-7 mb-3">
                  A lifetime experience, Chopta offers a perfect blend of majestic views , adventure, and relaxation in the lap of nature. Known as the ‘Mini Switzerland of Uttarakhand,’ Chopta is a serene haven for nature lovers, trekkers, and those seeking a getaway from the hustle of daily life.
                  What makes Chopta worth the travel is not just its scenic beauty but also the variety of experiences it offers.
                  Whether you’re into trekking, photography, or simply soaking in the tranquil atmosphere, Chopta has something for everyone. The trek to Tungnath, the highest Shiva temple in the world, is a highlight of the region’s spiritual offering. The lush trails and panoramic views from the top leave visitors in awe, making every step of the journey memorable. For those who prefer a more laid-back experience, just exploring the surrounding meadows and breathing in the fresh mountain air is an experience in itself.
                  When it comes to accommodation, Chopta offers a range of options to suit all kinds of travelers. If you're looking for comfort with a touch of luxury.. For those on a budget or seeking a more social experience, we are one of the top hotels near Chopta offering cozy rooms with easy access to the surrounding beauty. If you’re traveling solo or with friends, our  hostel in Chopta offers affordable and fun-filled accommodations, along with the chance to meet other like-minded travelers.
                  Our cozy spot is perfect for enjoying hot beverages, local delicacies, and soaking views of a lifetime. If you look for the perfect spot to unwind, The Bunker House has got you covered with hot beverages, delicious pizzas, cakes, and momos, alongside a diverse menu featuring Chinese, North Indian, and Continental flavors. Whether you’re sitting by a fireplace or enjoying the cool mountain breeze, these cafes provide a peaceful place to relax and reflect on the day.
                  A stay at The Bunker House is designed to help visitors connect with the surroundings and fellow travelers, building connections of a lifetime. The multi-cuisine cafe is built around the idea of shared experiences, offering both indoor and outdoor spaces for relaxation and activities. The warm, earthy tones of the decor blend perfectly with the natural beauty around, creating a homely atmosphere that’s both comforting and inspiring.

                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold  text-[#6dc1b2]">Routes</h1>

            <div className="flex flex-col items-center justify-start">
              <h3 className="text-2xl font-semibold mt-5 text-center text-[#6dc1b2]">
                Popular Routes To Reach The Bunker House
              </h3>
              <button
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/dir//the+bunker+house+chopta",
                    "_blank"
                  );
                }}
                className="py-1 px-6 font-medium text-sm w-fit text-black bg-teal-100 rounded-md hover:text-app-secondary transition duration-300 my-3"
              >
                View on Google Maps
              </button>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-10 mt-5">
              <div className="flex flex-col  items-center justify-center">
                <img src={route_1} alt="" className="rounded-md w-full" />
              </div>

              <div className="flex flex-col  items-center justify-center">
                <img src={route_2} alt="" className="rounded-md w-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomeScreen;
