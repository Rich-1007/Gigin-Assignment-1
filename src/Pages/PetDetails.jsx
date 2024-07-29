import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PreviewsImage from "../components/PreviewsImage";
import PetInfo from "../components/PetInfo";

const PetDetails = () => {
  const [petData, setPetData] = useState();
  const [searchParams] = useSearchParams();
  const [mainImage, setMainImage] = useState();

  let id = searchParams.get("id");

  async function getPetsData() {
    const res = await fetch(`${import.meta.env.VITE_PET_API}?id=${id}`);
    const data = await res.json();
    setPetData(data.pets);
    setMainImage(data.pets[0].images[0]);
  }

  useEffect(() => {
    getPetsData();
  }, [searchParams]);

  function HandleFirstImage(e) {
    setMainImage(e);
  }

  return (
    <>
      <div className="bg-gray-200">
        <div className=" lg:px-10 px-2 py-6">
          <div className="bg-gray-100  gap-6 shadow-lg flex flex-wrap justify-evenly px-4 py-5 rounded-xl">
            <div className="flex lg:flex-row  flex-col  w-full gap-8">
              <div className=" lg:border-r lg:border-gray-400 lg:px-2 lg:w-1/2  flex lg:flex-row flex-col  lg:space-x-2">
                <div className="lg:w-full  flex justify-center lg:items-center">
                  {petData && (
                    <img
                      src={mainImage}
                      alt=""
                      className=" rounded-lg lg:h-full w-full object-cover"
                    />
                  )}
                </div>

                {petData && (
                  <div className="py-2 lg:py-0 flex flex-row lg:flex-col justify-evenly  lg:w-auto w-full ">
                    {petData[0]?.images.map((image, index) => (
                      <PreviewsImage
                        key={index}
                        handleImages={HandleFirstImage}
                        imgSrc={image}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:w-1/2 flex flex-col ">
                {petData && <PetInfo petData={petData[0]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetails;
