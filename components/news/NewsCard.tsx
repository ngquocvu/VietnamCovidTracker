import Link from "next/link";
import React from "react";
import { timeSince } from "../../utils/dataFormatter";
const NewsCard = ({ title, thumbnail, url, lead, publishTime }) => {
  return (
    <>
      <Link href={url}>
        <div className="bg-white p-1 md:p-4 space-x-4 flex text-left rounded-md hover:bg-gray-100 cursor-pointer justify-items ">
          <img
            className="relative bg-gray-300 h-24 w-24 md:h-32 md:w-32 object-cover object-center rounded-md"
            src={thumbnail}
          />
          <div className="flex-col  items-start">
            <div className="font-bold sm:text-lg text-gray-700">{title}</div>
            <div className="font-normal pt-2 hidden md:flex">{lead}</div>{" "}
            <div className="text-gray-600 pt-3 font-semibold">
              {timeSince(publishTime) + " trước"}
            </div>{" "}
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
