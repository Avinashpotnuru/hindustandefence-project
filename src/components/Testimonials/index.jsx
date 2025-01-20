import { Suspense, lazy, useMemo } from "react";
import { HeadingTitle } from "../index";
import { motion } from "framer-motion";
import { variants } from "../../Animations";


const CustomSlider = lazy(() => import("../CustomSlider"));


const Testimonials = () => {
  
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
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
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }),
    [] 
  );

 
  const mobileImages = useMemo(
    () =>
      Array.from({ length: 12 }).map(
        (_, index) => `/testimonials/testimonials${index + 1}.webp`
      ),
    [] 
  );
  return (
    <motion.div
      variants={variants["slideFromBottom"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#fff5eb] py-11 px-5 md:px-8 lg:py-16 lg:px-20 testimonials overflow-hidden"
    >
      <HeadingTitle text="Testimonials" content="What our Students Say" />
      <Suspense fallback={<div>Loading slider...</div>}>
        <CustomSlider
          contentData={mobileImages}
          settings={settings}
          content="images"
        />
      </Suspense>
    </motion.div>
  );
};

export default Testimonials;
