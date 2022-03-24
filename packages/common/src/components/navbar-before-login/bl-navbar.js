import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  MenuIcon,
  SearchIcon,
  AccountCircle,
  MailIcon,
  NotificationsIcon,
  MoreIcon,
} from "@spammetwice/common";
import {
  SearchBar,
  SearchIconWrapper,
} from "@spammetwice/common/src/components/search-bar";
import { StyledInputBase } from "@spammetwice/common/src/components/styled-input-base";
import { Button } from "@mui/material";

const BLNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileDrawerEl, setMobileDrawerEl] = React.useState(false);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const isDrawerOpen = Boolean(mobileDrawerEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const drawerId = "primary-search-account-drawer-mobile";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Typography
              variant="h5"
              mr={1}
              noWrap
              component="div"
            >
              Spam Me Twice!
            </Typography>
          </Box>
          <Box width="1000px">
            <SearchBar>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchBar>
          </Box>

          <Box
          ml={1}
          >
          <Button size="small" color="secondary" variant="outlined">Login</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BLNavbar;
