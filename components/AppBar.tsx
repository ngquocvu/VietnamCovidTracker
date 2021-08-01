import { GlobeAltIcon, HomeIcon, NewspaperIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

const AppBar = () => {
  const currentPage = useSelector((state: RootState) => state.page);
  const router = useRouter();
  return (
    <footer className="bg-white flex justify-between  px-12 md:hidden text-gray-500 text-xl text-white text-center rounded-md border-t fixed inset-x-0 bottom-0 navbar navbar pt-3 items-center ">
      <motion.button whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.3 }}>
        <GlobeAltIcon
          className={`h-8 w-8 ${
            currentPage == "world" ? "text-black" : ""
          } mb-3`}
          onClick={() => router.push("world")}
        />
      </motion.button>
      <motion.button whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.3 }}>
        <HomeIcon
          className={`h-8 w-8 ${
            currentPage == "home" ? "text-black" : ""
          } mb-3`}
          onClick={() => router.push("/")}
        />
      </motion.button>{" "}
      <motion.button whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.3 }}>
        <NewspaperIcon
          className={`h-8 w-8 ${
            currentPage == "news" ? "text-black" : ""
          } mb-3`}
          onClick={() => router.push("news")}
        />{" "}
      </motion.button>
    </footer>
  );
};

export default AppBar;
