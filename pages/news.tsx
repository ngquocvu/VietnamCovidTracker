import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/news/Carousel";
import News from "../components/news/News";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";

const NewsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = setPage("news");
    dispatch(action);
  }, []);
  return (
    <>
      <main className="flex flex-col items-center pb-6 px-2 w-full md:max-w-5xl px flex-1 text-center">
        <Carousel />
        <News />
      </main>
    </>
  );
};

export default NewsPage;
