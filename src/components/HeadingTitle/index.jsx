/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";

const HeadingTitle = ({ text }) => {
  return (
    <Box className="flex w-full uppercase items-center gap-3">
      <Divider
        className="w-[20%]"
        sx={{
          backgroundColor: "orange ",
          width: "20%",
          height: "2px",
        }}
      />
      <h1 className="text-center font-semibold tracking-wide text-sm uppercase text-black">
        About Our Academy
        {text}
      </h1>
    </Box>
  );
};

export default HeadingTitle;
