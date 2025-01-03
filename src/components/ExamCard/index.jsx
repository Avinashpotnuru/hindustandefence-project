/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";

const ExamCard = ({ image, content,padding }) => {
  return (
    <Paper className={`overflow-hidden ${padding && 'p-2'}`} elevation={3}>
      <Box className="overflow-hidden">
        <img
          className="w-full h-auto hover:scale-105 transition-all duration-300  "
          src={image}
          alt="exam"
        />
      </Box>

      <h4 className="text-center p-3 leading-[1.2] text-[#111] font-bold  text-[20px] md:text-[24px] lg:text-[26px]  ">
        {content}
      </h4>
    </Paper>
  );
};

export default ExamCard;
