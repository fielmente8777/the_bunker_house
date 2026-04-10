import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const KerdarTungCard = ({ card, id }) => {
  return (
    <>
      {card.title && (
        <div>
          {id % 2 !== 0 ? (
            <div className="py-10">
              <div className="flex items-center flex-col lg:flex-row xl:flex-row bg-[#88C9B1] ">
                {Array.isArray(card.img) ? (
                  <Swiper
                    loop={true}
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
                    {card.img.map((image) => (
                      <SwiperSlide>
                        <img
                          src={image}
                          alt=""
                          className="w-screen lg:w-[50%] xl:w-[50%]"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={card.img}
                    alt=""
                    className="w-screen lg:w-[50%] xl:w-[50%]"
                  />
                )}

                <div className="text-center xl:text-left lg:text-left pb-5 xl:px-20 xl:py-10 h-[100%] w-screen lg:w-[50%] xl:w-[50%]">
                  <p className="font-semibold text-center text-xl text-white mb-10">
                    {card.title}
                  </p>

                  <Swiper
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mt-10"
                  >
                    {card.info.map((info, i) => (
                      <SwiperSlide key={i} className="text-center">
                        <h5 className="leading-7 text-xl text-[#363636] mb-3 font-bold">
                          {info.head}
                        </h5>

                        <p className="leading-7  mb-3">{info.para}</p>
                      </SwiperSlide>
                    ))}
                  </Swiper>

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
            <div className="py-20 ">
              <div className="flex items-center flex-col lg:flex-row xl:flex-row bg-[#88C9B1]">
                <div className="text-center xl:text-left lg:text-left p-3 pb-5 xl:px-20 xl:py-10 w-screen lg:w-[50%] xl:w-[50%]">
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
                <div className="w-full lg:w-[50%] xl:w-[50%] h-full">
                  {Array.isArray(card.img) ? (
                    <Swiper
                      loop={true}
                      // autoplay={{
                      //   delay: 2000,
                      //   disableOnInteraction: false,
                      // }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="w-full h-full object-cover"
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
                        className={`w-full h-full ${card.title.includes("Kedarnath")?"scale-x-[-1]":"scale-x-[1]"} `}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default KerdarTungCard;
