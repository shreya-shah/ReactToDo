import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#E91E63",
      dark: "#C2185B",
      light: "#F8BBD0",
    },
    secondary: {
      main: "#FFC107",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#fff",
      },
    },
  },
});

export default theme;