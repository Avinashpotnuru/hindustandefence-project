import { Box } from "@mui/material";

import StroiesBg from "/stories.webp";
import HeadingTitle from "../HeadingTitle";
import { motion } from "framer-motion";

import { variants } from "../../Animations";
import { lazy, Suspense } from "react";

const CountUp = lazy(() => import("react-countup"));

const Stories = () => {
  const content = [
    { number: 18, title: " Years of Experience" },
    { number: 1200, title: "Join Indian Army" },
    { number: 100, title: "Best Teachers" },
    { number: 5000, title: "Total Students" },
  ];
  return (
    <Box className="relative flex flex-col justify-center items-center">
      <img
        width="1200"
        height="600"
        className="w-full h-auto"
        src={StroiesBg}
        alt="Stories"
      />
      <motion.div
        variants={variants["slideFromBottom"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white   w-full md:absolute lg:right-28 lg:top-30 xl:top-56  md:h-[380px] lg:h-[500px] md:w-[400px] lg:w-[500px] "
      >
        <Box className="h-[10px] bg-[#F5961B] opacity-50 !w-full">{"  "}</Box>
        <Box className="flex flex-col justify-center items-center p-9">
          <HeadingTitle text="Stories" content="Success Story" />
          <h3 className=" font-semibold text-sm md:text-lg lg:text-2xl">
            Many Students Have Already Selected In Armed Forces Through
            Hindustan defence academy
          </h3>
          <Box className="grid grid-cols-2 gap-8 mt-8 ">
            {content.map((item, index) => (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <CountUp start={0} end={item.number} delay={0}>
                  {({ countUpRef }) => (
                    <Box className="flex flex-col items-center text-center space-x-2 text-4xl font-bold text-[#F5961B]">
                      <Box className="flex items-center">
                        <span ref={countUpRef} />
                        <span className="ml-1">+</span>{" "}
                      </Box>
                      <h1 className="text-sm text-black font-semibold !m-0">
                        {item.title}
                      </h1>
                    </Box>
                  )}
                </CountUp>
              </Suspense>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Stories;
