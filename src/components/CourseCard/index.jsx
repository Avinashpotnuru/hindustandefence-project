/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const CourseCard = ({ item }) => {
  return (
    <Box className="bg-white mx-3 p-8 text-center flex  flex-col  justify-around items-center min-h-[374px] lg:min-h-[394px] xl:min-h-[374px] space-y-6">
      <Box className="flex justify-center items-center bg-[#f8f5f0] h-[100px] w-[100px] rounded-full">
        <VerifiedIcon sx={{ fontSize: "38px" }} color="primary" />
      </Box>
      <Box className="space-y-3">
        <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          {item.title}
        </h4>
        <h4 className="text-sm text-center lg:text-lg">{item.content}</h4>
      </Box>
    </Box>
  );
};

export default CourseCard;
