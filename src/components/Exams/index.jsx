import { Box } from "@mui/material";

import { ExamCard, HeadingTitle } from "../index";
import { motion } from "framer-motion";

import { variants } from "../../Animations";


const Exams = () => {
  const images = Array.from({ length: 3 }).map(
    (_, index) => `/exams/exam${index + 1}.webp`
  );

  const content = ["Indian Army", "Indian Air Force", "Indian Navy"];
  return (
    <motion.div
      variants={variants["slideFromBottom"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#fff5eb] py-16 md:py-24 lg:py-30 px-5 md:px-8  lg:px-20 space-y-6 lg:space-y-8"
    >
      <HeadingTitle text="Exams" content="Competitive Exams" />
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        {images.map((image, index) => (
          <ExamCard key={index} image={image} content={content[index]} />
        ))}
      </Box>
    </motion.div>
  );
};

export default Exams;
