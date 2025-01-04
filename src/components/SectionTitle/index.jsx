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
      className="flex flex-col justify-center items-center space-y-2 lg:space-y-4 gap-4 w-full p-5"
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
        className="font-bold font-rajdhani tracking-wide text-3xl md:text-4xl  lg:text-5xl"
        style={{ color: textColor }}
      >
        {mainTitle}
      </h3>
    </motion.div>
  );
};

export default SectionTitle;
