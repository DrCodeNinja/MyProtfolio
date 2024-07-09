import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid sm:text-base dark:text-light dark:border-light border-dark">
      <Layout
        className={
          "flex items-center py-8 justify-between lg:flex-col xl:py-8 lg:py-6"
        }
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>{" "}
          <Link
            href={"/"}
            className="underline underline-offset-2"
            target="_blank"
          >
            DR Developer
          </Link>
        </div>
        <Link
          href={"/"}
          className="underline underline-offset-2"
          target="_blank"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
