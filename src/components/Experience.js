import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" md:w-[80%] my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Software Testing Engineer"
            company="Adactin - Manual testing"
            companyLink={"https://adactinhotelapp.com/"}
            time=" Auguest 2023 - October 2023"
            address="Naresh it - Hyderabad."
            work="Developed and executed  compreshensive Test Scenarios an CaseS,ensuring 100% coverage for room availability checks and online payments."
          />
        </ul>
        <br>
        </br>
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Software Testing Engineer"
            company=" Orange HRMS -E-Commerce project - Automation testing"
            companyLink={"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"}
            time=" Auguest 2023 - November 2023"
            address="Naresh it - Hyderabad."
            work="Developed and executed  compreshensive Test Scenarios an CaseS,ensuring 100% coverage for room availability checks and online payments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
