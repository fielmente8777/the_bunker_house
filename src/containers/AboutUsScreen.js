import React from "react";
import AboutUs_LandingImg from "../assets/AboutUs_LandingImg.jpg";
import ValuesCard from "../components/ValuesCard";
import Family_img from "../assets/Family_img.jpeg";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
const AboutUsScreen = () => {
  const values = [
    {
      title: "Gratitude",
      info: "We believe that every person we meet teaches us to be better at what we do. With it comes gratitude for all the people who accompany us on this journey, be it friends, family or travellers.",
    },
    {
      title: "Resilience",
      info: "Aspiring to upgrade the definition of what is best in terms of providing service, innovation is a constant for us to best suit the needs of our visitors.",
    },
    {
      title: "Observance",
      info: "Attention to detail and excellence in the most minute things as our holy grail, nothing goes unnoticed at The Bunker House. From the first step in, to the goodbyes laden with memories, we make sure each moment is at its finest.",
    },
    {
      title: "Warmth",
      info: "The Bunker House is all about providing a home-like feeling. We aim to add to your comfort and calm through our crafted facilities.",
    },
    {
      title: "Teamwork",
      info: "It takes all hands on deck to make TBH the best out there. With teamwork as a core value, we share responsibility and encourage accountability for our actions.",
    },
    {
      title: "Harmony",
      info: "Located in an ecologically gifted arena, we believe in acknowledging the purity of nature and the need to preserve it.Giving back more than we receive and staying sustainable is our way to remain harmonious with nature.",
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      <Helmet>
        <title>About US - The Bunker House</title>
        <meta name="description" content="About Us Bunker house " />
      </Helmet>
      <div className="relative">
        <img
          src={AboutUs_LandingImg}
          alt=""
          className="w-full max-h-[90vh] object-cover object-center"
        />

        <div className="xl:absolute xl:bottom-[-25%] xl:left-[50%] shadow-md  xl:translate-x-[-50%] 2xl:absolute 2xl:bottom-[-20%] 2xl:left-[50%] 2xl:translate-x-[-50%] bg-white w-screen xl:w-[80%] lg:w-[80%] xl:rounded-md lg:rounded-md m-auto py-3 px-5 z-40">
          <p className="my-5 font-medium italic">
            <span className="font-bold text-2xl text-[#6dc1b2] tracking-wider">
              Philosophy:
            </span>
            <br /> We believe that impeccable hospitality is not a luxury, it is
            customary.
          </p>

          <p className="my-5 font-medium italic">
            <span className="font-bold text-2xl  text-[#6dc1b2] tracking-wider">
              Vision:
            </span>
            <br /> Transforming travelers into explorers.
          </p>
        </div>
      </div>

      <div className="bg-[#6dc1b2] xl:mt-[10rem] xl:pt-10 p-5">
        <Container>
          <h1 className="md:text-5xl text-3xl text-white font-bold">
            Values : GROWTH
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {values.map((card) => (
              <ValuesCard card={card} />
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#6dc1b2] xl:mt-[10rem] xl:pt-10 p-5">
              <Container>
                <h1 className="md:text-5xl text-3xl text-white  text-center font-bold md:ml-7">
                  Founder's Story
                </h1>
      
                <div className=" flex flex-col text-center md:flex-row justify-evenly flex-wrap py-4">
                  <p className="font-normal">
                    <i className="text-white">
                      {" "}
                      A journey of a thousand miles begins with a single step. Here's
                      a peek at how our journey began with a trip to Uttarakhand!
                    </i>
                    <br />
                    <br />
                    In July 2020, We i.e. <span className="font-bold">
                      Sparsh
                    </span>{" "}
                    and <span className="font-bold">Sukriti</span>, along with our
                    adorable partner and friend Marshall the Rottweiler came to
                    Uttarakhand with our family, just like many other travellers. The
                    holy temples of Kedarnath is what attracted us, but the beauty and
                    love for Chopta is what made us want to stay. There's a saying
                    that when it's true love, you get a sign. Was it a sign that we
                    happened to stumble upon the trek to Tungnath temple just during
                    the Savan ki Shivratri? Or that our love for Chopta grew with each
                    step we took towards the breathtaking scenery that awaited us? We
                    guess so!
                    <br />
                    <img
                      src={Family_img}
                      alt=""
                      className="w-[75%] m-auto my-5 rounded-md"
                    />
                    <br /> Unlike most travellers, we didn't just capture the beauty
                    in our phone and left, we saw a place of wonder in Chopta that had
                    to be shared with the world. And that's how the novel idea of The
                    Bunker House came into being. What started as an impulsive dream
                    of two young siblings with a knack for business, started to
                    materialize into something many people would later call their
                    second home.
                    <br />
                    <br /> Like any other new and passionateidea in the world, this
                    one had a lot of challenges to it. It was far away from
                    civilization, market as well as medical facilities. There was no
                    electricity, no towers for the networks, not electrician or
                    plumbing services available to set this up. However, giving up was
                    never an option. We believed that when the going gets tough, it’s
                    the tough that get going!
                    <br />
                    <br /> With that attitude we made{" "}
                    <span className="font-bold">The Bunker House</span> the only cafe
                    and stay property in Chopta today with{" "}
                    <span className="font-bold">24×7 solar powered electricity</span>{" "}
                    with an individual solar plant (total green energy),{" "}
                    <span className="font-bold">
                      {" "}
                      Satellite Wi-Fi , Multi-cuisine food, entertainment zone{" "}
                    </span>{" "}
                    in the premises. It’s the only{" "}
                    <span className="font-bold">hostel cum hotel</span> property that
                    offers variety of stay options from Deluxe private rooms to hostel
                    rooms with bunk beds to family rooms. Being thoroughly invested in
                    every step of the way and turning challenges in to opportunities,
                    we made our dream one of the most distinctive realities of Chopta.
                    <br />
                    <br />
                    <i>
                      {" "}
                      Bringing out the best of both worlds in a blend of the lively
                      spirit of the GenZ with Millenials, with the calm and serene
                      beauty of the location, The Bunker House was modelled to be{" "}
                      <b className="font-bold">your home away from home.</b>
                    </i>
                    <br /> considering the amount of people in the past year who have
                    made it a home with their presence, we'd say the mission is
                    accomplished, but it’s just a start! And, none of this would have
                    been possible without our parent’s support in each step of the
                    way.
                    <br />
                    <br /> Our brainchild has now turned into a full-blown family
                    business, with all hands on deck. It seems like only yesterday
                    that we were discussing the possibility of opening a cafe and stay
                    among the hills of Chopta and it feels surreal to realize how far
                    we have reached. <br />
                    <br />
                    <i>
                      {" "}
                      And now, thanks to your unconditional love and support, the
                      great help from our team, and blessings from the holy abodes of
                      Tungnath, we are pleased to expand with addition to the name of
                      The Bunker House, with{" "}
                      <b className="font-bold">The Bunker House 2.0</b> in Chopta
                      valley.
                    </i>
                  </p>
                  <p className="text-white font-bold text-center">
                    #thebunkerhousein #getbunking
                  </p>
                </div>
              </Container>
            </div>
    </div>
  );
};

export default AboutUsScreen;
