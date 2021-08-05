import { HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as ga from "../lib/ga";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <Head>
        <title>
          {currentPage === "home"
            ? "Covid-19 Tracker"
            : currentPage === "world"
            ? "Thế giới"
            : "Tin tức"}
          |Covid-19 in Vietnam{" "}
        </title>
        <link rel="icon" href="logo/favicon-32x32.png" />
      </Head>
      <header className="h-16 dark:bg-gray-800 bg-white dark:border-b dark:border-gray-700  rounded-b-sm shadow-md flex items-center w-full sticky top-0 z-50 ">
        <div className="align-center items-center md:hidden w-2/3 text-xl font-bold items-start pl-6 w-full ">
          {currentPage === "home"
            ? "Covid-19 Tracker"
            : currentPage === "world"
            ? "Thế giới"
            : "Tin tức"}
        </div>
        <div className="align-center md:w-4/12 hidden md:flex text-lg font-bold items-start pl-4 w-full">
          <Link href="/"> Covid-19 Tracker</Link>
        </div>{" "}
        <div className="flex space-x-7 items-center md:w-8/12 justify-center  w-full  hidden md:flex pr-6">
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
          className="font-bold flex w-1/3 dark:text-gray-100 items-center  text-xl w-full pl-6"
        >
          <div className="pr-2 pb-1 flex flex-col w-full  items-end">
            {theme == "dark" ? (
              <motion.button
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => {
                  setTheme("light");
                  ga.event({
                    category: "viewMode",
                    action: "use_light_mode",
                    label: "User choose Light Mode",
                    value: 1,
                  });
                }}
                className="flex-col items-center flex mr-2"
              >
                <MoonIcon className="h-7  w-7 text-blue-500 cursor-pointer" />
                {/* <div className="text-xs bg-indigo-500 px-2 rounded-md">Tối</div> */}
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
                  damping: 200,
                }}
                onClick={() => {
                  setTheme("dark");
                  ga.event({
                    category: "viewMode",
                    action: "use_dark_mode",
                    label: "User choose Dark Mode",
                    value: 1,
                  });
                }}
                className="flex-col items-center flex mr-2"
              >
                <SunIcon className="h-7 w-7 mt-1 text-yellow-500 cursor-pointer" />
                {/* <div className="text-xs bg-yellow-300 text-white px-2 rounded-md">
                  Sáng
                </div> */}
              </motion.button>
            )}
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
