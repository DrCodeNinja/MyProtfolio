import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 absolute flex items-center justify-center px-3 py-3 font-semibold rounded-full cursor-pointer dark:text-dark dark:bg-light shadow-dark bg-dark text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 2 } }}
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
        <Skill name={"CSS"} x="0vw" y="-10vw" />
        <Skill name={"HTML"} x="-10vw" y="8vw" />
        <Skill name={"Javascript"} x="11vw" y="-7vw" />
        <Skill name={"TypeScript"} x="-11vw" y="-7vw" />
        <Skill name={"Figma"} x="13vw" y="8vw" />
        <Skill name={"MongoDB"} x="10vw" y="-16vw" />
        <Skill name={"ReactJS"} x="-13vw" y="-16vw" />
        <Skill name={"Angular"} x="-24vw" y="-10vw" />
        <Skill name={"Vue.js"} x="24vw" y="-10vw" />
        <Skill name={"SQL"} x="-22vw" y="0vw" />
        <Skill name={"Tailwind"} x="0vw" y="16vw" />
        <Skill name={"NextJS"} x="22vw" y="0vw" />
        <Skill name={"NodeJS"} x="19vw" y="12vw" />
        <Skill name={"Golang"} x="-10vw" y="15vw" />
        <Skill name={"Github"} x="10vw" y="15vw" />
        <Skill name={"Postgres"} x="-20vw" y="-18vw" />
        <Skill name={"Mysql"} x="20vw" y="-18vw" />
        <Skill name={"Seq"} x="0vw" y="9vw" />
        <Skill name={"C#"} x="-19vw" y="12vw" />
        <Skill name={"ASP.NET Core"} x="0vw" y="-23vw" />
        <Skill name={"Express"} x="-30vw" y="5vw" />
        <Skill name={"Redis"} x="30vw" y="-5vw" />
        <Skill name={"Docker"} x="-30vw" y="-5vw" />
        <Skill name={"Postman"} x="0vw" y="-17vw" />
        <Skill name={"AWS"} x="30vw" y="5vw" />
        <Skill name={"RabbitMQ"} x="-35vw" y="12vw" />
        <Skill name={"Redux"} x="35vw" y="12vw" />
        <Skill name={"Bootstrap"} x="-14vw" y="22vw" />
        <Skill name={"Prisma"} x="14vw" y="22vw" />
        <Skill name={"Sass"} x="0vw" y="24vw" />
        <Skill name={"Swagger"} x="-35vw" y="-12vw" />
        <Skill name={"GitHub Actions"} x="35vw" y="-12vw" />
      </div>
    </>
  );
};

export default Skills;
