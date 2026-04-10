
const TwoColCard = ({ title, src, description }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className=" w-full">
        <img
          src={src}
          alt={title}
          className="h-full rounded-xl w-full "
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold mb-3 text-[#37A08C]">{title}</h2>
        {description.map((item, index) => (
          <p key={index} className="text-base !text-justify text-app-secondary">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TwoColCard;
