/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";

const HeadingTitle = ({ text, content }) => {
  return (
    <Box className="flex flex-col  w-full  items-start gap-3">
      <Box className="flex items-center space-x-3 w-full">
        <Divider
          sx={{
            backgroundColor: "orange ",
            width: "10%",
            height: "3px",
          }}
        />
        <h1 className="text-center font-bold uppercase tracking-wide text-sm  text-black">
          {text}
        </h1>
      </Box>
      {content && <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl ">{content} </h2>}
    </Box>
  );
};

export default HeadingTitle;
