import { Box } from "@mui/material";
import HomeGalleryBackGround from "/homegallery.webp";
import { SectionTitle } from "../index";

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
      className="py-8 md:py-10 lg:py-14 px-5 md:px-8 lg:px-20"
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
      <Box className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {galleryImages.map((val, index) => (
          <Box
            key={index}
            className="group  bg-green-300 w-full relative overflow-hidden"
          >
            <img
              src={val}
              alt="images"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            />

            <Box className="absolute my-auto w-full bottom-[-40px] py-2 px-1 z-10 group-hover:bottom-0 transition-all duration-300 text-xs lg:text-base titleBg overflow-hidden max-h-[40px]">
              {tittleData[index]}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
