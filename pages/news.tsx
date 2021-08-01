import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/news/Carousel";
import News from "../components/news";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { variants } from "../utils/interfaces";

const NewsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage("news"));
  }, []);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className="w-full  items-start justify-center md:max-w-7xl"
    >
      <main className="flex w-full px-2 pt-4 pb-6 items-start justify-center md:max-w-7xl  ">
        <div className="md:w-9/12 w-full space-y-4 pb-4">
          <Carousel /> <News />
        </div>
        <div className="hidden lg:flex flex-col md:w-3/12 bg-white dark:bg-gray-800 transition cursor-pointer hover:shadow-sm transition-shadow duration-100 ease-in-out rounded-xl p-4 mx-4 shadow-md">
          <div className="border-b-2 dark:border-gray-500 py-2 text-gray-600 dark:text-gray-200 font-semibold w-full">
            Thời tiết hôm nay
          </div>
          <div className="py-4 flex space-y-2 items-center flex-col">
            <div className="text-gray-500 dark:text-gray-300 text-md">
              Hồ Chí Minh
            </div>
            <img
              className="relative h-24 w-24 md:h-12 md:w-12 object-cover object-center rounded-lg"
              src={
                " https://static-znews.zadn.vn/images/icons/weather/v2/hazy.png"
              }
            />
            <div className="text-gray-500 dark:text-gray-200 font-semibold text-4xl">
              32°C
            </div>
            <div className="text-gray-600 dark:text-gray-100 font-normal">
              Có mây
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default NewsPage;
