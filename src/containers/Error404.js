import home_img from "../assets/home_img.png";

const Error404 = () => {
  return (
    <div className="relative">
      <img
        src={home_img}
        alt=""
        className="w-full h-[90vh] object-cover object-center"
      />
      <p
        style={{ position: "absolute", top: "38%", margin: "0 auto" }}
        className="xl:text-xl font-bold text-white tracking-wider rounded-md px-3 py-2 bg-[#88c9b1cd]"
      >
        404 : PAGE NOT FOUND
      </p>
    </div>
  );
};

export default Error404;
