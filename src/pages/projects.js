import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects1 from "../../public/images/projects/Orange_projects.jpeg";
import projects2 from "../../public/images/projects/Addactin_project.jpeg";
import projects3 from "../../public/images/projects/ibk_project.jpeg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl dark:bg-dark dark:border-light rounded-br-2xl rounded-3xl border-dark bg-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem] dark:bg-light rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:x-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto border border-black rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-2xl font-bold text-left sm:text-sm dark:text-light text-dark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2 ">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg sm:px-4 sm:text-base dark:bg-light dark:text-dark text-light bg-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid xs:p-4 rounded-2xl dark:bg-dark dark:border-light border-dark bg-light">
      <div className="dark:bg-light rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-2xl font-bold text-left lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2 ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Vamshi | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title=" Orange Hrms E-Commerce Project-Automation Testing"
                summary="Facilitaed Peer Reviews,reesultin in a decrease in critical defacts for high-quality Test Scenarios and scripts"
                link={"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"}
                github={"https://github.com/CHINTU613"}
                type={" Automation Project"}
                img={projects1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Adactin - Manual Testing"
                summary=" Developed and executed comprehenvise Test Scenarios and Cases ,ensuring 100% coverage for room availability checks and online payments"
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                img={projects1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title=" IBK INTERNET BANKING  "
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link={"http://183.82.103.245:8888/BankingProject/LoginFormBuild1.jsp"}
                github={"https://github.com/CHINTU613"}
                type={"Featured Project"}
                img={projects3}
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title=" Adactin - Manual Testing"
                summary=" Developed and executed comprehenvise Test Scenarios and Cases ,ensuring 100% coverage for room availability checks and online payments"
                link={"https://adactinhotelapp.com/"}
                github={"https://github.com/CHINTU613"}
                type={"Manual Project"}
                img={projects2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title=" Manaul tesing"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                img={projects1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title=" Automation"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                img={projects1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
