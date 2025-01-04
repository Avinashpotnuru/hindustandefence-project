import { Box } from "@mui/material";

import { CustomSlider } from "../index";

import CourseBg from "/coursebg.webp";
import SectionTitle from "../SectionTitle";
import { courseContent } from "../../Data";
import { motion } from "framer-motion";

import { variants } from "../../Animations";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          initialSlide: 0, 
        },
      },
    ],
  };

  

  return (
    <Box
      className="py-12 md:py-10 lg:py-20 px-5 md:px-8 lg:px-20 bg-cover bg-center bg-no-repeat min-h-[75vh] md:min-h-[65vh]  lg:min-h-[70vh] courses "
      sx={{
        backgroundImage: `url(${CourseBg})`,
      }}
    >
      <motion.div
        variants={variants["slideFromBottom"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Courses"
          mainTitle="Our Courses"
          textColor="white"
        />
        <CustomSlider
          content="text"
          settings={settings}
          contentData={courseContent}
        />
      </motion.div>
    </Box>
  );
};

export default Courses;
