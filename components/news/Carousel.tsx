import { Transition } from "@headlessui/react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { VNEXPRESS_NEWS, VNEXPRESS_NEWS_2 } from "../../utils/constants";
import { timeSince } from "../../utils/dataFormatter";

type article = {
  lead: string;
  share_url: string;
  title: string;
  thumbnail_url: string;
  publish_time: string;
};

const defaultData = [0, 2, 3, 4, 5].map(() => ({
  lead: "",
  share_url: "",
  title: "",
  thumbnail_url: "fallback.jpg",
  publish_time: "",
}));

const Carousel = () => {
  const [news, setNews] = useState<Array<article>>(defaultData);
  const [newsNumber, setNewsNumber] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS_2);
    const keyId = Object.keys(data.data.data)[0];
    setNews(data.data.data[keyId].data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full  flex-col ">
      <div className="w-full p-2 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <div className="w-full flex-col items-center  px-0.5 space-y-4 justify-center ">
          {news[0].lead !== "" ? (
            <div className="w-full h-full">
              <Transition
                appear={true}
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-10"
              >
                <a className="w-full" href={news[newsNumber].share_url}>
                  <img
                    className="w-full dark:bg-gray-700 bg-gray-100 dark:bg-gray-700 cursor-pointer h-56 md:w-full md:h-80 my-2 object-cover object-center rounded-lg"
                    src={
                      news[newsNumber].thumbnail_url
                        ? news[newsNumber].thumbnail_url
                        : "/fallback.jpg"
                    }
                  />
                </a>
              </Transition>

              <Link href={news[newsNumber].share_url}>
                <div className="flex-col h-56 sm:h-56 md:h-48 space-y-1 pt-2 mx-4 pb-2 cursor-pointer text-left items-start">
                  <div className="text-gray-400 relative md:text-sm  md:font-semibold text-xs ">
                    Tin {newsNumber + 1} trên 4
                  </div>

                  <div className="font-bold  text-lg md:text-xl dark:text-gray-200 text-gray-700">
                    {news[newsNumber].title}
                  </div>
                  <div className="font-normal dark:text-gray-300 md:text-base text-sm md:flex">
                    {news[newsNumber].lead}
                  </div>
                  <div className="font-normal text-xs text-gray-400">
                    Theo VnExpress
                  </div>
                  <div className="text-gray-500 relative md:text-sm font-semibold md:font-semibold text-xs pb-2 ">
                    {timeSince(news[newsNumber].publish_time) + " trước"}
                  </div>
                </div>
              </Link>
              <ChangeButton
                setNewsNumber={setNewsNumber}
                newsNumber={newsNumber}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
              />
            </div>
          ) : (
            <div className="w-full h-82">
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-56 my-1 animate-pulse object-cover object-center rounded-lg"></div>
              <div className="flex-col  space-y-2 pt-2  pb-2 text-left items-start">
                <div className="font-bold text-lg md:text-xl text-gray-700">
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-10  animate-pulse object-cover object-center rounded-lg"></div>
                </div>
                <div className="font-bold text-lg md:text-xl text-gray-700">
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-24  animate-pulse object-cover object-center rounded-lg"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

export const ChangeButton = ({
  setNewsNumber,
  newsNumber,
  isShowing,
  setIsShowing,
}) => {
  return (
    <div className="grid  grid-cols-2">
      <motion.button
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.9 }}
        className="w-full"
      >
        <button
          className="w-full rounded-l-lg border-r-2 dark:border-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 text-sm md:text-base dark:hover:bg-gray-600 hover:bg-gray-200 font-semibold p-2"
          onClick={() => {
            setTimeout(() => {
              setIsShowing(true);
              setNewsNumber(newsNumber <= 0 ? newsNumber : newsNumber - 1);
            }, 100);
            setIsShowing(false);
          }}
        >
          Trước
        </button>
      </motion.button>{" "}
      <motion.button
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.99 }}
        className="w-full"
      >
        <button
          className="w-full bg-gray-100 dark:bg-gray-700 rounded-r-lg dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-gray-300 text-sm md:text-base hover:bg-gray-200 font-semibold p-2"
          onClick={() => {
            setTimeout(() => {
              setIsShowing(true);
              setNewsNumber(newsNumber >= 3 ? newsNumber : newsNumber + 1);
            }, 100);
            setIsShowing(false);
          }}
        >
          Sau
        </button>
      </motion.button>
    </div>
  );
};
