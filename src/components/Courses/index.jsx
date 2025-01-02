import { Box } from "@mui/material";

import { CustomSlider } from "../index";

import CourseBg from "/coursebg.webp";
import SectionTitle from "../SectionTitle";
import { courseContent } from "../../Data";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0, // Set to 0, to show the first slide initially
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0, // Set to 0 to show the first slide initially
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          slidesToShow: 2, // Display 2 slides
          slidesToScroll: 1,
          initialSlide: 0, // Set to 0 to show the first slide initially
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Display 1 slide
          slidesToScroll: 1,
          initialSlide: 0, // Set to 0 to show the first slide initially
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
      <SectionTitle title="Courses" mainTitle="Our Courses" textColor="white" />
      <CustomSlider
        content="text"
        settings={settings}
        contentData={courseContent}
      />
    </Box>
  );
};

export default Courses;
