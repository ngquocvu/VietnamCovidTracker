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
    <footer className="bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-500  flex justify-between  px-12 md:hidden dark:text-gray-400 text-xl text-center rounded-md border-t dark:border-gray-600 fixed inset-x-0 bottom-0 navbar navbar pt-3 items-center ">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3, rotate: 360 }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => router.push("world")}
      >
        <GlobeAltIcon
          className={`h-7 w-7 ${
            currentPage == "world" ? "text-black dark:text-gray-100" : ""
          } mb-3`}
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => router.push("/")}
      >
        <HomeIcon
          className={`h-7 w-7 ${
            currentPage == "home" ? "text-black dark:text-gray-100" : ""
          } mb-3`}
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => router.push("news")}
      >
        <NewspaperIcon
          className={`h-7 w-7 ${
            currentPage == "news" ? "text-black dark:text-gray-100" : ""
          } mb-3`}
        />{" "}
      </motion.button>
    </footer>
  );
};

export default AppBar;
