import { createTheme } from "@spammetwice/common";
const theme = createTheme();

theme.palette.primary = {
  main: "#890",
};
theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
export default theme;
