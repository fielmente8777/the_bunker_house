import React from "react";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsApp = () => {




  return (
    <div className="fixed bottom-24 lg:left-3  left-4 z-20 cursor-pointer">
      <span
        onClick={() => {
          window.open("https://wa.me/919045951195?text=Hello", "_blank");
        }}
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#4DC251] hover:bg-[#39983c] hover:shadow-2xl transition-all"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">call</span>
      </span>
    </div>
  );
};

export default WhatsApp;
