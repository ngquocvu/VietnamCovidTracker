import React from "react";
import Link from "next/link";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";

const WorldPage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("world"));
  return (
    <>
      <main className="flex flex-col items-center p-3  font-bold w-full md:max-w-4xl py-1 md:py-3 flex-1">
        <div className=" w-full flex-col flex items-center py-16 m-4 ">
          <Link href="/fetch">
            <img
              src="/world-banner.svg"
              className="relative h-36 md:h-72 w-6/12 pb-0 relative cursor-pointer"
            />
          </Link>
          <p className="font-bold text-gray-600 text-lg md:text-2xl md:text-2xl  mt-2 md:mt-8 my-1">
            Trang này chưa có nội dung
          </p>
          <Link href="/">
            <p className="text-white text-sm md:text-md px-4 py-2  delay-100 hover:bg-indigo-500 font-semibold shadow-lg text-white rounded-md mt-2 bg-indigo-600 p-2  cursor-pointer">
              Về trang chính
            </p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default WorldPage;
