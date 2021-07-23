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
  const [numberOfPost, setNumberOfPost] = useState(3);
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
    <div className="w-full flex-col space-y-4 pt-8  md:w-12/12">
      <div className="w-full md:max-w-xl p-2 mx-auto bg-white shadow-md rounded-2xl">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Tin tức mới nhất</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="w-full flex-col items-center px-0.5 space-y-4 justify-center ">
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
                    setNumberOfPost(numberOfPost + 8);
                  }}
                  className="p-2 m-4 w-6/12 font-bold rounded border-2 bg-white hover:bg-gray-100"
                >
                  Xem thêm
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default News;
