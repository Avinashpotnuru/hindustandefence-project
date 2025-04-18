/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";

const ExamCard = ({ image, content,padding }) => {
  return (
    <Paper className={`overflow-hidden ${padding && 'p-2'}`} elevation={3}>
      <Box className="overflow-hidden">
        <img
          className="w-full h-auto transition-all duration-300 hover:scale-105 "
          src={image}
          alt="exam"
        />
      </Box>

      <h4 className="text-center p-3 leading-[1.2] text-[#111] font-bold  text-[20px] md:text-[18px] xl:text-[24px]  ">
        {content}
      </h4>
    </Paper>
  );
};

export default ExamCard;
