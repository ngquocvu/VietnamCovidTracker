import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/news/Carousel";
import News from "../components/news/News";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";

const NewsPage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("news"));
  return (
    <>
      <main className="flex w-full px-1 flex-col items-center pt-4 pb-6 items-center justify-center  md:max-w-5xl ">
        <div className="flex md:w-2/3 w-full pb-4">
          <Carousel />
        </div>
        <News />
      </main>
    </>
  );
};

export default NewsPage;
