/* eslint-disable react/prop-types */
import { Box, List, ListItem, ListItemText } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { desktopMenuItems } from "../../Data";
import { useState } from "react";
import Logo from "/parmanudefenceLogo.webp";
import CloseIcon from "@mui/icons-material/Close";

const MobileDrawer = ({ setMobileOpen }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleToggle = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };
  return (
    <Box className="h-full bg-orange-50">
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: 60,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <img
          src={Logo}
          alt="Parmanu Logo"
          className="object-contain w-auto h-10"
        />
        <CloseIcon onClick={() => setMobileOpen(false)} className="text-white" />
      </Box>
      <List>
        {desktopMenuItems?.map((item, index) => (
          <div key={index}>
            <ListItem onClick={() => handleToggle(item?.id)}>
              <ListItemText primary={item?.title} className="text-gray-800" />
              {item?.children?.length > 0 && (
                <KeyboardArrowDownRoundedIcon
                  className={`transition-transform ${
                    activeTab === item?.id ? "rotate-180" : ""
                  }`}
                />
              )}
            </ListItem>
            {activeTab === item?.id && item?.children?.length > 0 && (
              <Box
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                 
                }}
              >
                {item?.children?.map((child, childIndex) => (
                  <h1
                    style={{ color: "black", margin: "5px 0" }}
                    key={childIndex}
                  >
                    {child}
                  </h1>
                ))}
              </Box>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default MobileDrawer;
