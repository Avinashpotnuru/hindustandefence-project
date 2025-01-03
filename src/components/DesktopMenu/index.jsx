/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { desktopMenuItems } from "../../Data";

const DesktopMenu = ({ activeTab, setActiveTab }) => {
  return (
    <Box className="hidden lg:flex" sx={{ backgroundColor: "primary.main" }}>
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
        {desktopMenuItems?.map((val) => (
          <Box
            onMouseMove={() => setActiveTab(val.id)}
            key={val.id}
            className="relative"
          >
            <Box className="flex gap-2 space-x-2">
              <h1>{val?.title}</h1>
              {val?.children?.length > 0 && (
                <KeyboardArrowDownRoundedIcon
                  className={`transition-transform ${
                    activeTab === val.id ? "rotate-180" : ""
                  }`}
                />
              )}
            </Box>
            {val?.children?.length ? (
              <Box
                className={`absolute children-dropdown text-black font-semibold bg-white space-y-3 min-w-[200px] p-2 top-[40px] ${
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
  );
};

export default DesktopMenu;
