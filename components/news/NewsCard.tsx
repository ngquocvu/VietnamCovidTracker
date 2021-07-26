import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { timeSince } from "../../utils/dataFormatter";
const NewsCard = ({ title, thumbnail, url, lead, publishTime }) => {
  return publishTime ? (
    <>
      <Link href={url}>
        <div className="bg-white p-1 md:p-4 space-x-4 flex text-left rounded-md hover:bg-gray-100 cursor-pointer justify-items ">
          <img
            className="relative bg-gray-300 h-24 w-24 md:h-32 md:w-32 object-cover object-center rounded-lg"
            src={thumbnail}
          />
          <div className="flex-col space-y-1 items-start">
            <div className="font-bold sm:text-lg text-gray-700">{title}</div>
            <div className="font-normal hidden md:flex">{lead}</div>{" "}
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
    <div className="flex flex-auto space-x-4">
      <div className="bg-gray-200 h-24 w-36 md:h-32 md:w-32  rounded-lg animate-pulse"></div>
      <div className="items-start animate-pulse bg-gray-100 rounded-md w-full md:h-32 h-24 space-y-2"></div>
    </div>
  );
};

export default NewsCard;
