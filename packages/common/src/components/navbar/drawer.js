import React from "react";
import {
  Paper,
  MenuItem,
  ListItemIcon,
  MenuList,
  ContentCut,
  ListItemText,
  Typography,
  ContentCopy,
  ContentPaste,
  Divider,
  Cloud,
  ClickAwayListener
} from "@spammetwice/common";
const Drawer = ({ setMobileDrawerEl }) => {
  const handleMobileDrawerClose = () => {
    setMobileDrawerEl(null);
  };
  
  return (
    <ClickAwayListener onClickAway={handleMobileDrawerClose}>
      <Paper
        sx={{ width: "100%", display: { xs: "flex", md: "none" } }}
        onClose={() => console.log(testing)}
      >
        <MenuList
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <MenuItem>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Reported Sites</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Spam Me Twice!</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </ClickAwayListener>
  );
};

export default Drawer;
