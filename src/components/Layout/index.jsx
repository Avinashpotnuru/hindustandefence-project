/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

import { Navbar } from "../../components/index";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
      footer
    </Box>
  );
};

export default Layout;
