import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 absolute flex items-center justify-center px-3 py-3 font-semibold rounded-full cursor-pointer dark:text-dark dark:bg-light shadow-dark bg-dark text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className=" lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 dark:text-dark dark:bg-light shadow-dark bg-dark text-light"
          whileHover={{ scale: 1.05 }}
        >
          Web Developer
        </motion.div>
        <Skill name={"CSS"} x="-0vw" y="-13vw" />
        <Skill name={"HTML"} x="-12vw" y="10vw" />
        <Skill name={"Javascript"} x="14vw" y="-10vw" />
        <Skill name={"AdobeXD"} x="-15vw" y="-10vw" />
        <Skill name={"Figma"} x="15vw" y="10vw" />
        <Skill name={"MongoDB"} x="12vw" y="-20vw" />
        <Skill name={"ReactJS"} x="-15vw" y="-20vw" />
        <Skill name={"SQL"} x="-29vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
