import { Link } from "react-router-dom";

const BookNow = ({ title, description, btnName, linkName }) => {
  return (
    <div className="max-w-[57.125rem] mx-auto lg:px-0 px-5">
      <div className="book_now lg:px-9 lg:py-12 px-5 py-8">
        <div className="flex flex-col justify-center items-center gap-9">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-xl text-white font-semibold text-center">
              {title}
            </h2>
            <p className="text-center text-base text-[#363636] lg:px-24">
              {description}
            </p>
          </div>
          <div className="">
            <Link
              rel="noreferrer"
              target="_blank"
              to="/chopta"
              onClick={() => {
                window.open(linkName, "_blank");
              }}
              className="bg-[#37A08C] text-[#363636] text-sm px-5 py-3 rounded-full"
            >
              {btnName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
