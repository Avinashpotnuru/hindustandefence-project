import { Box } from "@mui/material";

import { ExamCard, HeadingTitle } from "../index";

const Exams = () => {
  const images = Array.from({ length: 3 }).map(
    (_, index) => `/exams/exam${index + 1}.webp`
  );

  const content = ["Indian Army", "Indian Air Force", "Indian Navy"];
  return (
    <Box className="bg-[#fff5eb] py-16 md:py-24 lg:py-30 px-5 md:px-8  lg:px-20 space-y-6 lg:space-y-8">
      <HeadingTitle text="Exams" content="Competitive Exams" />
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        {images.map((image, index) => (
          <ExamCard key={index} image={image} content={content[index]} />
        ))}
      </Box>
    </Box>
  );
};

export default Exams;
