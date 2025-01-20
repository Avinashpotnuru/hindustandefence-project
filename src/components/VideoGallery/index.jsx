import { Box } from "@mui/material";
import VideoBg from "/videogallerybg.webp";
import { SectionTitle } from "../index";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { variants } from "../../Animations";

const ReactPlayer = lazy(() => import("react-player/youtube"));

const VideoGallery = () => {
  return (
    <Box
      className="py-12 md:py-10 lg:py-20 px-5 md:px-8 lg:px-20 bg-cover bg-center bg-no-repeat"
      sx={{
        backgroundImage: `url(${VideoBg})`,
      }}
    >
      <SectionTitle
        title="Gallery"
        mainTitle="Video Gallery"
        textColor="white"
      />
      <motion.div
        variants={variants["slideFromBottom"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {["_wwKuirP9Qg", "22NVcnBCl80"].map((item, index) => (
          <Box
            key={index}
            className="relative"
            sx={{
              paddingTop: "56.25%",
              height: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item}`}
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                light={`https://img.youtube.com/vi/${item}/hqdefault.jpg`}
                aria-label={`Video ${index + 1}`}
              />
            </Suspense>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default VideoGallery;
