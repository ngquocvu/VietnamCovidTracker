import React from "react";
import Header from "../components/Header";
import News from "../components/news/News";

const WorldPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800  min-h-screen">
      <Header currentPage="world" />
      <main className="flex flex-col items-center space-y-1 w-full md:max-w-4xl p-4 md:p-4   flex-1  ">
        <div className="pb-4 text-xl md:text-3xl font-semibold animate-pulse">
          Trang đang được phát triển
        </div>
        <div className="bg-gray-200 w-full  md:w-10/12 h-64 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 w-full  md:w-8/12 h-6 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 w-full  md:w-8/12 h-6 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 w-6/12  md:w-8/12 h-6 rounded-full animate-pulse"></div>
      </main>
    </div>
  );
};

export default WorldPage;
