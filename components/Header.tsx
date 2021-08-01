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
      <header className="h-16 space-between dark:bg-gray-800 dark:opacity-100 bg-white opacity-95  rounded-b-sm shadow-sm flex justify-between items-center w-full sticky top-0 z-50 ">
        <motion.div
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
          className="font-bold flex w-full dark:text-gray-100 items-center md:w-1/2 space-x-4 text-xl w-full pl-6"
        >
          {currentPage === "home"
            ? "Covid Tracker"
            : currentPage === "world"
            ? "Thế giới"
            : "Tin tức"}
        </motion.div>
        <div className="pr-4 flex flex-col">
          {theme === "light" ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              onClick={() => setTheme("dark")}
            >
              <SunIcon className="h-7 w-7 mr-2 cursor-pointer" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              onClick={() => setTheme("light")}
            >
              <MoonIcon className="h-7 w-7 mr-2 cursor-pointer" />{" "}
            </motion.button>
          )}
        </div>

        <div className="flex space-x-7  justify-between  hidden md:flex pr-6">
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
      </header>
    </>
  );
};

export default Header;
function setTheme(arg0: string): void {
  throw new Error("Function not implemented.");
}
