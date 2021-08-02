import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { timeSince } from "../../utils/dataFormatter";
const NewsCard = ({ title, thumbnail, url, lead, publishTime }) => {
  return publishTime ? (
    <>
      <Link href={url}>
        <div className="bg-white dark:text-gray-200 dark:bg-gray-800  p-1 md:p-4 space-x-4 flex text-left rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer justify-items ">
          <img
            className="relative bg-gray-300 dark:bg-gray-600 h-24 w-24 md:h-32 md:w-32 object-cover object-center rounded-lg"
            src={thumbnail ? thumbnail : "/fallback.jpg"}
          />
          <div className="flex-col space-y-1 items-start">
            <div className="font-bold sm:text-lg dark:text-gray-200 text-gray-700">
              {title}
            </div>
            <div className="font-normal hidden dark:text-gray-300  md:flex">
              {lead}
            </div>{" "}
            <div className="font-normal text-xs text-gray-400">
              Theo VnExpress
            </div>
            <div className="text-gray-500 relative font-semibold md:font-semibold text-sm">
              {publishTime == "" ? "" : timeSince(publishTime) + " trước"}
            </div>
          </div>
        </div>
      </Link>
    </>
  ) : (
    <div className="flex w-full flex-auto space-x-4">
      <div className="bg-gray-200 h-24 w-36 md:h-32 md:w-32 dark:bg-gray-600 rounded-lg animate-pulse"></div>
      <div className="items-start animate-pulse bg-gray-100 dark:bg-gray-600 rounded-md w-full md:h-32 h-24 space-y-2"></div>
    </div>
  );
};

export default NewsCard;
