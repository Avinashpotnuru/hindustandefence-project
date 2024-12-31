/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DesktopMenu = ({ activeTab, setActiveTab }) => {
  const desktopMenuItems = [
    { id: 1, title: "Home", children: [] },
    { id: 2, title: "Online Registration", children: ["c1", "c2"] },
    { id: 3, title: "Institute", children: ["avinash", "c2"] },
    { id: 4, title: "Courses", children: [] },
    { id: 5, title: "Gallery", children: [] },
    { id: 6, title: "Admission", children: [] },
    { id: 7, title: "Defence Career", children: [] },
    { id: 8, title: "Blog", children: [] },
    { id: 9, title: "Career", children: [] },
    { id: 10, title: "Contact", children: [] },
  ];

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
  );
};

export default DesktopMenu;
