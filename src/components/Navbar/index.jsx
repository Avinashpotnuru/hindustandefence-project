import { useState } from "react";
import { AppBar, Box, Drawer, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "/parmanudefenceLogo.webp";

import { DesktopMenu, MobileDrawer, NavbarTop } from "../../components/index";
import useOutsideClick from "../../Hooks/useOutsideClick";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const navRef = useOutsideClick(() => {
    setActiveTab(null); 
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box className="bg-orange-100">
        <AppBar
          ref={navRef}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          position="static"
        >
          <Toolbar className="flex md:justify-between items-center text-black lg:w-[80%] lg:m-auto">
            <IconButton
              color="primary"
              edge="start"
              aria-label="menu"
              className="lg:!hidden w-[10%]"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <NavbarTop Logo={Logo} />
          </Toolbar>
          <DesktopMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: "w-64" }}
          >
            <MobileDrawer />
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
