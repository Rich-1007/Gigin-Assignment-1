import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PetCard from "../components/PetCard";
import SearchForm from "../components/SearchForm";
import usePet from "../hooks/usePet";
const Home = () => {
  const { data, isLoading, isError, getPetsData } = usePet();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getPetsData(searchParams);
  }, [searchParams]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-gray-200 min-h-svh pb-14">
      <div className="lg:px-10 px-2 pt-6  ">
        <div className="bg-gray-100 lg:px-4 px-2 py-3 rounded-xl flex justify-center ">
          <SearchForm />
        </div>
      </div>

      <div className="lg:px-10 px-2 py-6 ">
        <div className="bg-gray-100 gap-6 shadow-lg grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] lg:px-4 px-8 py-5 rounded-xl">
          {isError ? (
            <h1>Failed to fetch data</h1>
          ) : (
            data?.map((item) => (
              <Link
                to={`/petDetails?id=${item.id}`}
                key={item.id}
                className="bg-red-100"
              >
                <PetCard item={item} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
