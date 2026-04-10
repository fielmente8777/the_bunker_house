import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
// import logo from "../assets/logo.svg";
import Popup from "reactjs-popup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { bookingURL } from "../csconfig";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(true);
  return (
    <div className="max-w-[1600px] mx-auto z-50">
      <nav className="shadow-md z-50 bg-[#37a08c] bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex flex-col items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={"/logo.png"} alt="Logo" className="w-20 h-20" />
                {/* <p className="text-sm">
                  <span className="font-bold text-white">The Bunker House</span>
                </p> */}
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/" ? "border-b-2 border-[#88C9B1]" : ""
                } font-semibold `}
              >
                Home
              </Link>

              <Link
                to="/chopta/the-bunker-house"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/chopta/the-bunker-house"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                The Bunker House
              </Link>

              <Link
                to="#"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/kedarnath" ||
                  location.pathname === "/tungnath"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                <Popup
                  trigger={
                    <button className={` text-white font-semibold `}>
                      Nearby
                    </button>
                  }
                  position={"bottom center"}
                  on={["hover", "focus"]}
                  arrow={false}
                >
                  <div className="z-50 ml-9 bg-[#88C9B1] rounded-sm ">
                    <Link
                      to="/chopta"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Chopta
                    </Link>
                    <Link
                      to="/kedarnath"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Kedarnath
                    </Link>
                    <Link
                      to="/tungnath"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Tungnath
                    </Link>
                  </div>
                </Popup>
              </Link>
              <Link
                to="/chopta/stay"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/chopta/stay" ||
                  location.pathname === "/chopta/stay/privatedeluxeroom" ||
                  location.pathname === "/chopta/stay/bunkroom" ||
                  location.pathname === "/chopta/stay/familyroom"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                <Popup
                  trigger={
                    <button className={` text-white font-semibold `}>
                      Stay
                    </button>
                  }
                  position={"bottom center"}
                  on={["hover", "focus"]}
                  arrow={false}
                >
                  <div className="z-50 ml-16 bg-[#88C9B1] rounded-sm ">
                    <Link
                      to="/chopta/stay/privatedeluxeroom"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Private Deluxe Room
                    </Link>
                    <Link
                      to="/chopta/stay/bunkroom"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Bunk Room
                    </Link>
                    <Link
                      to="/chopta/stay/familyroom"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Family Room
                    </Link>
                  </div>
                </Popup>
              </Link>
              <Link
                to="/chopta/cafe"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/chopta/cafe"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                <Popup
                  trigger={
                    <button className={` text-white font-semibold `}>
                      Cafe
                    </button>
                  }
                  position={"bottom center"}
                  on={["hover", "focus"]}
                  arrow={false}
                >
                  <div className="z-50 bg-[#88C9B1] rounded-sm ">
                    <Link
                      to="/chopta/cafe"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      The Bunker House Cafe
                    </Link>
                    <Link
                      to="/chopta/cafe"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      The Bunker House 2.0 Food Court
                    </Link>
                  </div>
                </Popup>
              </Link>

              <Link
                to="/chopta/experience"
                onClick={() => window.scrollTo(0, 0)}
                className={` text-white ${
                  location.pathname === "/chopta/experience" ||
                  location.pathname === "/chopta/experience/trekking" ||
                  location.pathname === "/chopta/experience/pilgrimage"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                <Popup
                  trigger={
                    <button className={` text-white font-semibold `}>
                      Experience
                    </button>
                  }
                  position={"bottom center"}
                  on={["hover", "focus"]}
                  arrow={false}
                >
                  <div className="z-50 bg-[#88C9B1] rounded-sm ">
                    <Link
                      to="/chopta/experience/trekking"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Trekking
                    </Link>
                    <Link
                      to="/chopta/experience/pilgrimage"
                      onClick={() => window.scrollTo(0, 0)}
                      className="py-1 px-3 block text-sm font-medium text-white border-b outline-none hover:text-black transition duration-300"
                    >
                      Pilgrimage
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Into the Wild
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      River Trail
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Star Gazing
                    </Link>
                  </div>
                </Popup>
              </Link>

              <Link
                to="/chopta"
                onClick={() => window.open(bookingURL, "_blank")}
                className={` text-white ${
                  location.pathname === "/chopta/reservation"
                    ? "border-b-2 border-[#88C9B1]"
                    : ""
                } font-semibold `}
              >
                Reservation
              </Link>

              <Link
                rel="noreferrer"
                target="_blank"
                to="/chopta"
                onClick={() => {
                  window.open(
                    "https://live.ipms247.com/booking/book-rooms-thebunkerhousecafeandstay",
                    "_blank"
                  );
                }}
                className="text-[#37A08C] bg-white border border-[#37A08C] px-4 py-2 rounded-full hover:bg-[#37A08C] hover:text-white transition duration-300 ease-linear  font-semibold "
              >
                Book Now
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <svg
                  className=" w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${!mobileMenu && "hidden"} mobile-menu  z-50`}>
          <ul className="">
            <li className="active">
              <Link
                to="/"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className=" px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="active">
              <Link
                to="/chopta/the-bunker-house"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className=" px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                The Bunker House
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className="px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Locations
                <ExpandMoreIcon
                  className="float-right"
                  onClick={() => setDropDown4(!dropDown)}
                />
                {dropDown4 ? (
                  <div className="pt-3 z-70">
                    <Link
                      to="/chopta"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown4(!dropDown4);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      chopta
                    </Link>
                    <Link
                      to="/kedarnath"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown4(!dropDown4);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Kedarnath
                    </Link>
                    <Link
                      to="/tungnath"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown4(!dropDown4);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block  text-sm font-medium text-white border-b border-white hover:text-white transition duration-300"
                    >
                      Tungnath
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/chopta/stay"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className="px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Stay
                <ExpandMoreIcon
                  className="float-right"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown ? (
                  <div className="pt-3 z-70">
                    <Link
                      to="/chopta/stay/privatedeluxeroom"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Private Deluxe Room
                    </Link>
                    <Link
                      to="/chopta/stay/bunklroom"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block  text-sm font-medium text-white border-b border-white hover:text-white transition duration-300"
                    >
                      Hostel Room
                    </Link>
                    <Link
                      to="/chopta/stay/familyroom"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium border-b border-white hover:text-white transition duration-300"
                    >
                      Family Room
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/chopta/cafe"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className="px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Cafe
                <ExpandMoreIcon
                  className="float-right"
                  onClick={() => setDropDown3(!dropDown3)}
                />
                {dropDown3 ? (
                  <div className="pt-3 z-70">
                    <Link
                      to="/chopta/cafe/cafe"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      The Bunker House Cafe
                    </Link>
                    <Link
                      to="/chopta/cafe/foodcourt"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown3(!dropDown3);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block  text-sm font-medium text-white border-b border-white hover:text-white transition duration-300"
                    >
                      The Bunker House 2.0 Food Court
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/chopta/experience"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className="px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Experience
                <ExpandMoreIcon
                  className="float-right"
                  onClick={() => setDropDown2(!dropDown2)}
                />
                {dropDown2 ? (
                  <div className="pt-3 z-70">
                    <Link
                      to="/chopta/experience/trekking"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      The Path of Wayfarers
                    </Link>
                    <Link
                      to="/chopta/experience/pilgrimage"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block  text-sm font-medium text-white border-b border-white hover:text-white transition duration-300"
                    >
                      Pilgrimage
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Into the Wild
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      River Trail
                    </Link>
                    <Link
                      to="/chopta/experience"
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                        setDropDown(!dropDown);
                        window.scrollTo(0, 0);
                      }}
                      className="py-1 px-3 block text-white text-sm font-medium  border-b border-white hover:text-white transition duration-300"
                    >
                      Star Gazing
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/chopta"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.open(bookingURL, "_blank");
                }}
                className="px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Reservation
              </Link>
            </li>
            {/* <li>
              <Link
                to="/chopta/contactus"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  window.scrollTo(0, 0);
                }}
                className=" px-5 py-4 block text-white text-sm font-medium hover:text-white transition duration-300"
              >
                Contact Us
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
