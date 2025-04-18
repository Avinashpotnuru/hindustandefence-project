/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { variants } from "../../Animations";
const SectionTitle = ({
  title,
  mainTitle,
  textColor = "black", 
  dividerColor = "white",
}) => {
  return (
    <motion.div
      variants={variants["slideFromBottom"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center w-full gap-4 p-5 space-y-2 lg:space-y-4"
    >
      <Box className="flex justify-center items-center gap-3 w-[70%] md:w-1/2 ">
        <Divider
          sx={{
            backgroundColor: dividerColor,
            width: { xs: "50%", lg: "20%" },
            height: "3px",
          }}
        />
        <h1
          className={`font-semibold tracking-wide text-sm uppercase `}
          style={{ color: textColor }}
        >
          {title}
        </h1>
        <Divider
          sx={{
            backgroundColor: dividerColor,
            width: { xs: "50%", lg: "20%" },
            height: "3px",
          }}
        />
      </Box>

      <h3
        className="text-3xl font-bold tracking-wide font-rajdhani md:text-4xl lg:text-5xl"
        style={{ color: textColor }}
      >
        {mainTitle}
      </h3>
    </motion.div>
  );
};

export default SectionTitle;
