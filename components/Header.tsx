import { HeartIcon, SunIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
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
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="logo/favicon-32x32.png" />
      </Head>
      <header className="h-16 space-between bg-white opacity-95  rounded-b-xl shadow-sm flex justify-center items-center w-full sticky top-0 z-50 ">
        <div className="font-bold flex space-x-4 text-xl w-full pl-6">
          <SunIcon className="h-6 w-6" />
          <div>Covid Tracker</div>
        </div>
        <div className="flex space-x-7 justify-center hidden md:flex">
          <Link href="/world">
            <a
              className={
                currentPage === "world"
                  ? "cursor-pointer hover:text-gray-900 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 text-gray-500"
              }
            >
              Thế giới
            </a>
          </Link>
          <Link href="/">
            <a
              className={
                currentPage === "home"
                  ? "cursor-pointer hover:text-gray-900 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 text-gray-500"
              }
            >
              Trang chủ
            </a>
          </Link>
          <Link href="/news">
            <a
              className={
                currentPage === "news"
                  ? "cursor-pointer hover:text-gray-700 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 text-gray-500"
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
