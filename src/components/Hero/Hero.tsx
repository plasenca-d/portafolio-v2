import NextLink from "next/link";

import { Link } from "@nextui-org/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import clsx from "clsx";
import { CustomTyping } from "./CustomTyping";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`container mx-auto py-60 2xl:px-60 px-10 sm:px-24`}>
      <div className="grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start">
          <h1
            className={`text-4xl lg:text-6xl font-bold flex flex-col items-start`}
          >
            Hi! I{"'"}m <CustomTyping />
          </h1>
          <p className="text-2xl pt-7 lg:text-3xl">
            Full-Stack Developer with{" "}
            <span className="text-primary-500">Backend</span> Focus and Strong
            Technical, Interpersonal Skills, Able to Work Effectively with
            Cross-Functional Teams and Stakeholders
          </p>
          <Link
            href="/#contact"
            as={NextLink}
            className={clsx(
              "mt-8 pl-0 pr-20 text-success-400 hover:text-success-300",
              "animate-in fade-in-50 slide-in-from-left-40 duration-1000"
            )}
          >
            <span className="text-xl">Let{"'"}s Connect</span>
            &nbsp; &nbsp; &nbsp;
            <BsFillArrowRightCircleFill size={22} />
          </Link>
        </div>
        <div className={`sm:hidden md:block ${styles["hero-astro"]}`} />
      </div>
    </section>
  );
};
