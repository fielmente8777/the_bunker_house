import { useState } from "react";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Section } from "../components";

function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleNewsletter = async () => {
    const data = {
      // Domain: "abhijeet",
      Domain: "thebunkerhouse",
      email: email,
    };
    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };

  return (
    <footer className="bg-[#37A08C] max-w-[1600px] mx-auto mt-10">
      <Section>
        <Container>
          <div className="grid lg:grid-cols-4 gap-6">
            {/* logo */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <img src="/logo.png" alt="logo" className="w-40" />
              </div>
              <h2 className="text-justify tracking-wider font-bold text-white uppercase lg:text-2xl text-lg">
                The Bunker House
              </h2>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white uppercase">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-4 mt-4">
                {quickLinks.map((item, index) => (
                  <li key={index} className="text-white text-base">
                    <Link to={item.link} onClick={() => window.scrollY(0, 0)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* get in touch */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium text-white uppercase">
                Get In Touch
              </h2>
              <ul className="flex flex-col gap-3 mt-4">
                {getInTouch.map((item, index) => (
                  <li key={index} className="text-white text-base">
                    <span
                      onClick={() =>
                        window.open(
                          item.link,
                          item.type === "location" && "_blank"
                        )
                      }
                      className="flex gap-3 text-base cursor-pointer"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* newsletter */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white capitalize">
                Subscribe To Our Newsletter
              </h2>
              <div className="flex items-center justify-center border border-white bg-transparent">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your Email Address*"
                  className="w-full p-4 text-base outline-none bg-transparent text-white placeholder:text-white"
                />
                <button
                  className="py-1 bg-white active:scale-95"
                  onClick={handleNewsletter}
                >
                  <Btn />
                </button>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}

              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                    className="border border-white p-2 cursor-pointer text-white text-3xl hover:text-app-primary hover:bg-white transition duration-300 ease-in-out"
                  >
                    {item.icon} <span className="sr-only">{item.title}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <section className="bg-[#88C9B1] py-4">
        <div className="flex justify-center items-center">
          <p className="flex max-md:flex-col justify-center gap-2 items-center text-[#363636] text-center text-base">
            <span className="flex justify-center items-center gap-2">
              <CopyRight /> The Bunker House
            </span>{" "}
            <span className="max-md:hidden">•</span>{" "}
            <span className="">All Rights Reserved</span>{" "}
            <span className="max-md:hidden">•</span>{" "}
            <span className="">
              Designed & Developed by{" "}
              <Link to="https://eazotel.com">Eazotel</Link>
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

const quickLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/chopta/the-bunker-house",
  },
  {
    title: "Stay",
    link: "/chopta/stay",
  },
  {
    title: "Cafe",
    link: "/chopta/cafe",
  },
  {
    title: "Experience",
    link: "/chopta/experience",
  },
];

const getInTouch = [
  {
    type: "location",
    title:
      "The Bunker House, Photibasa, Ukhimath, Road, Chopta, Uttarakhand 246469",
    icon: <FaLocationDot />,
    link: "https://maps.app.goo.gl/dsQTf9cGgj3jqejW6",
  },
  {
    type: "call",
    title: "+91-90459 51195",
    icon: <IoCall />,
    link: `tel:+91-9045951195`,
  },
  {
    type: "email",
    title: "harjihospitalities@gmail.com",
    icon: <MdEmail />,
    link: `mailto:harjihospitalities@gmail.com`,
  },
];

const socialLinks = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/thebunkerhousein/",
    icon: <FaInstagram />,
  },
  {
    title: "tripadvisor",
    link: "https://www.tripadvisor.in/Hotel_Review-g23191235-d23549091-Reviews-The_Bunker_House-Kanda_Rudraprayag_District_Uttarakhand.html",
    icon: <FaTripadvisor />,
  },
];

export const CopyRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81843 22.7313 5.76814 20.4816 3.51843C18.2319 1.26872 15.1816 0.00335979 12 0ZM12 22.1538C9.99176 22.1538 8.02862 21.5583 6.35883 20.4426C4.68904 19.3269 3.38759 17.7411 2.61907 15.8857C1.85055 14.0303 1.64947 11.9887 2.04126 10.0191C2.43305 8.04943 3.40011 6.24019 4.82015 4.82015C6.24019 3.40011 8.04943 2.43305 10.0191 2.04126C11.9887 1.64947 14.0303 1.85055 15.8857 2.61907C17.7411 3.38759 19.3269 4.68903 20.4426 6.35882C21.5583 8.02861 22.1538 9.99176 22.1538 12C22.1508 14.692 21.08 17.2729 19.1765 19.1765C17.2729 21.08 14.692 22.1508 12 22.1538ZM8.3077 12C8.3077 12.7749 8.55153 13.5303 9.00465 14.1589C9.45777 14.7876 10.0972 15.2578 10.8324 15.5028C11.5676 15.7479 12.3612 15.7554 13.1009 15.5244C13.8406 15.2933 14.4889 14.8353 14.9538 14.2154C15.1009 14.0195 15.3197 13.8901 15.5622 13.8556C15.8046 13.8211 16.0509 13.8843 16.2467 14.0313C16.4426 14.1784 16.572 14.3972 16.6065 14.6397C16.641 14.8821 16.5778 15.1284 16.4308 15.3242C15.7331 16.2539 14.7607 16.9405 13.6512 17.2869C12.5417 17.6332 11.3514 17.6217 10.2488 17.254C9.14616 16.8863 8.18717 16.1811 7.50762 15.2381C6.82808 14.2951 6.46241 13.1623 6.46241 12C6.46241 10.8377 6.82808 9.70485 7.50762 8.7619C8.18717 7.81894 9.14616 7.11368 10.2488 6.74598C11.3514 6.37828 12.5417 6.3668 13.6512 6.71314C14.7607 7.05948 15.7331 7.74611 16.4308 8.67577C16.5036 8.77274 16.5566 8.88311 16.5867 9.00057C16.6169 9.11802 16.6236 9.24027 16.6065 9.36033C16.5894 9.48038 16.5489 9.59589 16.4871 9.70027C16.4254 9.80465 16.3437 9.89584 16.2467 9.96865C16.1498 10.0415 16.0394 10.0945 15.9219 10.1246C15.8045 10.1548 15.6822 10.1615 15.5622 10.1444C15.4421 10.1273 15.3266 10.0867 15.2222 10.025C15.1179 9.96328 15.0267 9.88159 14.9538 9.78461C14.4889 9.16465 13.8406 8.70671 13.1009 8.47564C12.3612 8.24458 11.5676 8.25211 10.8324 8.49717C10.0972 8.74223 9.45777 9.21239 9.00465 9.84107C8.55153 10.4697 8.3077 11.225 8.3077 12Z"
        fill="#363636"
      />
    </svg>
  );
};

export const Btn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="46"
    viewBox="0 0 48 46"
    fill="none"
  >
    <rect width="48" height="46" fill="white" />
    <path
      d="M37.7071 23.7071C38.0976 23.3166 38.0976 22.6834 37.7071 22.2929L31.3431 15.9289C30.9526 15.5384 30.3195 15.5384 29.9289 15.9289C29.5384 16.3195 29.5384 16.9526 29.9289 17.3431L35.5858 23L29.9289 28.6569C29.5384 29.0474 29.5384 29.6805 29.9289 30.0711C30.3195 30.4616 30.9526 30.4616 31.3431 30.0711L37.7071 23.7071ZM11 24H37V22H11V24Z"
      fill="#37A08C"
    />
  </svg>
);
