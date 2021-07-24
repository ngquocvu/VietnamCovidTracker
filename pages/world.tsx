import React from "react";
import Header from "../components/Header";
import News from "../components/news/News";

const WorldPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800  min-h-screen">
      <Header currentPage="world" />

      <main className="flex flex-col justify-center items-center font-bold w-full md:max-w-4xl py-2 md:py-6 flex-1">
        <img
          src="/world-banner.svg"
          className="w-8/12 pb-4 relative bg-gray-100"
        />
        <p className=" font-bold text-gray-600 text-2xl md:text-3xl mb-2">
          Trang đang được xây dựng
        </p>
        <p className=" text-md md:text-md text-indigo-500 ">
          Bạn lòng quay lại sau nhé!
        </p>
      </main>
    </div>
  );
};

export default WorldPage;
