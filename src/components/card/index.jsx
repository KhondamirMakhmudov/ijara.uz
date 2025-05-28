const Card = ({ title, children, icon }) => {
  return (
    <div className=" flex-1 min-h-[300px] w-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-start justify-baseline">
      <div className="bg-[#407BFF] p-[15px] rounded-md inline-block">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
