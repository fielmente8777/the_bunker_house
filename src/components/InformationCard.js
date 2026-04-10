import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InformationCard = ({ card, id }) => {
  return (
    <>
      {card.title && (
        <div>
          {id % 2 !== 0 ? (
            <div className="py-10">
              <div className="flex items-center flex-col lg:flex-row xl:flex-row bg-[#88C9B1] ">
                {Array.isArray(card.img) ? (
                  <Swiper
                    // loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-screen lg:w-[50%] xl:w-[50%]"
                  >
                    {card.img.map((image, i) => (
                      <SwiperSlide key={i}>
                        <div className="w-full h-full aspect-[4/3] relative">
                          <img
                            src={image}
                            alt={card.title}
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full h-full aspect-[4/3]">
                    <img
                      src={card.img}
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                )}

                <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                  <p className="font-semibold text-xl mb-5">{card.title}</p>
                  <p className="leading-7 mb-3">{card.info}</p>

                  <p className="leading-7 mb-3">{card.info2}</p>

                  <p className="leading-7 mb-3 italic">{card.info3}</p>

                  <p style={{ fontStyle: "italic" }} className="leading-7 mb-3">
                    {card.distanceInfo}
                  </p>

                  {card.route && (
                    <Link
                      to={`${card.route}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="m-auto py-2 px-4 font-medium text-sm text-black bg-[#6dc1b2] rounded-full xl:float-left hover:text-[#fff] transition duration-300"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20">
              <div className="flex items-center flex-col lg:flex-row xl:flex-row bg-[#88C9B1]">
                <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                  <p className="font-semibold text-xl mb-5">{card.title}</p>
                  <p className="leading-7 mb-3">{card.info}</p>

                  <p className="leading-7 mb-3">{card.info2}</p>

                  <p className="leading-7 mb-3 italic">{card.info3}</p>

                  <p style={{ fontStyle: "italic" }} className="leading-7 mb-3">
                    {card.distanceInfo}
                  </p>

                  {card.route && (
                    <Link
                      to={`${card.route}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="m-auto py-2 px-4 font-medium text-sm text-black bg-[#6dc1b2] rounded-full xl:float-left hover:text-[#fff] transition duration-300"
                    >
                      Read More
                    </Link>
                  )}
                </div>
                {Array.isArray(card.img) ? (
                  <Swiper
                    // loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-screen lg:w-[50%] xl:w-[50%]"
                  >
                    {card.img.map((image, i) => (
                      <SwiperSlide key={i}>
                        <div className="w-full h-full aspect-[4/3] relative">
                          <img
                            src={image}
                            alt={card.title}
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full h-full aspect-[4/3]">
                    <img
                      src={card.img}
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InformationCard;
