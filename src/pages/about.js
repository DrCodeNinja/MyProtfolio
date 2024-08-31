import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile_vamshi.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Vamshi | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className={"pt-14"}>
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I&apos;"Results-driven software engineer with 8 Mouth of experience in designing, developing,
                 and deploying high-quality software solutions. Proficient in Java and Manual texting Automation,
                  with a strong focus on 
                mention specific areas, e.g.,  Java ,Sql,  Manul tesing, or Automation..
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="relative col-span-3 p-8 border-2 border-solid md:col-span-8 md:order-1 xl:col-span-4 dark:border-light dark:bg-dark h-max rounded-2xl border-dark bg-light">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt=" Vamshi tees"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="flex flex-col items-end justify-between col-span-2 md:order-3 xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                 Successful Project 
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                 Working Project 
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={9} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                   Month of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
