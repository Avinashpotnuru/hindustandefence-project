import { Box, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ExamCard } from "../index";
const MoreInformation = () => {
  const images = Array.from({ length: 3 }).map(
    (_, index) => `/information/information${index + 1}.jpg`
  );

  const content = [
    "www.indianairforce.nic.in",
    "www.indianarmy.nic.in",
    "www.indiannavy.nic.in",
  ];

  return (
    <Box className="py-8 md:py-10 lg:py-14 px-5 md:px-8 lg:px-28 bg-[#fff5eb] flex-col justify-center items-center  space-y-8 ">
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8">
        {["click here for online registration", "online classes"].map(
          (item, index) => (
            <Button
              key={index}
              sx={{
                height: "50px",
                fontFamily: "Rajdhani, serif",
                background:
                  "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
                color: "white",
              }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {item}
            </Button>
          )
        )}
      </Box>
      <Box className="space-y-8 lg:space-y-9  lg:px-[120px]">
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-4 ">
          For More Information on Indian armed force{" "}
          <br className="hidden lg:block" /> Click Below :
        </h2>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
          {images.map((image, index) => (
            <ExamCard
              key={index}
              image={image}
              content={content[index]}
              padding
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MoreInformation;
