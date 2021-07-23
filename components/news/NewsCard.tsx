import React from "react";
import { timeSince } from "../../utils/dataFormatter";
const NewsCard = ({ title, thumbnail, url, lead, publishTime }) => {
  return (
    <div className="bg-white p-4 flex-col items-center text-left rounded-md hover:bg-gray-100 cursor-pointer">
      <div className="font-bold text-lg text-gray-700">{title}</div>
      <div className="font-normal pt-2">{lead}</div>
      <div className="pt-2 flex justify-between space-x-2">
        {" "}
        <div className="text-gray-600 ">
          {timeSince(publishTime) + " trước"}
        </div>
        <a
          className=" hover:text-gray-700 font-semibold text-gray-600"
          href={url}
        >
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
