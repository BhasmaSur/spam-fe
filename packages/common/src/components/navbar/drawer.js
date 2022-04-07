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
import {useNavigate,Link} from "react-router-dom"
const Drawer = ({ setMobileDrawerEl }) => {
  const historyHook = useNavigate()
  const handleMobileDrawerClose = () => {
    setMobileDrawerEl(null);
  };
  const redirectToHome = ()=>{
    historyHook("/home")
  }
  
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
            <ListItemText onClick={redirectToHome}>Home</ListItemText>
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
