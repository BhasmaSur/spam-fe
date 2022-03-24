import * as React from "react";
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
  HomeIcon,
  PlaylistRemoveIcon,
  Tooltip,
  DeleteIcon,
  AddIcon,
  Button,
} from "@spammetwice/common";
import {
  SearchBar,
  SearchIconWrapper,
} from "@spammetwice/common/src/components/search-bar";
import { StyledInputBase } from "@spammetwice/common/src/components/styled-input-base";
import MobileMenu from "./menu";
import NestedMenu from "./nested-menu";
import Drawer from "./drawer";

export default function PrimarySearchAppBar() {
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            aria-controls={drawerId}
            onClick={() => setMobileDrawerEl(!mobileDrawerEl)}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              mt={1}
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Spam Me Twice!
            </Typography>
            <Tooltip title="Home">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reported Sites">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <PlaylistRemoveIcon />
              </IconButton>
            </Tooltip>
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
          <Box>
            <Tooltip title="Post Scam">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      {mobileDrawerEl && (
        <Drawer
          mobileDrawerEl={mobileDrawerEl}
          setMobileDrawerEl={setMobileDrawerEl}
        />
      )}
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setAnchorEl={setAnchorEl}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
      />
      {/* <NestedMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/> */}
    </Box>
  );
}
