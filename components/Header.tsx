import { HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="logo/favicon-32x32.png" />
      </Head>
      <header className="h-16 dark:bg-gray-800 4 dark:opacity-95 dark:border-b dark:border-gray-700 bg-white opacity-95  rounded-b-sm shadow-sm flex justify-between items-center w-full sticky top-0 z-50 ">
        <div className="align-center md:hidden text-2xl font-bold items-start pl-6 w-full">
          {currentPage === "home"
            ? "Covid Tracker"
            : currentPage === "world"
            ? "Thế giới"
            : "Tin tức"}
        </div>
        <div className="align-center hidden md:flex text-lg font-bold items-start pl-4 w-full">
          Covid Tracker
        </div>
        <div className="flex space-x-7 items-center  justify-center  w-full  hidden md:flex pr-6">
          <Link href="/world">
            <a
              className={
                currentPage === "world"
                  ? "cursor-pointer hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-100 text-gray-500"
              }
            >
              Thế giới
            </a>
          </Link>
          <Link href="/">
            <a
              className={
                currentPage === "home"
                  ? "cursor-pointer hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-100 text-gray-500"
              }
            >
              Trang chủ
            </a>
          </Link>
          <Link href="/news">
            <a
              className={
                currentPage === "news"
                  ? "cursor-pointer hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50 text-gray-800 font-bold"
                  : "cursor-pointer hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-100 text-gray-500"
              }
            >
              Tin tức
            </a>
          </Link>
        </div>
        <motion.div
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
          className="font-bold flex w-full dark:text-gray-100 items-center  text-xl w-full pl-6"
        >
          <div className="pr-2 flex flex-col w-full items-end">
            {theme === "light" ? (
              <motion.button
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 200,
                }}
                onClick={() => setTheme("dark")}
                className="rounded-full"
              >
                <SunIcon className="h-7 w-7 mr-2 mt-1 text-yellow-500 cursor-pointer" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => setTheme("light")}
              >
                <MoonIcon className="h-7 w-7 mr-2 text-blue-500 cursor-pointer" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
