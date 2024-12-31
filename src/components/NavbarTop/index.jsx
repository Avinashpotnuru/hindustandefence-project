/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const NavbarTop = ({ Logo }) => {
  return (
    <Box className="flex items-center justify-between space-x-2 w-[90%] md:w-full">
      <img
        src={Logo}
        alt="Parmanu Logo"
        className="h-10 w-auto object-contain"
      />
      <Box className="flex items-center lg:justify-evenly space-x-2 lg:w-[40%]">
        <Box className="flex items-center space-x-3">
          <CallIcon color="primary" />
          <Box className="hidden sm:flex flex-col">
            <h1>Need help? Make a call</h1>
            <h2 className="text-[#f5961b] font-bold">8919016096</h2>
          </Box>
        </Box>
        <Box className="flex items-center space-x-3">
          <EmailIcon color="primary" />
          <Box className="hidden sm:flex flex-col">
            <h1>Contact Mail</h1>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{
          display: { xs: "none", sm: "flex" },
          fontFamily: "Rajdhani, serif",
          background: "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
          color: "white",
        }}
        endIcon={<ArrowCircleRightIcon />}
      >
        Enquiry Now
      </Button>
    </Box>
  );
};

export default NavbarTop;
