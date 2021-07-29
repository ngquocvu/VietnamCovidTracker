import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import News from "../components/news/News";
import axios from "axios";
import { TRIGGER_HOOKS } from "../utils/constants";

const WorldPage = () => {
  return (
    <main className="flex flex-col items-center p-3  font-bold w-full md:max-w-4xl py-1 md:py-3 flex-1">
      <div className=" w-full flex-col flex items-center py-16 m-4 ">
        <img
          src="/world-banner.svg"
          className="relative h-36 md:h-72 w-6/12 pb-0 relative "
        />
        <p className="font-bold text-gray-600 text-lg md:text-2xl md:text-2xl  mt-2 md:mt-8 my-1">
          Dữ liệu chưa được cập nhật ?
        </p>
        <button
          onClick={() => {
            axios.get(TRIGGER_HOOKS);
            console.log("trigger the hook");
          }}
          className="text-white text-sm md:text-md px-4 py-2  delay-100 hover:bg-indigo-500 font-semibold shadow-lg text-white rounded-md mt-2 bg-indigo-600 p-2  cursor-pointer"
        >
          Nhấn để cập nhật dữ liệu
        </button>
      </div>
    </main>
  );
};

export default WorldPage;
