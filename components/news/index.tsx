import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { VNEXPRESS_NEWS, VNEXPRESS_NEWS_2 } from "../../utils/constants";
import { variants } from "../../utils/interfaces";
import NewsCard from "./NewsCard";

type article = {
  lead: string;
  share_url: string;
  title: string;
  thumbnail_url: string;
  publish_time: string;
};

const News = () => {
  const [numberOfPost, setNumberOfPost] = useState(20);
  const defaultData = [1, 2, 3, 4, 5].map(() => ({
    lead: "",
    share_url: "",
    title: "",
    thumbnail_url: "/fallback.jpg",
    publish_time: "",
  }));

  const [news, setNews] = useState<Array<article>>(defaultData);

  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS_2);
    const keyId = Object.keys(data.data.data)[0];
    setNews(data.data.data[keyId].data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full flex-col space-y-4 ">
      <div className="w-full p-2 mx-auto dark:bg-gray-800 bg-white shadow-md rounded-2xl">
        <div className="w-full flex-col items-center px-0.5 space-y-4 justify-center ">
          <div className="text-lg md:text-2xl font-bold dark:text-gray-200 dark:bg-gray-700  bg-gray-100 text-center p-2 md:p-4 rounded-md">
            Tin mới nhất
          </div>
          {news.slice(4, numberOfPost).map((n, index) => {
            return (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear" }}
                className="w-full items-start justify-center md:max-w-7xl"
              >
                <NewsCard
                  key={index}
                  thumbnail={n.thumbnail_url}
                  title={n.title}
                  url={n.share_url}
                  lead={n.lead}
                  publishTime={n.publish_time}
                />
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={() => {
            if (numberOfPost >= news.length) {
              setNumberOfPost(10);
            } else {
              setNumberOfPost(numberOfPost + 8);
            }
          }}
          className="py-2  mt-5 w-full dark:text-gray-200 dark:bg-gray-700 text-gray-700 font-bold rounded-lg bg-gray-100  bg-white dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          {numberOfPost < news.length ? "Xem thêm" : "Thu gọn"}
        </button>
      </div>
    </div>
  );
};

export default News;
