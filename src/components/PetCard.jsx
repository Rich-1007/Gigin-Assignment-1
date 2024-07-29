import React from "react";

const PetCard = ({ item }) => {
  return (
    <div className="bg-gray-200 hover:-translate-y-1 duration-500 hover:cursor-pointer hover:bg-gray-300 shadow-md hover:shadow-xl transition-all overflow-hidden px-4 py-5 rounded-lg ">
      <div>
        <div className="">
          <img
            src={item.images[0]}
            alt=""
            className="lg:h-52 w-full rounded-sm object-cover"
          />
        </div>

        <div className="py-2.5 flex flex-row justify-between">
          <span className="font-semibold text-xs text-gray-600">
            Category : {item.animal}
          </span>
          <span className="font-semibold text-xs text-gray-600">
            {item.name}
          </span>
        </div>
        <span className="line-clamp-2  text-gray-500 text-[11px]">
          {item.description}
        </span>
      </div>
    </div>
  );
};

export default PetCard;
