
const ValuesCard = ({ card }) => {
  return (
   <div className="rounded-md bg-[#ffffff] p-3">
      <h1 className="text-2xl font-bold text-[#6dc1b2] mb-2">
        {card.title.substring(0, 1).toUpperCase()}
        <span className="text-[#6dc1b2] font-normal">
          {card.title.substring(1)}
        </span>
      </h1>
      <h1>{card.info}</h1>
    </div>
  );
};

export default ValuesCard;
