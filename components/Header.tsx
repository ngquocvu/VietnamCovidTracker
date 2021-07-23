import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-16 flex space-between bg-white border-gray-100 border-b-2 rounded-b-2xl  flex justify-center items-center w-full ">
        <div className="flex space-x-7 justify-center">
          <div className="cursor-pointer hover:font-bold text-gray-500">
            Tiện ích
          </div>
          <div className="cursor-pointer font-bold">Trang chủ</div>
          <a
            className="cursor-pointer hover:font-bold text-gray-500"
            href="https://www.quocvu.tech"
          >
            Về tôi
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
