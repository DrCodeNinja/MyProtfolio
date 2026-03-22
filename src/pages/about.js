import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-image-2.jpeg";
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
        <title>DR Developer | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="relative flex flex-col items-center justify-center w-full dark:text-light">
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
                👋 Hey there! I&apos;m a{" "}
                <strong>full stack software engineer</strong> who loves
                transforming ideas into <strong>powerful digital experiences</strong>.
                With hands-on experience building real-world applications, I
                thrive on crafting solutions that are not just functional — but{" "}
                <strong>beautiful and intuitive</strong> too. 🚀
              </p>
              <p className="my-4 font-medium">
                💡 For me, great software goes beyond clean code — it&apos;s
                about <strong>solving real problems</strong> and creating
                experiences that users genuinely enjoy. I believe every pixel
                and every line of code should serve a purpose.
              </p>
              <p className="font-medium ">
                🎯 Whether it&apos;s a <strong>web application</strong>, a{" "}
                <strong>mobile app</strong>, or a complex <strong>backend system</strong>, I
                bring <strong>passion, precision, and creativity</strong>{" "}
                to every project. Let&apos;s build something
                amazing together! ✨
              </p>
            </div>
            <div className="relative col-span-3 p-8 border-2 border-solid md:col-span-8 md:order-1 xl:col-span-4 dark:border-light dark:bg-dark h-max rounded-2xl border-dark bg-light">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="DR Developer"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="flex flex-col items-end justify-between col-span-2 md:order-3 xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
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
