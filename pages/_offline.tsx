import React from "react";
import Header from "../components/Header";

const FallBack = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800  min-h-screen">
      <main className="flex flex-col justify-center items-center font-bold w-full md:max-w-4xl py-2 md:py-6 flex-1">
        <img src="/world-banner.svg" className="w-6/12 pb-4 relative" />
        <p className="font-bold text-gray-600 text-xl md:text-2xl mt-4 mb-1">
          Bạn đang ngoại tuyến!
        </p>
        <p className=" text-sm md:text-lg font-semibold text-gray-500 ">
          Vui lòng kết nối internet để tải trang
        </p>
      </main>
    </div>
  );
};

export default FallBack;
