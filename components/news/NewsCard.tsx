import React from "react";
const NewsCard = ({ title, thumbnail, url, lead }) => {
  return (
    <div className="bg-white p-4 border-dashed border-4 border-light-blue-500 flex-col items-center text-left rounded-md hover:bg-gray-100 cursor-pointer">
      <div className="font-bold text-lg">{title}</div>
      <div className="font-normal pt-2">{lead}</div>
      <div className="pt-2">
        <a className="font-bold hover:text-gray-700" href={url}>
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
