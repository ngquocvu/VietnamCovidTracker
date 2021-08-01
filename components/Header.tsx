import { HeartIcon, SunIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
const Header = () => {
  const currentPage = useSelector((state: RootState) => state.page);
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1000);
  }, [currentPage]);
  return (
    <>
      <Head>
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="logo/favicon-32x32.png" />
      </Head>
      <header className="h-16 space-between bg-white opacity-95  rounded-b-sm shadow-sm flex justify-between items-center w-full sticky top-0 z-50 ">
        <motion.div
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
          className="font-bold flex w-full items-center md:w-1/2 space-x-4 text-xl w-full pl-6"
        >
          <SunIcon className="h-7 w-7 mr-2" />{" "}
          {currentPage === "home"
            ? "Covid Tracker"
            : currentPage === "world"
            ? "Thế giới"
            : "Tin tức"}
        </motion.div>
        <div className="flex space-x-7  justify-between  hidden md:flex pr-6">
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
