import { useEffect, useState } from "react";

const usePet = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getPetsData(searchParams) {
    let url = import.meta.env.VITE_PET_API;

    if (searchParams) {
      const { size } = searchParams;
      if (size !== 0) {
        url = `${url}?animal=${searchParams.get(
          "animal"
        )}&location=${searchParams.get("location")}&breed=${searchParams.get(
          "breed"
        )}`;
      }
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.pets);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getPetsData();
  }, []);
  return { data, isLoading, isError, getPetsData };
};

export default usePet;
