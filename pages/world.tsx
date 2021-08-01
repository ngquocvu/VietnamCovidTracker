import React, { useEffect, useState } from "react";
import Link from "next/link";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { variants } from "../utils/interfaces";

const WorldPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage("world"));
  }, []);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className="w-full items-start justify-center md:max-w-7xl"
    >
      <main className="flex w-full px-2 pt-12 pb-6 items-start justify-center md:max-w-7xl">
        <div className="w-full flex-col flex items-center py-2 m-4 ">
          <Link href="/fetch">
            <img
              src="/world-banner.svg"
              className={
                isLoading
                  ? "relative h-36 md:h-72 w-6/12 pb-0 animate-pulse rounded-lg dark:bg-gray-800 bg-gray-100"
                  : "relative h-36 md:h-72 w-6/12 pb-0 relative cursor-pointer"
              }
              onLoad={() => setIsLoading(false)}
            />
          </Link>
          <p className="font-bold dark:text-gray-200 text-gray-600 text-lg md:text-2xl md:text-2xl  mt-2 md:mt-8 my-1">
            Trang đang được phát triển
          </p>
          <Link href="/">
            <p className="text-white text-sm md:text-md px-4 py-2  delay-100 hover:bg-indigo-500 font-semibold shadow-lg text-white rounded-md mt-2 bg-indigo-600 p-2  cursor-pointer">
              Về trang chính
            </p>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default WorldPage;
