;

import { HeadingTitle } from "../index";

import { CustomSlider } from "../index";
import { motion } from "framer-motion";

import { variants } from "../../Animations";


var settings = {
  dots: true,
  infinite:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 768, // For screens below 768px
      settings: {
        slidesToShow: 2, // Display 2 slides
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const mobileImages = Array.from({ length: 12 }).map(
  (_, index) => `/testimonials/testimonials${index + 1}.webp`
);

const Testimonials = () => {
  return (
    <motion.div
      variants={variants["slideFromBottom"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#fff5eb] py-11 px-5 md:px-8 lg:py-16 lg:px-20 testimonials "
    >
      <HeadingTitle text="Testimonials" content="What our Students Say" />
      <CustomSlider
        contentData={mobileImages}
        settings={settings}
        content="images"
      />
    </motion.div>
  );
};

export default Testimonials;
