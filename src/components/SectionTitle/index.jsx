/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";

const SectionTitle = ({ title,mainTitle }) => {
  return (
    <Box className="flex flex-col justify-center items-center space-y-2 lg:space-y-4    gap-4  w-full p-5 ">
      <Box className="flex justify-center items-center gap-3 w-[70%] md:w-1/2 uppercase ">
        <Divider
          sx={{
            backgroundColor: "orange ",
            width: { xs: "50%", lg: "20%" },
            height: "3px",
          }}
        />
        <h1 className="font-semibold tracking-wide text-sm uppercase text-black">
          {title}
        </h1>
        <Divider
          sx={{
            backgroundColor: "orange ",
            width: { xs: "50%", lg: "20%" },
            height: "3px",
          }}
        />
      </Box>

      <h3 className="font-bold font-rajdhani tracking-wide text-3xl md:text-4xl uppercase text-black lg:text-5xl">
        {mainTitle}
      </h3>
    </Box>
  );
};

export default SectionTitle;
