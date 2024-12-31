import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";

import CallIcon from "@mui/icons-material/Call";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import Logo from "/parmanudefenceLogo.webp";
import useOutsideClick from "../../Hooks/useOutsideClick";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const navRef = useOutsideClick(() => {
    setActiveTab(null); // Reset active tab when clicking outside
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu Items
  const menuItems = [
    "Online Registration",
    "Institute",
    "Courses",
    "Gallery",
    "Admission",
    "Defence Career",
    "Blog",
    "Career",
    "Contact",
  ];

  const desktopMenuItems = [
    {
      id: 1,
      title: "Home",
      children: [],
    },
    {
      id: 2,
      title: "Online Registration",
      children: ["c1", "c2"],
    },
    {
      id: 3,
      title: "Institute",
      children: ["avinash", "c2"],
    },
    {
      id: 4,
      title: "Courses",
      children: [],
    },
    {
      id: 5,
      title: "Gallery",
      children: [],
    },
    {
      id: 6,
      title: "Admission",
      children: [],
    },
    {
      id: 7,
      title: "Defence Career",
      children: [],
    },
    {
      id: 8,
      title: "Blog",
      children: [],
    },
    {
      id: 9,
      title: "Career",
      children: [],
    },
    {
      id: 10,
      title: "Contact",
      children: [],
    },
  ];

  // Drawer content for mobile view
  const drawer = (
    <Box className="bg-orange-50 h-full">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item} className="text-gray-800" />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box className="bg-orange-100">
        <AppBar
          ref={navRef}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          position="static"
          className=""
        >
          <Toolbar className="flex md:justify-between items-center  text-black  lg:w-[80%] lg:m-auto">
            <IconButton
              color="primary"
              edge="start"
              aria-label="menu"
              className="lg:!hidden w-[10%]"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box className="flex items-center justify-between space-x-2  w-[90%]  md:w-full  ">
              <img
                src={Logo}
                alt="Parmanu Logo"
                className="h-10 w-auto object-contain "
              />
              <Box className="flex items-center lg:justify-evenly space-x-2  lg:w-[40%] ">
                <Box className="flex items-center space-x-3  ">
                  <CallIcon color="primary" />
                  <Box className="hidden sm:flex flex-col ">
                    <h1>Need help? Make a call</h1>
                    <h2 className="text-[#f5961b] font-bold">8919016096</h2>
                  </Box>
                </Box>
                <Box className="flex items-center space-x-3 ">
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
                  background:
                    "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
                  color: "white",
                }}
                endIcon={<ArrowCircleRightIcon />}
              >
                Enquiry Now
              </Button>
            </Box>
          </Toolbar>
          <Box
            className="hidden lg:flex"
            sx={{
              backgroundColor: "primary.main",
              // Use "none" instead of "hidden"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",

                color: "white",
                padding: 2,
                width: "80%",
                margin: "0 auto",
              }}
            >
              {desktopMenuItems.map((val) => (
                <Box
                  onMouseMove={() => setActiveTab(val.id)}
                  key={val.id}
                  className="relative"
                >
                  <Box className="flex gap-2 space-x-2">
                    <h1>{val.title}</h1>
                    {val.children.length > 0 && (
                      <KeyboardArrowDownRoundedIcon
                        className={`transition-transform ${
                          activeTab === val.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Box>
                  {val.children.length ? (
                    <Box
                      className={`absolute children-dropdown text-black bg-white p-2 top-[40px] ${
                        activeTab === val.id ? "active" : ""
                      }`}
                    >
                      {val.children.map((child) => (
                        <h1 className="text-black space-y-3" key={child}>
                          {child}
                        </h1>
                      ))}
                    </Box>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Box>

          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: "w-64" }}
          >
            {drawer}
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
