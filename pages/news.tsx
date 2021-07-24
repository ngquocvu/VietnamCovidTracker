import React from "react";
import Header from "../components/Header";
import News from "../components/news/News";

const NewsPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 justify-center min-h-screen">
      <Header currentPage="news" />
      <main className="flex flex-col items-center  w-full md:max-w-4xl p-2  flex-1  text-center">
        <News />
      </main>
    </div>
  );
};

export default NewsPage;
