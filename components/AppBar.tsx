import { GlobeAltIcon, HomeIcon, NewspaperIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { variants } from "../utils/interfaces";

const AppBar = () => {
  const currentPage = useSelector((state: RootState) => state.page);
  const router = useRouter();
  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-500  flex justify-between  px-10 md:hidden dark:text-gray-400 text-xl text-center rounded-md border-t dark:border-gray-600 fixed inset-x-0 bottom-0 navbar pt-3 items-center ">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        initial={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => router.push("world")}
        className="flex flex-col items-center justify-center mb-2"
      >
        <GlobeAltIcon
          className={`h-7 w-7 ${
            currentPage == "world" ? "text-gray-800 dark:text-gray-100" : ""
          } mb-1`}
        />
        <div className="text-xs">Thế giới</div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        initial={{ scale: 1 }}
        onClick={() => router.push("/")}
        className="flex flex-col items-center justify-center mb-2"
      >
        <HomeIcon
          className={`h-7 w-7 ${
            currentPage == "home" ? "text-gray-800 dark:text-gray-100" : ""
          } mb-1`}
        />
        <div className="text-xs">Trang chính </div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        initial={{ scale: 1 }}
        onClick={() => router.push("news")}
        className="flex flex-col items-center justify-center mb-2"
      >
        <NewspaperIcon
          className={`h-7 w-7 ${
            currentPage == "news" ? "text-gray-800 dark:text-gray-100" : ""
          } mb-1`}
        />
        <div className="text-xs">Tin tức</div>
      </motion.button>
    </footer>
  );
};

export default AppBar;
