import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/news/News";

const NewsPage = () => {
  return (
    <div className="flex flex-col pb-4 items-center bg-gray-50 dark:bg-gray-800 justify-center min-h-screen">
      <Header currentPage="news" />
      <main className="flex flex-col items-center py-4 px-2 w-full md:max-w-5xl px flex-1 text-center">
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
