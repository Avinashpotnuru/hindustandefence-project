import { Box } from "@mui/material";
import HomeGalleryBackGround from "/homegallery.webp";
import { SectionTitle } from "../index";
import { motion } from "framer-motion";

import { variants } from "../../Animations";

const Gallery = () => {
  const galleryImages = Array.from({ length: 8 }).map(
    (_, index) => `gallery/gallery${index + 1}.webp`
  );

  const tittleData = [
    "Weekly Test",
    "Physical Fitness Training",
    "Digital Classroom",
    "Biometric attendance",
    "Study Materials",
    "Library facility",
    "In-House Mess",
    "Extra Curriculum Activities",
  ];

  return (
    <Box
      className="px-5 py-8 md:py-10 lg:py-14 md:px-8 lg:px-20 "
      sx={{
        backgroundColor: "white",

        "@media (min-width: 1024px)": {
          minHeight: "100vh",
          backgroundImage: `url(${HomeGalleryBackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }}
    >
      <SectionTitle
        title="Gallery"
        mainTitle="Unparalleled Legacy"
        dividerColor="orange"
      />
      <motion.div
        variants={variants["slideFromBottom"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-5 mt-5 lg:grid-cols-4 "
      >
        {galleryImages.map((val, index) => (
          <Box
            key={index}
            className="relative w-full overflow-hidden bg-green-300 group"
          >
            <img
              src={val}
              alt="images"
              className="object-cover w-full h-full transition-all duration-300 hover:scale-110"
            />

            <Box className="absolute my-auto w-full bottom-[-40px] py-2 px-1 z-10 group-hover:bottom-0 transition-all duration-300 text-xs lg:text-base titleBg overflow-hidden max-h-[40px]">
              {tittleData[index]}
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default Gallery;
