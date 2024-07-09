import React from "react";
import { CircularText, CircularText2 } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden  sm:right-0 md:absolute left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText2 className=" dark:fill-light fill-dark animate-spin-slow" />
        <Link
          href="mailto:dasanayakabandara81@gmail.com"
          className=" md:w-12 md:h-12 md:text-[10px] absolute flex items-center justify-center text-2xl font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light w-28 h-28 left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
