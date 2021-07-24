import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { VNEXPRESS_NEWS } from "../../utils/constants";
import NewsCard from "./NewsCard";

type article = {
  lead: string;
  share_url: string;
  title: string;
  thumbnail_url: string;
  publish_time: string;
};

const News = () => {
  const [numberOfPost, setNumberOfPost] = useState(5);
  const [news, setNews] = useState<Array<article>>([
    {
      lead: "",
      share_url: "",
      title: "",
      thumbnail_url: "",
      publish_time: "0",
    },
  ]);

  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS);
    setNews(data.data.data["1004765"].data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full flex-col space-y-4  md:w-12/12">
      <div className="w-full p-2 mx-auto bg-white shadow-md rounded-2xl">
        <div className="w-full flex-col items-center px-0.5 space-y-4 justify-center ">
          <div className="text-xl md:text-3xl font-bold bg-gray-100 p-2 md:p-4 rounded-md">
            Tin mới nhất
          </div>
          {news.slice(0, numberOfPost).map((n) => {
            return (
              <NewsCard
                thumbnail={n.thumbnail_url}
                title={n.title}
                url={n.share_url}
                lead={n.lead}
                publishTime={n.publish_time}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            if (numberOfPost >= news.length) {
              setNumberOfPost(5);
            } else {
              setNumberOfPost(numberOfPost + 8);
            }
          }}
          className="p-2 m-4 w-6/12 text-gray-700 font-bold rounded-md border-2 bg-white hover:bg-gray-100"
        >
          {numberOfPost < news.length ? "Xem thêm" : "Thu gọn"}
        </button>
      </div>
    </div>
  );
};

export default News;
