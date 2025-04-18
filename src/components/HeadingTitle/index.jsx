/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";

const HeadingTitle = ({ text, content }) => {
  return (
    <Box className="flex flex-col items-start w-full gap-3">
      <Box className="flex items-center w-full space-x-3">
        <Divider
          sx={{
            backgroundColor: "orange ",
            width: "10%",
            height: "3px",
          }}
        />
        <h1 className="text-sm font-bold tracking-wide text-center text-black uppercase">
          {text}
        </h1>
      </Box>
      {content && (
        <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl ">
          {content}{" "}
        </h2>
      )}
    </Box>
  );
};

export default HeadingTitle;
