/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

import { FooterBottom, Navbar, Footer } from "../../components/index";

const Layout = ({ children }) => {
  return (
    <>
   
      <Navbar />
      <Box className="">{children}</Box>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
