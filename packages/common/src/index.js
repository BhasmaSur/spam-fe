// mui components
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PopupState from "material-ui-popup-state";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Link from "@mui/material/Link";

export {
  Link,
  makeStyles,
  createTheme,
  ThemeProvider,
  Box,
  Button,
  Paper,
  Typography,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  MenuIcon,
  SearchIcon,
  AccountCircle,
  MailIcon,
  NotificationsIcon,
  MoreIcon,
  PopupState,
  Divider,
  MenuList,
  ListItemText,
  ListItemIcon,
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
  ClickAwayListener,
  HomeIcon,
  PlaylistRemoveIcon,
  Tooltip,
  DeleteIcon,
  AddIcon,
  LogoutIcon
};

//external packages
import { v4 as uuidv4 } from "uuid";

//custom components

import {InputField,RemovableInputField} from "./components/input-field/";
import PrimarySearchAppBar from "./components/navbar";
import theme from "./components/theme";
import AddSpamTemplate from "./components/add-spam-template";
import { FirstAd, SecondAd } from "./components/ads";
import AddFields from "./components/add-fields";
import UploadImageBox from "./components/upload-img-box";


export {
  InputField,
  RemovableInputField,
  PrimarySearchAppBar,
  theme,
  uuidv4,
  FirstAd,
  SecondAd,
  AddSpamTemplate,
  AddFields,
  UploadImageBox
};

//custom hooks
import useWindowDimensions from "./utils/hooks/useWindowsDimensions";

export { useWindowDimensions };
