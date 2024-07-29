import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col gap-1 justify-center items-center">
      <h1 className="text-2xl font-bold">Invalid route</h1>
      <div>
        <Link to={"/"} className="">
          <div className="flex gap-1 items-center border px-3 py-1 rounded-xl bg-gray-100 border-gray-600">
            <IoHomeOutline />
            Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
