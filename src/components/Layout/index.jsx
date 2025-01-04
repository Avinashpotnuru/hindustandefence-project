/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

import { FooterBottom, Navbar, Footer } from "../../components/index";

const Layout = ({ children }) => {
  return (
    <>
   
      <Navbar />
      <Box className="pt-14 lg:pt-[120px] ">{children}</Box>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
