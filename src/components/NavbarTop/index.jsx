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
      <Box className="flex items-center lg:justify-evenly space-x-2 lg:w-[50%] ">
        <Box className="flex items-center space-x-3 group transition-all duration-300">
          <Box
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CallIcon className="group-hover:text-black" color="primary" />
          </Box>
          <Box className="hidden sm:flex flex-col">
            <h1 className="font-normal text-sm">Need help? Make a call</h1>
            <h4 className="text-[#f5961b] font-semibold group-hover:text-black">
              8445901901
            </h4>
          </Box>
        </Box>
        <Box className="flex items-center space-x-3 group transition-all duration-300 ">
          <Box
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EmailIcon className="group-hover:text-black" color="primary" />
          </Box>

          <Box className="hidden sm:flex flex-col ">
            <h1 className="font-normal text-sm">Contact Mail</h1>
            <h4 className="text-[#f5961b] font-semibold group-hover:text-black md:hidden lg:block">
              info@hindustandefence.com
            </h4>
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
