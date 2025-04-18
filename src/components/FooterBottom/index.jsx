import { Box } from "@mui/material";

const FooterBottom = () => {
  return (
    <Box className="bg-[#048f18] text-white py-8 text-sm px-5 lg:px-28 w-full !border-t-2 !border-white ">
      <Box className="container flex flex-col items-center justify-between mx-auto space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
        <Box className="flex items-center gap-5">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </Box>

        <Box>
          <p>
           
            Hindustan defence academy © Copyright 2024. All Rights Reserved
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterBottom;
