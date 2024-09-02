import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/rabitmq.jpg";
import article2 from "../../public/images/articles/nestjs.jpg";
import article3 from "../../public/images/articles/seq.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgref = useRef(null);

  function handleMouseHover(event) {
    imgref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgref}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      />
    </Link>
  );
};

const Articles = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid sm:flex-col dark:text-light dark:bg-dark dark:border-light rounded-xl bg-light text-dark first:mt-0 border-dark"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="pl-4 font-semibold dark:text-primaryDark text-primary sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid dark:border-light dark:bg-dark bg-light border-dark rounded-2xl">
      <div className=" dark:bg-light absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm ">{summary}</p>
      <span className="font-semibold dark:text-primaryDark text-primary">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>DR Developer | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticles
              title="This guide provides step-by-step instructions to install RabbitMQ on various platforms"
              summary="RabbitMQ is a powerful and versatile message broker that plays a crucial role in modern software architectures. Its ability to reliably handle high volumes of messages, support flexible routing, and integrate with various protocols makes it an excellent choice for building scalable and robust applications."
              time="5 min read"
              link={
                "https://github.com/DrCodeNinja/RabbitMQ-Comprehensive-Guide"
              }
              img={article1}
            />
            <FeaturedArticles
              title="Guide for installation of NestJS on your local machine"
              summary="NestJS provides a modern, robust framework for building scalable and maintainable server-side applications in Node.js. Its combination of TypeScript, modular architecture, and a vibrant ecosystem makes it an excellent choice for developers at all levels."
              time="4 min read"
              link={"https://github.com/DrCodeNinja/NestJS-Comprehensive-Guide"}
              img={article2}
            />
            <FeaturedArticles
              title="How to Configure Seq in Golang Application"
              summary="Seq is a powerful log server that helps you collect, search, and analyze application logs. Running Seq in Docker is an efficient way to deploy it quickly without worrying about manual installations. This guide will walk you through the complete setup of Seq in Docker."
              time="12 min read"
              link={"https://github.com/DrCodeNinja/How-Setup-Seq-In-Golang"}
              img={article3}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            All Articles
          </h2>
          <ul>
            <Articles
              title={
                "RabbitMQ is a powerful and versatile message broker that plays a crucial role in modern software architectures. Its ability to reliably handle high volumes of messages, support flexible routing, and integrate with various protocols makes it an excellent choice for building scalable and robust applications."
              }
              date={"August 22, 2024"}
              link={
                "https://github.com/DrCodeNinja/RabbitMQ-Comprehensive-Guide"
              }
              img={article1}
            />
            <Articles
              title={
                "NestJS provides a modern, robust framework for building scalable and maintainable server-side applications in Node.js. Its combination of TypeScript, modular architecture, and a vibrant ecosystem makes it an excellent choice for developers at all levels."
              }
              date={"August 26, 2024"}
              link={"https://github.com/DrCodeNinja/NestJS-Comprehensive-Guide"}
              img={article2}
            />
            <Articles
              title={
                "Seq is a powerful log server that helps you collect, search, and analyze application logs. Running Seq in Docker is an efficient way to deploy it quickly without worrying about manual installations. This guide will walk you through the complete setup of Seq in Docker."
              }
              date={"August 26, 2024"}
              link={"https://github.com/DrCodeNinja/How-Setup-Seq-In-Golang"}
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
