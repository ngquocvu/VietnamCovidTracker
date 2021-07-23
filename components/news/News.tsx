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
};

const News = () => {
  const [news, setNews] = useState<Array<article>>([
    { lead: "", share_url: "", title: "", thumbnail_url: "" },
  ]);

  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS);
    setNews(data.data.data["1004765"].data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full flex-col space-y-4 pt-4  md:w-12/12">
      <div className="w-full md:max-w-xl p-2 mx-auto bg-white shadow-md rounded-2xl">
        <Disclosure defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-indigo-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>Tin tức mới nhất</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="w-full flex-col items-center px-0.5  space-y-4 justify-center ">
                  {news.map((n) => {
                    return (
                      <NewsCard
                        thumbnail={n.thumbnail_url}
                        title={n.title}
                        url={n.share_url}
                        lead={n.lead}
                      />
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default News;
