/* eslint-disable react/prop-types */
import { Box, Button, IconButton } from "@mui/material";
import { HeadingTitle } from "../index";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "transparent",
      color: "orange",
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",

      right: window.innerWidth >= 1024 ? "50px" : "10px",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "",
      color: "orange",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Awards = () => {
  const images = Array.from({ length: 4 }).map(
    (_, index) => `/awards/award${index + 1}.webp`
  );

  const content = [
    {
      title: "Awards & Accolades",
      content:
        "Appreciation for better work paves the ways for many others to come. PARMANU DEFENCE officials, Dr Rajesh Kumar & Sushil Kumar were awarded the Educationist award by INDIAN PLAN group for his long, dedicated and exemplary services to the noble cause of education",
    },
    {
      title: "Honored by Bollywood Icon Madhuri Dixit",
      content:
        "In a moment of immense pride and distinction, the esteemed Parmanu Defence Academy Dehradun, led by the visionary Dr. Rajesh Malhotra, has been awarded the prestigious Indo Global Business Award for “Best Defence Academy in North India”.",
    },
    {
      title: "Awards & Accolades",
      content:
        "Appreciation for better work paves the ways for many others to come. PARMANU DEFENCE officials, Dr Rajesh Kumar & Sushil Kumar were awarded the Educationist award by INDIAN PLAN group for his long, dedicated and exemplary services to the noble cause of education",
    },
    {
      title:"Parmanu Defence Director receives the Nation Icon Award 2023",
      content:
        "In a glorious moment of recognition and honor, Dr. Rajesh Malhotra, the Director of Parmanu Defence Academy in Dehradun, has been conferred with the prestigious Nation Icon Award 2023.",
    },
  ];

  const showArrows = images.length > 1;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
  };

  return (
    <Box className="flex justify-center items-center bg-[#fbd5be] py-16 md:py-24 lg:py-30 px-5 md:px-8 lg:px-24">
      <Box className="w-full max-w-[1200px] ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} className="flex justify-center items-center">
              <Box className="w-[98%] flex flex-col md:flex-row justify-center items-center bg-white">
                <img
                  className="w-full md:w-1/2 h-auto"
                  src={image}
                  alt="awards"
                />
                <Box className="p-5 md:w-1/2 space-y-3 md:p-7 lg:p-10">
                  <HeadingTitle text="Awards" content={content[index].title} />
                  <h4>{content[index].content}</h4>
                  <Button
                    sx={{
                      fontFamily: "Rajdhani, serif",
                      background:
                        "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
                      color: "white",
                    }}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Awards;
