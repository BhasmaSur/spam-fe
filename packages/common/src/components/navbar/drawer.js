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
  const redirectTo = (path)=>{
    handleMobileDrawerClose()
    historyHook(path)
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
            <ListItemText onClick={()=>redirectTo("/home")}>Home</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText  onClick={()=>redirectTo("/reported-sites")}>Reported Sites</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText  onClick={()=>redirectTo("/home")}>Spam Me Twice!</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </ClickAwayListener>
  );
};

export default Drawer;
