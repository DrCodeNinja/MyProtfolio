import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="md:w-[80%] my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type="Bachelor of  Commerce in computers 
            Technology (Computer Application)"
            time="2019-2023"
            place=" Padmavathi Degree Collage"
            info="The Bachelor of Information Communication A Bachelor of Commerce in Computers, also known as a BCom Computer Applications, is an undergraduate course that combines commerce and computer science. 
            It's a three-year course that covers a range of topics, including:Technology honours degree programme is designed to meet the SLQF Level 6 and Computer Society of Sri Lanka requirements.
             Volume of learning of the entire programme is 120 academic credits including 12 credits from the group research project and industrial training."
          />
          <Details
            type=" Board of Intermediate Education"
            time="2016-2018"
            place="Deeksha Junior Collage"
            info=" it is absolutely necessary in the near future. Certain colleges require 50% of your class 12th marks along with 50% entrance exam marks. And in case you can't score in entrance,
             it is your class 12 marks that get you admitted into some colleges"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
