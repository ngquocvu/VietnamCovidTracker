import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
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
  const [isLoading, setIsLoading] = useState(true);
  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS_2);
    const keyId = Object.keys(data.data.data)[0];
    setNews(data.data.data[keyId].data);
  };

  useEffect(() => {
    fetchNews();
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <div className="w-full  flex-col ">
      <div className="w-full p-2 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <div className="w-full flex-col items-center  px-0.5 space-y-4 justify-center ">
          {news[newsNumber].lead !== "" && !isLoading ? (
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
                <div className="w-full flex items-center">
                  <a className="w-full relative flex items-center ">
                    <ChevronLeftIcon
                      className="h-10 left-2 bg-white bg-opacity-30 rounded-full absolute text-white cursor-pointer"
                      onClick={() => {
                        setTimeout(() => {
                          setIsShowing(true);
                          setNewsNumber(
                            newsNumber <= 0 ? newsNumber : newsNumber - 1
                          );
                        }, 100);
                        setIsShowing(false);
                      }}
                    />
                    {/* href={news[newsNumber].share_url} */}
                    <img
                      className="w-full dark:bg-gray-700 bg-gray-100 dark:bg-gray-700  h-60 md:w-full md:h-80 my-2 object-cover object-center rounded-lg"
                      src={
                        news[newsNumber].thumbnail_url
                          ? news[newsNumber].thumbnail_url
                          : "/fallback.jpg"
                      }
                    />
                    <ChevronRightIcon
                      className="h-10 right-2 bg-white bg-opacity-30 rounded-full absolute text-white cursor-pointer"
                      onClick={() => {
                        setTimeout(() => {
                          setIsShowing(true);
                          setNewsNumber(
                            newsNumber >= 3 ? newsNumber : newsNumber + 1
                          );
                        }, 100);
                        setIsShowing(false);
                      }}
                    />
                  </a>
                </div>
              </Transition>

              <Link href={news[newsNumber].share_url}>
                <div className="flex-col h-72 sm:h-56 md:h-56 space-y-1 pt-2 mx-4 pb-2 cursor-pointer text-left items-start">
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
              {/* <ChangeButton
                setNewsNumber={setNewsNumber}
                newsNumber={newsNumber}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
              /> */}
            </div>
          ) : (
            <div className="w-full h-auto">
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-64 my-1 animate-pulse object-cover object-center rounded-lg"></div>
              <div className="flex-col  space-y-2 pt-1  pb-28 text-left items-start">
                <div className="font-bold text-lg md:text-xl space-y-2 text-gray-700">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-6  animate-pulse object-cover object-center rounded-lg" />
                  <div className="w-6/12 bg-gray-200 dark:bg-gray-700 h-6  animate-pulse object-cover object-center rounded-lg" />
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-24  animate-pulse object-cover object-center rounded-lg" />
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

// export const ChangeButton = ({
//   setNewsNumber,
//   newsNumber,
//   isShowing,
//   setIsShowing,
// }) => {
//   return (
//     <div className="grid  grid-cols-2">
//       <motion.button
//         whileHover={{ scale: 1.0 }}
//         whileTap={{ scale: 0.9 }}
//         className="w-full rounded-l-lg border-r-2 dark:border-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 text-sm md:text-base dark:hover:bg-gray-600 hover:bg-gray-200 font-semibold p-2"
//         onClick={() => {
//           setTimeout(() => {
//             setIsShowing(true);
//             setNewsNumber(newsNumber <= 0 ? newsNumber : newsNumber - 1);
//           }, 100);
//           setIsShowing(false);
//         }}
//       >
//         Trước
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.0 }}
//         whileTap={{ scale: 0.99 }}
//         className="w-full bg-gray-100 dark:bg-gray-700 rounded-r-lg dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-gray-300 text-sm md:text-base hover:bg-gray-200 font-semibold p-2"
//         onClick={() => {
//           setTimeout(() => {
//             setIsShowing(true);
//             setNewsNumber(newsNumber >= 3 ? newsNumber : newsNumber + 1);
//           }, 100);
//           setIsShowing(false);
//         }}
//       >
//         Sau
//       </motion.button>
//     </div>
//   );
// };
