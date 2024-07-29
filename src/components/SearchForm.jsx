import React, { useState } from "react";
import Input from "./Input";
import { RiSearchLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [inputText, setInputText] = useState({
    animal: "",
    location: "",
    breed: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();


  async function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({
      animal: inputText.animal,
      location: inputText.location,
      breed: inputText.breed,
    });
  }
  return (
    <div>
      <form
        className="flex lg:flex-row justify-center lg:w-fit w-full "
        onSubmit={handleSubmit}
      >
        <Input
          value={inputText.animal}
          onChange={(e) => {
            setInputText((prev) => {
              return { ...prev, animal: e.target.value };
            });
          }}
          placeholder="animal"
        />

        <Input
          value={inputText.location}
          onChange={(e) =>
            setInputText((prev) => {
              return { ...prev, location: e.target.value };
            })
          }
          placeholder="location"
        />

        <Input
          value={inputText.breed}
          onChange={(e) =>
            setInputText((prev) => {
              return { ...prev, breed: e.target.value };
            })
          }
          placeholder="breed"
        />

        <button
          type="submit"
          className="space-x-1  text-sm lg:text-base hover:text-gray-400 hover:cursor-pointer text-gray-100 font-bold transition-all duration-500 hover:bg-gray-500 rounded-r-lg bg-gray-400 flex items-center px-1 lg:px-5"
        >
          <RiSearchLine />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
