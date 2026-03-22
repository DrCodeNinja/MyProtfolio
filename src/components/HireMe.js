import React from "react";
import Link from "next/link";

const CircularText = ({ className }) => (
  <svg viewBox="0 0 300 300" className={className}>
    <defs>
      <path
        id="circlePath"
        d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
      />
    </defs>
    <text fill="currentColor" fontSize="30" fontWeight="600" letterSpacing="4">
      <textPath href="#circlePath">
        FULL . STACK . SOFTWARE . ENGINEER .
      </textPath>
    </text>
  </svg>
);

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden sm:right-0 md:absolute left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText className="dark:text-light text-dark animate-spin-slow" />
        <Link
          href="mailto:dasanayakabandara81@gmail.com"
          className="md:w-12 md:h-12 md:text-[10px] absolute flex items-center justify-center text-2xl font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light w-28 h-28 left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
