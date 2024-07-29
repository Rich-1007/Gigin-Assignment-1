import React from "react";

const PetInfo = ({petData}) => {
    console.log(petData);
  return (
    <>
      <div className="flex flex-col border-b border-gray-300 gap-2 lg:py-4">
        <span className="text-gray-400 font-semibold text-xl ">
          {petData?.animal.toUpperCase()}
        </span>

        <span className="text-gray-600 font-semibold text-4xl">
          Name : {petData?.name}
        </span>

        <span className="text-gray-600 font-semibold">
          Breed : {petData?.breed}
        </span>
      </div>

      <div className="flex flex-row gap-10 text-sm text-gray-700 border-b border-gray-300 py-3">
        <span>City : {petData?.city}</span>
        <span>State : {petData?.state}</span>
      </div>

      <div className="py-7 text-start">
        <p className="text-gray-600 font-Poppins text-xl ">
          {petData?.description}
        </p>
      </div>
    </>
  );
};

export default PetInfo;
