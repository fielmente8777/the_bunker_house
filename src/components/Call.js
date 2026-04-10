import { FaPhone } from "react-icons/fa6";

function Call() {
  return (
    <div className="fixed bottom-10 lg:left-3  left-4 z-20 cursor-pointer">
      <span
        onClick={() => {
          window.open("tel:+919045951195", "_blank");
        }}
        to="tel:+919045951195"
        className="w-12 h-12 p-1 rounded-full flex items-center justify-center bg-[#6dc1b2] hover:bg-[#6dc1b2] hover:shadow-2xl transition-all"
      >
        <FaPhone size={29} color="white" />
        <span className="sr-only">call</span>
      </span>
    </div>
  );
}

export default Call;
