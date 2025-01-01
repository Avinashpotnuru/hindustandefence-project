/* eslint-disable react/prop-types */
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnquiryNowForm from "../EnquiryNowForm";

// Custom Previous Arrow Component
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
      color: "#fff",
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "transparent",
      color: "#fff",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const desktopImages = Array.from({ length: 8 }).map(
    (_, index) => `/header/desktop/desktop${index + 1}.webp`
  );

  const mobileImages = Array.from({ length: 8 }).map(
    (_, index) => `/header/mobileVersion/mobile${index + 1}.webp`
  );

  const images = isMobile ? mobileImages : desktopImages;

  const showArrows = desktopImages.length > 1;

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
    <Box>
      <Slider className=" h-auto" {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </Slider>
      <EnquiryNowForm />
    </Box>
  );
};

export default Header;
