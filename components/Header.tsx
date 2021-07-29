import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

const Header = () => {
  const currentPage = useSelector((state: RootState) => state.page);
  return (
    <>
      <Head>
        <title>
          {/* {currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + " | "} */}
          Covid-19 in Vietnam{" "}
        </title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="h-16 flex space-between bg-white  rounded-b-xl shadow-sm flex justify-center items-center w-full sticky top-0 z-50">
        <div className="flex space-x-7 justify-center">
          <Link href="/world">
            <a
              className={
                currentPage == "world"
                  ? `cursor-pointer hover:text-gray-700 text-gray-800 font-bold`
                  : `cursor-pointer hover:text-gray-700 text-gray-500`
              }
            >
              Thế giới
            </a>
          </Link>
          <Link href="/">
            <a
              className={
                currentPage == "home"
                  ? `cursor-pointer hover:text-gray-700 text-gray-800 font-bold`
                  : `cursor-pointer hover:text-gray-700 text-gray-500`
              }
            >
              Trang chủ
            </a>
          </Link>
          <Link href="/news">
            <a
              className={
                currentPage == "news"
                  ? `cursor-pointer hover:text-gray-700 text-gray-800 font-bold`
                  : `cursor-pointer hover:text-gray-700 text-gray-500`
              }
            >
              Tin tức
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
