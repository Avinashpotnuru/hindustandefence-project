import { Box, List, ListItem, ListItemText } from "@mui/material";

const MobileDrawer = () => {
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

  return (
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
};

export default MobileDrawer;
