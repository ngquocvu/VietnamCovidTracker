import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { VNEXPRESS_NEWS } from "../../utils/constants";
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
  thumbnail_url: "",
  publish_time: "",
}));

const Carousel = () => {
  const [news, setNews] = useState<Array<article>>(defaultData);

  const fetchNews = async () => {
    const data = await axios.get(VNEXPRESS_NEWS);
    setNews(data.data.data["1004765"].data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full md:max-w-4xl mx-2 flex-col  md:w-12/12 pb-4">
      <div className="w-full p-2 mx-auto bg-white shadow-md rounded-2xl">
        <div className="w-full flex-col items-center px-0.5 space-y-4 justify-center ">
          {news[0].lead !== "" ? (
            <Link href={news[0].share_url}>
              <div className="w-full h-82 md:flex">
                <img
                  className="w-full bg-gray-100 h-56 md:w-72 my-2 md:ml-2 object-cover object-center rounded-lg"
                  src={news[0].thumbnail_url}
                />
                <div className="flex-col space-y-1 pt-2 mx-4 pb-2 text-left items-start">
                  <div className="font-bold text-lg md:text-xl text-gray-700">
                    {news[0].title}
                  </div>
                  <div className="font-normal md:text-base hidden md:flex">
                    {news[0].lead}
                  </div>{" "}
                  <div className="font-normal text-xs text-gray-400">
                    Theo VnExpress
                  </div>
                  <div className="text-gray-500 relative font-semibold md:font-semibold text-sm"></div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="w-full h-82 md:flex">
              <div className="w-full bg-gray-100 h-56 md:w-1/3 my-2 md:ml-2 animate-pulse object-cover object-center rounded-lg"></div>
              <div className="flex-col md:w-2/3 space-y-2 pt-2 md:mx-4 pb-2 text-left items-start">
                <div className="font-bold text-lg md:text-xl text-gray-700">
                  <div className="w-full bg-gray-100 h-10  animate-pulse object-cover object-center rounded-lg"></div>
                </div>
                <div className="font-normal md:text-base hidden md:flex">
                  <div className="w-full bg-gray-100 h-44 md:w-full  animate-pulse object-cover object-center rounded-lg"></div>
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
